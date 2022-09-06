import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// api
import apiService, { axiosInstance } from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Nav from "@src/components/common/Nav";
import OrderProducts from "@src/components/Products/OrderProducts";

// type
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import type { Order } from "@prisma/client";
import type { ApiGetOrderListResponse } from "@src/types";

type Props = {
  orderList: ApiGetOrderListResponse["orderList"];
};

const Order: NextPage<Props> = ({ orderList }) => {
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
        <Nav.TitleNav title="내 정보" />

        <OrderProducts />
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
