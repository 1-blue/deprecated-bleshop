import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

// api
import { apiGetAddress, apiRemoveAddress } from "@src/api";

// util
import { addSeparatorToPhone } from "@src/libs";

// component
import Button from "@src/components/common/Button";
import Nav from "@src/components/common/Nav";

// type
import type { Address } from "@prisma/client";
import { AxiosError } from "axios";

const Address = () => {
  const router = useRouter();

  // 2022/08/15 - 등록된 모든 배송지 주소들 얻기 - by 1-blue
  const [addresses, setAddresses] = useState<Address[]>([]);
  useEffect(() => {
    (async () => {
      const {
        data: { addresses },
      } = await apiGetAddress();

      if (addresses[0].isDefault) setAddresses(addresses);
      else setAddresses(addresses.sort((a) => (a.isDefault ? -1 : 1)));
    })();
  }, []);

  // 2022/08/15 - 배송지 제거 - by 1-blue
  const onRemoveAddress = useCallback(
    (idx: number) => async () => {
      try {
        const response = await apiRemoveAddress({ idx });

        toast.success(response.data.message);
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!");
        }
      }
    },
    []
  );

  // 2022/08/16 - 배송지 수정 - by 1-blue
  const onUpdateAddress = useCallback(
    (addressIdx: number) => () => {
      router.push({
        pathname: "/information/address/edit",
        query: { addressIdx },
      });
    },
    [router]
  );

  return (
    <article className="pt-4 space-y-4 flex flex-col items-center">
      <Nav.TitleNav title="내 정보 관리" />

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
                    onClick={onRemoveAddress(address.idx)}
                  />
                </div>
                <span className="text-xs xs:text-sm">{address.address}</span>
                <span className="text-xs xs:text-sm">{address.residence}</span>
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

      <Link href="/information/address/edit">
        <a className="inline-block min-w-[250px] w-full py-2 xs:py-3 text-xs xs:text-sm text-center text-white font-semibold rounded-md bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          배송지 추가하기
        </a>
      </Link>
    </article>
  );
};

export default Address;
