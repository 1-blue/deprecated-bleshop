import { useCallback, useEffect, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Tool from "@src/components/common/Tool";
import Nav from "@src/components/common/Nav";
import Modal from "@src/components/common/Modal";
import Icon from "@src/components/common/Icon";

// util
import { getRegExp } from "@src/libs";

// api
import apiService from "@src/api";

// type
import type { Address } from "react-daum-postcode";
import type { ApiUpdateAddressBody } from "@src/types";
import { AxiosError } from "axios";

const AddressUpdate = () => {
  const router = useRouter();
  const { data } = useSession();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApiUpdateAddressBody>({
    defaultValues: {
      name: data?.user?.name,
      phone: data?.user?.phone,
    },
  });

  // 2022/08/15 - 배송지 수정이면 기존 데이터 기입 - by 1-blue
  useEffect(() => {
    if (!router.isReady) return;
    if (!(typeof router.query.addressIdx === "string")) return;

    (async () => {
      if (!(typeof router.query.addressIdx === "string")) return;

      const {
        data: { addresses },
      } = await apiService.addressService.apiGetAllAddress();

      const address = addresses?.find(
        (address) => address.idx === +router.query.addressIdx!
      );

      if (!address) return toast.error("주소지 정보가 존재하지 않습니다.");

      setValue("idx", +router.query.addressIdx);
      setValue("name", address.name);
      setValue("address", address.address);
      setValue("residence", address.residence);
      setValue("phone", address.phone);
      setValue("message", address.message);
      setValue("isDefault", address.isDefault);
    })();
  }, [router.isReady, router.query, setValue]);

  // 2022/08/15 - "react-daum-postcode"를 이용해서 실제 주소 찾기/가져오기 - by 1-blue
  const getAddress = useCallback(
    (data: Address) => {
      let { roadAddress, zonecode } = data;

      setValue("address", `${roadAddress} [${zonecode}]`);

      setShowAddressInput(false);
    },
    [setValue]
  );

  // 2022/08/15 - 주소 입력 받는 모달 보이기/안보이기 - 1-blue
  const [showAddressInput, setShowAddressInput] = useState(false);

  // 2022/08/15 - 주소 등록/수정 - by 1-blue
  const submitAddress = useCallback(
    async (body: ApiUpdateAddressBody) => {
      const toastId = toast.loading("주소지를 등록/수정하는 중입니다.");

      try {
        // 주소 수정
        if (body.idx) {
          const {
            data: { message },
          } = await apiService.addressService.apiUpdateAddress(body);

          toast.update(toastId, {
            render: message,
            type: "success",
            isLoading: false,
            autoClose: 1500,
          });
        }
        // 주소 등록
        else {
          const { idx, ...restBody } = body;
          const {
            data: { message },
          } = await apiService.addressService.apiCreateAddress(restBody);

          toast.update(toastId, {
            render: message,
            type: "success",
            isLoading: false,
            autoClose: 1500,
          });
        }

        router.push("/information/address");
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
    [router]
  );

  return (
    <>
      <HeadInfo
        title="BleShop - 주소지 수정"
        description="BleShop의 주소지 수정 페이지입니다."
      />

      <section className="flex flex-col items-center pt-4 space-y-4">
        <Nav.TitleNav title="주소록 관리" />

        <Tool.Form
          onSubmit={handleSubmit(submitAddress)}
          className="bg-white rounded-md shadow-2xl overflow-hidden min-w-[300px] max-w-[600px] p-8 w-full"
        >
          <Tool.Input
            type="text"
            name="받는 사람"
            placeholder="받는 사람 이름을 입력해주세요."
            register={register("name", {
              required: "이름를 입력해주세요!",
              maxLength: {
                value: 20,
                message: "20자 이내로 입력해주세요!",
              },
            })}
            errorMessage={errors.name?.message}
            className="min-w-[200px] max-w-[600px] w-full"
          />
          <div className="relative flex flex-col items-center min-w-[200px] max-w-[600px] w-full">
            <Tool.Input
              type="text"
              name="주소"
              placeholder="주소를 검색해주세요."
              register={register("address", {
                required: "주소를 검색해주세요!",
              })}
              errorMessage={errors.address?.message}
              disabled
              className="min-w-[200px] max-w-[600px] w-full"
            />

            <button
              type="button"
              className="absolute top-[16px] xs:top-[20px] md:top-[24px] right-0 p-[10px] xs:p-[12px] md:p-[10px] bg-blue-400 text-white rounded-r-sm hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              onClick={() => setShowAddressInput(true)}
            >
              <Icon
                shape="search"
                className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6"
              />
            </button>
          </div>
          <Tool.Input
            type="text"
            name="상세 주소"
            placeholder="상세 주소를 입력해주세요."
            register={register("residence", {
              required: "상세 주소를 입력해주세요!",
            })}
            errorMessage={errors.residence?.message}
            className="min-w-[200px] max-w-[600px] w-full"
          />
          <Tool.Input
            type="text"
            name="phone"
            placeholder="휴대폰 번호를 숫자만 입력해주세요.  ex) 01021038259"
            register={register("phone", {
              required: "휴대폰 번호를 입력해주세요",
              pattern: {
                value: getRegExp("phone"),
                message: "숫자만 11자리 입력해 주세요.",
              },
              maxLength: {
                value: 11,
                message: "숫자만 11자리 입력해 주세요.",
              },
              minLength: {
                value: 11,
                message: "숫자만 11자리 입력해 주세요.",
              },
            })}
            errorMessage={errors.phone?.message}
            className="min-w-[200px] max-w-[600px] w-full"
          />
          <Tool.Input
            type="text"
            name="요청 사항"
            placeholder="요청 사항을 입력해주세요!"
            register={register("message")}
            errorMessage={errors.message?.message}
            className="min-w-[200px] max-w-[600px] w-full"
          />
          <Tool.Checkbox
            name="기본 배송지로 선택"
            register={register("isDefault")}
          />
          <Tool.Button
            type="submit"
            text="등록/수정"
            className="min-w-[200px] max-w-[600px] w-full"
            primary
          />
        </Tool.Form>

        {showAddressInput && (
          <Modal
            onCloseModal={() => setShowAddressInput(false)}
            className="max-w-[800px] min-w-[400px]"
          >
            <DaumPostcodeEmbed
              onComplete={getAddress}
              animation
              useBannerLink={false}
            />
          </Modal>
        )}
      </section>
    </>
  );
};

export default AddressUpdate;
