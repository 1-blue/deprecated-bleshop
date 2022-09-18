import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import dynamic from "next/dynamic";

// api
import apiService, { axiosInstance } from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const TitleNav = dynamic(() => import("@src/components/common/Nav/TitleNav"), {
  suspense: true,
});
const OrderProducts = dynamic(
  () => import("@src/components/Products/OrderProducts"),
  { suspense: true }
);
const NotLoggedIn = dynamic(() => import("@src/components/common/401"), {
  suspense: true,
});

// type
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import type { Order } from "@prisma/client";
import type { ApiGetOrderListResponse } from "@src/types";
import { AxiosError } from "axios";

type Props = {
  orderList: ApiGetOrderListResponse["orderList"];
  isLoggedIn?: boolean;
};

const Order: NextPage<Props> = ({ orderList, isLoggedIn = true }) => {
  // 2022/09/04 - 로그인한 유저의 주문 목록 수정 함수 - by 1-blue
  const setOrderList = useSetRecoilState(
    stateService.orderService.orderListState
  );

  // 2022/09/04 - 로그인한 유저의 주문 목록 초기화 - by 1-blue
  useEffect(() => setOrderList(orderList), [setOrderList, orderList]);

  return (
    <>
      <HeadInfo
        title="BleShop - 구매 목록"
        description="BleShop의 구매 목록 페이지입니다."
      />

      <article className="pt-4 space-y-4">
        <TitleNav title="내 정보" />

        {isLoggedIn ? <OrderProducts /> : <NotLoggedIn />}
      </article>
    </>
  );
};

export default Order;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";
  axiosInstance.defaults.headers.Cookie = cookie;

  let orderList: ApiGetOrderListResponse["orderList"] = [];

  try {
    const { data } = await apiService.orderService.apiGetOrderList();
    orderList = data.orderList;
  } catch (error) {
    // 로그인 하지 않은 유저인 경우 실행
    if (error instanceof AxiosError) {
      if (error.response?.status === 403) {
        return {
          props: { orderList, isLoggedIn: false },
        };
      }
    }

    console.error("getServerSideProps information/order >> ", error);
  } finally {
    axiosInstance.defaults.headers.Cookie = "";
  }

  return {
    props: {
      orderList,
    },
  };
};
