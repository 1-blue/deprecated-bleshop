import bcrypt from "bcrypt";

import prisma from "@src/prisma";

// util
import { movePhoto } from "@src/libs";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiSignUpResponse } from "@src/types";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiSignUpResponse>
) {
  const { body } = req;

  try {
    const photo = body.photo as string;
    // 프로필 이미지 확정으로 위치 이동
    await movePhoto(photo, "user");

    let data = null;
    const hashPassword = await bcrypt.hash(body.password, 6);

    if (body.photo) {
      data = {
        ...body,
        password: hashPassword,
        photo: photo.replace("/temporary", ""),
      };
    } else {
      data = {
        ...body,
        password: hashPassword,
        photo: undefined,
      };
    }

    const createdUser = await prisma.user.create({ data });

    return res.status(200).json({
      user: createdUser,
      message: "회원가입에 성공했습니다. 로그인 페이지로 이동합니다.",
    });
  } catch (error) {
    console.error("/api/signup >> ", error);

    // 아이디, 이름, 이메일, 폰번호중에 하나가 겹친다면 실행
    if (error instanceof PrismaClientKnownRequestError) {
      const errorType = error.meta?.target;

      switch (errorType) {
        case "User_id_key":
          return res.status(409).json({
            user: null,
            message: "이미 사용중인 아이디입니다.",
          });
        case "User_email_key":
          return res.status(409).json({
            user: null,
            message: "이미 사용중인 이메일입니다.",
          });
        case "User_phone_key":
          return res.status(409).json({
            user: null,
            message: "이미 사용중인 전화번호입니다.",
          });

        default:
          return res.status(409).json({
            user: null,
            message: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!",
          });
      }
    }

    return res.status(400).json({
      user: null,
      message: "회원가입에 실패했습니다. 새로고침후에 시도해주세요!",
    });
  }
}
