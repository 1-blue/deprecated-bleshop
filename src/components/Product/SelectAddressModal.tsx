import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// util
import { addSeparatorToPhone } from "@src/libs";

// component
import Modal from "@src/components/common/Modal";
import Support from "@src/components/common/Support";

// type
import type { Address, Product } from "@prisma/client";
import type { ApiCreateOrderBody, DetailProduct } from "@src/types";

type Props = {
  products: (DetailProduct | Product)[];
  singleData: ApiCreateOrderBody["singleData"];
  onCloseModal: () => void;
};

const SelectAddressModal = ({ products, singleData, onCloseModal }: Props) => {
  const { data } = useSession();
  const router = useRouter();

  // 2022/09/04 - 구매 관련 데이터 저장 함수 - by 1-blue
  const setProductToPayment = useSetRecoilState(
    stateService.paymentService.productToPayment
  );

  // 2022/09/04 - 로그인한 유저의 배송지들 - by 1-blue
  const [addresses, setAddresses] = useState<Address[]>([]);
  useEffect(() => {
    (async () => {
      const {
        data: { addresses },
      } = await apiService.addressService.apiGetAllAddress();

      setAddresses(addresses!);
    })();
  }, []);

  // 2022/09/04 - 주소 선택 및 결제 페이지로 이동 - by 1-blue
  const onSelectAddress = useCallback(
    (selectedAddress: Address) => () => {
      if (!data?.user) return;
      onCloseModal();

      const postcode = selectedAddress.address.slice(
        selectedAddress.address.indexOf("[") + 1,
        selectedAddress.address.lastIndexOf("]")
      );

      // 단일 상품 주문
      if (products.length === 1) {
        const product = products[0];

        setProductToPayment({
          escrow: false,
          merchant_uid: `mid_${Date.now()}`,
          name: product.name,
          amount: product.price * singleData[0].quantity,
          custom_data: {
            residence: selectedAddress.residence,
            message: selectedAddress.message,
            singleData: [
              {
                ...singleData[0],
                productIdx: product.idx,
              },
            ],
          },
          language: "ko",
          buyer_name: selectedAddress.name,
          buyer_tel: selectedAddress.phone,
          buyer_email: data.user.email,
          buyer_addr: selectedAddress.address,
          buyer_postcode: postcode,
          m_redirect_url:
            process.env.NEXT_PUBLIC_FRONT_URL + "/api/payment/complete/mobile",
        });
      }
      // 다중 상품 주문
      else {
        setProductToPayment({
          escrow: false,
          merchant_uid: `mid_${Date.now()}`,
          name: products[0].name + `외 ${products.length - 1}개`,
          amount: singleData
            .map((data, i) => data.quantity * products[i].price)
            .reduce((curr, prev) => curr + prev),
          custom_data: {
            residence: selectedAddress.residence,
            message: selectedAddress.message,
            singleData: singleData.map((v, i) => ({
              ...v,
              productIdx: products[i].idx,
            })),
          },
          language: "ko",
          buyer_name: selectedAddress.name,
          buyer_tel: selectedAddress.phone,
          buyer_email: data.user.email,
          buyer_addr: selectedAddress.address,
          buyer_postcode: postcode,
          m_redirect_url:
            process.env.NEXT_PUBLIC_FRONT_URL + "/api/payment/complete/mobile",
        });
      }

      router.push("/payment");
    },
    [data, products, onCloseModal, setProductToPayment, singleData, router]
  );

  return (
    <Modal
      onCloseModal={onCloseModal}
      className="space-y-2 max-w-[500px] min-w-[250px]"
    >
      <h6 className="text-base sm:text-xl md:text-2xl font-bolder text-center bg-indigo-400 py-2 text-white">
        배송지 선택
      </h6>

      <ul className="space-y-3 flex flex-col px-4 py-2">
        {addresses.map((address) => (
          <li key={address.idx}>
            <button
              type="button"
              className="flex flex-col w-full bg-gray-200 p-2 rounded-md space-y-0.5 hover:bg-indigo-300 hover:text-white focus:outline-none focus:bg-indigo-400 focus:text-white transition-colors"
              onClick={onSelectAddress(address)}
            >
              <div className="font-bold">
                <span className="md:text-lg">{address.name}</span>
                {address.isDefault && (
                  <span className="inline-block text-[8px] p-1 ml-1 text-blue-400 bg-white border-blue-400 border rounded-full">
                    기본배송지
                  </span>
                )}
              </div>
              <span className="text-xs md:text-sm">{address.address}</span>
              <span className="text-xs md:text-sm">{address.residence}</span>
              <span className="text-xs md:text-sm">
                {addSeparatorToPhone(address.phone)}
              </span>
            </button>
          </li>
        ))}

        {addresses.length === 0 && (
          <Support.Error
            text="** 등록된 배송지가 없습니다. **"
            className="py-4 text-sm md:text-base"
          />
        )}

        <Link href="/information/address">
          <a className="text-[8px] md:text-xs self-end hover:text-blue-400 hover:underline hover:underline-offset-2 focus:outline-none focus:text-blue-400 focus:underline focus:underline-offset-2">
            배송지 등록
          </a>
        </Link>
      </ul>
    </Modal>
  );
};

export default SelectAddressModal;
