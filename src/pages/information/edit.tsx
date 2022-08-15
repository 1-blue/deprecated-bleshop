import { useCallback, useEffect, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";

// api
import {
  apiEditUser,
  apiRemoveUserPhoto,
  apiUpdateUserPhoto,
  apiEditUserPhoto,
  apiGetAddress,
} from "@src/api";

// util
import {
  addSeparatorToPhone,
  getRegExp,
  removeSeparatorToPhone,
} from "@src/libs";

// component
import Icon from "@src/components/common/Icon";
import Photo from "@src/components/common/Photo";
import Modal from "@src/components/common/Modal";
import Nav from "@src/components/common/Nav";

// type
import type { ApiEditUserBody } from "@src/types";
import type { Address } from "@prisma/client";
import { AxiosError } from "axios";

type UserEditForm = ApiEditUserBody & { photo?: FileList | null };

const Edit = () => {
  const { data } = useSession();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    watch,
  } = useForm<UserEditForm>();

  // 2022/08/15 - 기본 배송지 주소 얻기 - by 1-blue
  const [defaultAddress, setDefaultAddress] = useState<Address | null>(null);
  useEffect(() => {
    (async () => {
      const {
        data: { addresses },
      } = await apiGetAddress();

      let defaultAddress = addresses.find((address) => address.isDefault);

      if (!defaultAddress) defaultAddress = addresses[0];

      setDefaultAddress(defaultAddress || null);
    })();
  }, []);

  // 2022/08/16 - 유저 정보 수정 여부 - by 1-blue
  const [changeInformation, setChangeInformation] = useState(true);

  // 2022/08/14 - 유저 이름 inputRef - by 1-blue
  const { ref: inputRef, ...nameRegister } = register("name", {
    required: "이름를 입력해주세요",
    maxLength: {
      value: 20,
      message: "20자 이내로 입력해주세요.",
    },
  });
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  // 2022/08/14 - 유저 정보 초기화 - by 1-blue
  const initialize = useCallback(() => {
    if (!data?.user) return;

    setValue("name", data.user.name);
    setValue("email", data.user.email);
    setValue("phone", addSeparatorToPhone(data.user.phone));
  }, [data, setValue]);

  // 2022/08/14 - 유저 초기 정보 입력 - by 1-blue
  useEffect(() => initialize(), [initialize]);

  // 2022/08/14 - 유저 정보 수정 요청 - by 1-blue
  const onSubmit = useCallback(async (body: UserEditForm) => {
    try {
      const result = await apiEditUser({
        ...body,
        phone: removeSeparatorToPhone(body.phone),
      });

      toast.success(result.data.message);
      signOut({ redirect: true, callbackUrl: "/login" });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!");
      }
    }
  }, []);

  // 2022/08/14 - 유저 정보 수정 버튼 클릭 - by 1-blue
  const onClickEditButton = useCallback(() => {
    setChangeInformation(false);
    setTimeout(() => nameInputRef.current?.select(), 0);

    if (!data?.user) return;
    setValue("phone", removeSeparatorToPhone(data.user.phone));
  }, [setValue, data, nameInputRef]);

  // 2022/08/14 - 유저 정보 수정 취소 버튼 클릭 - by 1-blue
  const onReset = useCallback(() => {
    initialize();
    setChangeInformation(true);

    if (!data?.user) return;
    setValue("phone", addSeparatorToPhone(data.user.phone));
  }, [initialize, setChangeInformation, data, setValue]);

  // 2022/08/14 - 유저 이미지 수정 모달 - by 1-blue
  const [showModal, setShowModal] = useState(false);

  // 2022/08/14 - 유저 이미지 제거 ( 기본 이미지로 변경 ) - by 1-blue
  const removePhoto = useCallback(async () => {
    if (!data?.user?.idx) return toast.error("로그인후에 접근해주세요");

    try {
      const { message } = await apiRemoveUserPhoto();
      toast.success(message);
      setShowModal(false);
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error(
          "알 수 없는 에러가 발생했습니다. 새로고침후에 다시 시도해주세요!"
        );
      }
    }
  }, [data]);

  // 2022/08/14 - 유저 이미지 업데이트 ( 생성 or 변경 ) - by 1-blue
  const photo = watch("photo");
  useEffect(() => {
    (async () => {
      if (!photo) return;
      if (!data?.user?.idx) {
        toast.error("로그인후에 접근해주세요");
        return;
      }

      try {
        const { message, photoURL } = await apiUpdateUserPhoto({
          file: photo[0],
        });

        if (!photoURL) return;

        toast.success(message);

        const response = await apiEditUserPhoto({
          idx: data.user.idx,
          photo: photoURL,
        });

        toast.success(response.data.message);

        setShowModal(false);
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error(
            "알 수 없는 에러가 발생했습니다. 새로고침후에 다시 시도해주세요!"
          );
        }
      } finally {
        setValue("photo", null);
      }
    })();
  }, [photo, data, setValue]);

  // 2022/08/14 - "tab"으로 포커스 주고 엔터키 누르면 실행하기 위함 - by 1-blue
  const photoInputRef = useRef<HTMLInputElement>(null);

  if (!data?.user) return <h1>로그인후에 접근해주세요!</h1>;

  return (
    <article className="pt-4 space-y-4">
      <Nav.TitleNav title="내 정보" />

      <section className="min-w-[300px] space-x-2 xs:space-x-4 px-4 py-2 xs:py-3 md:py-4 bg-white rounded-md shadow-2xl flex items-center">
        <Photo
          path={data.user.photo?.path}
          alt="유저 이미지"
          avatar
          cover
          className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <span className="text-sm xs:text-base md:text-lg font-bold">
          {data.user.name}
        </span>
        <div className="flex-1" />
        <button
          type="button"
          className="text-sm xs:text-base md:text-lg font-bold text-blue-700 decoration-2 decoration-blue-600 underline-offset-4 hover:underline focus:outline-none focus:underline "
          onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
        >
          로그아웃
        </button>
      </section>

      {showModal && (
        <Modal
          title="프로필 이미지 설정"
          onCloseModal={() => setShowModal(false)}
        >
          <section className="flex flex-col divide-y">
            <button
              type="button"
              className="text-xs xs:text-sm md:text-base py-2 transition-colors hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              onClick={removePhoto}
            >
              기본 이미지로 변경하기
            </button>
            <label
              htmlFor="photo"
              className="text-xs xs:text-sm md:text-base inline-block py-2 text-center cursor-pointer transition-colors hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" ? photoInputRef.current?.click() : null
              }
            >
              사진올리기
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              {...register("photo")}
              hidden
              ref={photoInputRef}
            />
            <button
              type="button"
              className="text-xs xs:text-sm md:text-base py-2 transition-colors hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              onClick={() => setShowModal(false)}
            >
              취소
            </button>
          </section>
        </Modal>
      )}

      <section className="bg-white rounded-md shadow-2xl overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul className="divide-y-2">
            <li className="flex">
              <div className="px-4 py-2 flex items-center space-x-1">
                <Icon shape="arrowRight" className="w-5 h-5 xs:w-6 xs:h-6" />
                <span className="text-sm xs:text-base md:text-lg font-bold">
                  회원정보
                </span>
              </div>
              <div className="flex-1" />
              {changeInformation ? (
                <button
                  type="button"
                  className="px-4 py-2 text-[8px] xs:text-xs md:text-sm text-blue-600 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white"
                  onClick={onClickEditButton}
                >
                  회원정보 수정
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="px-2 py-2 text-xs xs:text-sm text-blue-600 hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white"
                  >
                    수정완료
                  </button>
                  <button
                    type="button"
                    className="px-2 py-2 text-xs xs:text-sm text-blue-600 hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white"
                    onClick={onReset}
                  >
                    수정취소
                  </button>
                </>
              )}
            </li>
            <li className="space-x-2 px-4 py-2 flex items-center">
              <label
                htmlFor="name"
                className="text-gray-400 text-sm xs:text-base"
              >
                고객명
              </label>
              <input
                id="name"
                type="text"
                className="flex-1 text-xs xs:text-sm bg-blue-100 px-2 py-1 rounded-sm focus:outline-none disabled:bg-transparent"
                {...nameRegister}
                disabled={changeInformation}
                ref={(e) => {
                  inputRef(e);
                  nameInputRef.current = e;
                }}
              />
              <span className="text-red-600 font-semibold text-xs xs:text-sm">
                {errors.name?.message}
              </span>
            </li>
            <li className="space-x-2 px-4 py-2 flex items-center">
              <label
                htmlFor="email"
                className="text-gray-400 text-sm xs:text-base"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                className="flex-1 text-xs xs:text-sm bg-blue-100 px-2 py-1 rounded-sm focus:outline-none disabled:bg-transparent"
                {...register("email", {
                  required: "이메일을 입력해주세요",
                  pattern: {
                    value: getRegExp("email"),
                    message: "이메일 형식에 맞게 입력해 주세요.",
                  },
                })}
                disabled={changeInformation}
              />
              <span className="text-red-600 font-semibold text-xs xs:text-sm">
                {errors.email?.message}
              </span>
            </li>
            <li className="space-x-2 px-4 py-2 flex items-center">
              <label
                htmlFor="phone"
                className="text-gray-400 text-sm xs:text-base"
              >
                연락처
              </label>
              <input
                id="phone"
                type="text"
                className="flex-1 text-xs xs:text-sm bg-blue-100 px-2 py-1 rounded-sm focus:outline-none disabled:bg-transparent"
                {...register("phone", {
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
                disabled={changeInformation}
              />
              <span className="text-red-600 font-semibold text-xs xs:text-sm">
                {errors.phone?.message}
              </span>
            </li>
          </ul>
        </form>
      </section>

      <section className="space-y-4 bg-white rounded-md shadow-2xl overflow-hidden">
        {defaultAddress ? (
          <ul className="divide-y-2">
            <li className="flex items-center">
              <div className="px-4 py-2 flex items-center space-x-1">
                <Icon shape="arrowRight" className="w-5 h-5 xs:w-6 xs:h-6" />
                <span className="text-sm xs:text-base md:text-lg font-bold">
                  주소록
                </span>
              </div>
              {defaultAddress.isDefault && (
                <span className="text-[8px] xs:text-xs p-1 xs:p-[6px] font-bold border xs:border-2 border-blue-600 text-blue-600 rounded-full">
                  기본 배송지
                </span>
              )}
              <div className="flex-1" />
              <Link href="/information/address">
                <a className="px-4 py-4 text-[8px] xs:text-xs md:text-sm text-blue-600 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white">
                  주소록 관리
                </a>
              </Link>
            </li>
            <li className="space-x-2 px-4 py-2 flex items-center">
              <span className="text-gray-400 text-sm xs:text-base">수령인</span>
              <span className="flex-1 text-xs xs:text-sm px-2 py-1">
                {defaultAddress.name}
              </span>
            </li>
            <li className="space-x-2 px-4 py-2 flex items-center">
              <span className="text-gray-400 text-sm xs:text-base">주소지</span>
              <div className="flex flex-col">
                <span className="flex-1 text-xs xs:text-sm px-2 py-1">
                  {defaultAddress.address}
                </span>
                <span className="flex-1 text-xs xs:text-sm px-2 py-1">
                  {defaultAddress.residence}
                </span>
              </div>
            </li>
            <li className="space-x-2 px-4 py-2 flex items-center">
              <span className="text-gray-400 text-sm xs:text-base">수령인</span>
              <span className="flex-1 text-xs xs:text-sm px-2 py-1">
                {addSeparatorToPhone(defaultAddress.phone)}
              </span>
            </li>
          </ul>
        ) : (
          <ul className="divide-y-2">
            <li className="flex items-center">
              <div className="px-4 py-2 flex items-center space-x-1">
                <Icon shape="arrowRight" className="w-5 h-5 xs:w-6 xs:h-6" />
                <span className="xs:text-lg font-bold">주소록</span>
              </div>
              <div className="flex-1" />
              <Link href="/information/address">
                <a className="px-4 py-4 text-xs xs:text-sm text-blue-600 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white">
                  배송지 관리
                </a>
              </Link>
            </li>
            <li>
              <span className="inline-block text-center w-full py-4 font-bold">
                등록된 배송지가 없습니다.
              </span>
            </li>
          </ul>
        )}
      </section>
    </article>
  );
};

export default Edit;
