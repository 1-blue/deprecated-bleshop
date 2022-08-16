import { useCallback, useEffect, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// component
import Button from "@src/components/common/Button";
import Nav from "@src/components/common/Nav";
import Modal from "@src/components/common/Modal";
import Icon from "@src/components/common/Icon";
import Input from "@src/components/common/Input";

// util
import { getRegExp } from "@src/libs";

// api
import { apiCreateAddress, apiGetAddress, apiUpdateAddress } from "@src/api";

// type
import type { Address } from "react-daum-postcode";
import type { ApiUpdateAddressBody } from "@src/types";
import { AxiosError } from "axios";

const AddressEdit = () => {
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
      const {
        data: { addresses },
      } = await apiGetAddress();

      const address = addresses.find(
        (address) => address.idx === +router.query.addressIdx!
      );

      if (!(typeof router.query.addressIdx === "string")) return;
      if (!address) return;

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
      try {
        // 주소 수정
        if (body.idx) {
          const response = await apiUpdateAddress(body);

          toast.success(response.data.message);
        }
        // 주소 등록
        else {
          const { idx, ...restBody } = body;
          const response = await apiCreateAddress(restBody);

          toast.success(response.data.message);
        }

        router.push("/information/address");
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast.error(error.response?.data.message);
        } else {
          console.error(error);

          toast.error("알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!");
        }
      }
    },
    [router]
  );

  return (
    <section className="flex flex-col items-center pt-4 space-y-4">
      <Nav.TitleNav title="주소록 관리" />

      <form
        onSubmit={handleSubmit(submitAddress)}
        className="flex flex-col items-center bg-white rounded-md shadow-2xl overflow-hidden min-w-[300px] max-w-[600px] p-8 w-full"
      >
        <Input
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
        />
        <div className="relative flex flex-col items-center min-w-[200px] max-w-[600px] w-full">
          <Input
            type="text"
            name="주소"
            placeholder="주소를 검색해주세요."
            register={register("address", { required: "주소를 검색해주세요!" })}
            errorMessage={errors.address?.message}
            disabled
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
        <Input
          type="text"
          name="상세 주소"
          placeholder="상세 주소를 입력해주세요."
          register={register("residence", {
            required: "상세 주소를 입력해주세요!",
          })}
          errorMessage={errors.residence?.message}
        />
        <Input
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
        />
        <Input
          type="text"
          name="요청 사항"
          placeholder="요청 사항을 입력해주세요!"
          register={register("message")}
          errorMessage={errors.message?.message}
        />

        <div className="mb-4 min-w-[200px] max-w-[600px] w-full flex items-center space-x-1">
          <input
            {...register("isDefault")}
            id="default"
            type="checkBox"
            className="w-4 h-4 xs:w-5 xs:h-5 cursor-pointer focus:outline-blue-400"
          />
          <label
            htmlFor="default"
            className="text-xs xs:text-sm cursor-pointer"
          >
            기본 배송지로 선택
          </label>
        </div>

        <Button
          type="submit"
          text="등록/수정"
          className="min-w-[200px] max-w-[600px] w-full"
          primary
        />
      </form>

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
  );
};

export default AddressEdit;
