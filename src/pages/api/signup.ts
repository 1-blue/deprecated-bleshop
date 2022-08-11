import prisma from "@src/prisma";

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
    let data = null;

    if (body.photo) {
      data = {
        ...body,
        photo: {
          create: {
            path: body.photo,
          },
        },
      };
    } else {
      data = {
        ...body,
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

    if (error instanceof PrismaClientKnownRequestError) {
      return res.status(409).json({
        user: null,
        message: "이미 사용중인 아이디입니다.",
      });
    }

    return res.status(400).json({
      user: null,
      message: "회원가입에 실패했습니다. 새로고침후에 시도해주세요!",
    });
  }
}
