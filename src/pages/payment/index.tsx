import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const Background = dynamic(
  () => import("@src/components/common/Support/Background"),
  { suspense: true }
);
const Title = dynamic(() => import("@src/components/common/Support/Title"), {
  suspense: true,
});
const SubTitle = dynamic(
  () => import("@src/components/common/Support/SubTitle"),
  { suspense: true }
);
const TitleNav = dynamic(() => import("@src/components/common/Nav/TitleNav"), {
  suspense: true,
});
const Button = dynamic(() => import("@src/components/common/Tool/Button"), {
  suspense: true,
});

// type
import type { Iamport } from "@src/types";
import { AxiosError } from "axios";

declare global {
  interface Window {
    IMP: Iamport;
  }
}

const Payment = () => {
  const router = useRouter();

  // 2022/09/04 - iamport 사용을 위한 cdn - by 1-blue
  useEffect(() => {
    toast.info("테스트용 결제이며, 실제로 결제가 되지 않습니다.");

    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";

    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js";

    document.head.appendChild(jquery);
    document.head.appendChild(iamport);

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  // 2022/09/04 - 결제를 위한 데이터 - by 1-blue
  const paymentData = useRecoilValue(
    stateService.paymentService.productToPayment
  );

  // 2022/09/04 - iamport를 이용한 결제 - by 1-blue
  const onPayment = useCallback(
    (pg: "kakaopay" | "tosspay") => () => {
      if (!process.env.NEXT_PUBLIC_IAMPORT_CODE)
        return toast.error("iamport의 가맹점 식별코드가 없습니다.");
      if (!paymentData) {
        toast.error(
          "결제할 상품의 정보가 존재하지 않습니다. 메인 화면으로 이동됩니다."
        );
        return router.push("/");
      }

      // iamport를 사용하기 위해 가맹점 식별코드 등록
      window.IMP.init(process.env.NEXT_PUBLIC_IAMPORT_CODE);

      window.IMP.request_pay(
        { ...paymentData, pg, pay_method: "card" },
        async (rsp) => {
          if (
            !rsp.buyer_name ||
            !rsp.buyer_addr ||
            !rsp.paid_amount ||
            !rsp.buyer_email ||
            !rsp.buyer_tel ||
            !rsp.pg_provider
          )
            return toast.warning("결제에 필요한 데이터가 부족합니다.");

          if (rsp.success) {
            try {
              // >>> 결제 완료 DB 저장 ( 실제 결제라면 유효성 검사를 실시하고 DB에 저장해야함 )
              await apiService.orderService.apiCreateOrder({
                singleData: rsp.custom_data.singleData,
                orderData: {
                  name: rsp.buyer_name,
                  address: rsp.buyer_addr,
                  residence: rsp.custom_data.residence,
                  message: rsp.custom_data.message,
                  amount: rsp.paid_amount,
                  email: rsp.buyer_email,
                  phone: rsp.buyer_tel,
                  provider: rsp.pg_provider,
                },
              });

              toast.success(
                "결제가 완료되었습니다. 2초뒤에 결제내역 페이지로 이동합니다.",
                { autoClose: 2000 }
              );

              setTimeout(() => router.push("/information/order"), 2000);
            } catch (error) {
              console.error("error >> ", error);

              if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
              } else {
                toast.error("알 수 없는 문제로 인해 결제에 실패했습니다.");
              }
            }
          } else {
            toast.error("결제에 실패했습니다. " + rsp.error_msg, {
              autoClose: 2000,
            });
          }
        }
      );
    },
    [router, paymentData]
  );

  return (
    <>
      <HeadInfo
        title="BleShop - 결제"
        description="BleShop의 결제 페이지입니다."
      />

      <article className="pt-4 space-y-4">
        <TitleNav title="돌아가기" />

        <Background className="space-y-2 sm:space-y-4" hasPadding>
          <Title text="결제" />

          <ul className="space-y-2 sm:space-y-4">
            <li className="flex flex-col">
              <SubTitle text="토스로 결제" />
              <Button
                type="button"
                onClick={onPayment("tosspay")}
                className="bg-blue-400 p-2 rounded-md text-white sm:text-lg font-bold hover:bg-blue-500 focus:outline-none focus:bg-blue-500 transition-colors"
                text="toss"
              />
            </li>
            <li className="flex flex-col">
              <SubTitle text="카카오페이로 결제" />
              <Button
                type="button"
                onClick={onPayment("kakaopay")}
                className="bg-yellow-300 p-2 rounded-md text-black sm:text-lg font-bold hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 transition-colors"
                text="kakaopay"
              />
            </li>
          </ul>
        </Background>
      </article>
    </>
  );
};

export default Payment;
