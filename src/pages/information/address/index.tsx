import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

// api
import apiService from "@src/api";

// util
import { addSeparatorToPhone } from "@src/libs";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const TitleNav = dynamic(() => import("@src/components/common/Nav/TitleNav"), {
  suspense: true,
});
const Button = dynamic(() => import("@src/components/common/Tool/Button"), {
  suspense: true,
});

// type
import type { Address } from "@prisma/client";
import { AxiosError } from "axios";

const Address = () => {
  const router = useRouter();

  // 2022/08/15 - 등록된 모든 배송지 주소들 얻기 - by 1-blue
  const [addresses, setAddresses] = useState<Address[]>([]);
  useEffect(() => {
    (async () => {
      const toastId = toast.loading(
        "주소지들을 불러오는 중입니다. 잠시만 기다려주세요!"
      );

      try {
        const {
          data: { addresses, message },
        } = await apiService.addressService.apiGetAllAddress();

        if (!addresses || addresses?.length === 0)
          return toast.update(toastId, {
            render: "저장된 주소지가 존재하지 않습니다.",
            type: "warning",
            isLoading: false,
            autoClose: 1500,
          });

        if (addresses[0].isDefault) setAddresses(addresses);
        else setAddresses(addresses.sort((a) => (a.isDefault ? -1 : 1)));

        return toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });
      } catch (error) {
        console.error("error >> ", error);

        if (error instanceof AxiosError) {
          toast.update(toastId, {
            render: error.response?.data.message,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        } else {
          toast.update(toastId, {
            render: "알 수 없는 에러가 발생했습니다.",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    })();
  }, []);

  // 2022/08/15 - 배송지 제거 - by 1-blue
  const onDeleteAddress = useCallback(
    (idx: number) => async () => {
      const toastId = toast.loading("배송지를 제거하는중입니다.");

      try {
        const {
          data: { message },
        } = await apiService.addressService.apiDeleteAddress({
          idx,
        });

        setAddresses((prev) => prev.filter((v) => v.idx !== idx));

        toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });
      } catch (error) {
        console.error("error >> ", error);

        if (error instanceof AxiosError) {
          toast.update(toastId, {
            render: error.response?.data.message,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        } else {
          toast.update(toastId, {
            render: "알 수 없는 에러가 발생했습니다.",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    },
    [setAddresses]
  );

  // 2022/08/16 - 배송지 수정 - by 1-blue
  const onUpdateAddress = useCallback(
    (addressIdx: number) => () => {
      router.push({
        pathname: "/information/address/update",
        query: { addressIdx },
      });
    },
    [router]
  );

  return (
    <>
      <HeadInfo
        title="BleShop - 주소지"
        description="BleShop의 주소지 페이지입니다."
      />

      <article className="pt-4 space-y-4 flex flex-col items-center">
        <TitleNav title="내 정보 관리" />

        <section className="bg-white rounded-md shadow-2xl overflow-hidden min-w-[250px] max-w-[1024px] p-6 w-full">
          {addresses.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((address) => (
                <li
                  key={address.idx}
                  className="flex flex-col p-4 space-y-2 bg-gray-200 shadow-xl rounded-md"
                >
                  <div className="flex space-x-2 items-center">
                    <span className="text-lg">
                      <b>{address.name}</b>
                    </span>
                    {address.isDefault && (
                      <span className="text-[8px] xs:text-xs p-1 xs:p-[6px] font-bold border xs:border-2 border-blue-600 text-blue-600 rounded-full">
                        기본 배송지
                      </span>
                    )}
                    <div className="flex-1" />
                    <Button
                      type="button"
                      text="수정"
                      className="self-start px-1 pt-1 pb-1 xs:px-2 xs:pt-2 xs:pb-2 text-[8px] xs:text-xs md:text-xs rounded-sm xs:rounded-md"
                      primary
                      onClick={onUpdateAddress(address.idx)}
                    />
                    <Button
                      type="button"
                      text="삭제"
                      className="self-start px-1 pt-1 pb-1 xs:px-2 xs:pt-2 xs:pb-2 text-[8px] xs:text-xs md:text-xs rounded-sm xs:rounded-md"
                      primary
                      onClick={onDeleteAddress(address.idx)}
                    />
                  </div>
                  <span className="text-xs xs:text-sm">{address.address}</span>
                  <span className="text-xs xs:text-sm">
                    {address.residence}
                  </span>
                  <span className="text-xs xs:text-sm">
                    {addSeparatorToPhone(address.phone)}
                  </span>
                  <span className="text-xs xs:text-sm">{address.message}</span>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <span className="inline-block text-center w-full font-bold text-lg">
                등록된 배송지가 없습니다.
              </span>
            </>
          )}
        </section>

        <Link href="/information/address/update">
          <a className="inline-block min-w-[250px] w-full py-2 xs:py-3 text-xs xs:text-sm text-center text-white font-semibold rounded-md bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            배송지 추가하기
          </a>
        </Link>
      </article>
    </>
  );
};

export default Address;
