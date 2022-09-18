import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateAddressResponse,
  ApiGetAddressResponse,
  ApiDeleteAddressResponse,
  ApiUpdateAddressResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | ApiCreateAddressResponse
    | ApiGetAddressResponse
    | ApiDeleteAddressResponse
    | ApiUpdateAddressResponse
  >
) {
  const { body, query, method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  try {
    // 기본 주소 가져오기
    if (method === "GET") {
      const defaultAddress = await prisma.address.findFirst({
        where: { userIdx: session.user.idx, isDefault: true },
      });

      // 기본 주소가 존재한다면
      if (defaultAddress) {
        return res.status(200).json({
          message: `${session.user.name}님의 기본 주소를 가져왔습니다.`,
          address: defaultAddress,
        });
      }

      // 기본 주소가 존재하지 않는다면 제일 처음 등록한 주소
      const latestAddress = await prisma.address.findFirst({
        where: { userIdx: session.user.idx },
      });
      return res.status(200).json({
        message: `${session.user.name}님의 최근 주소를 가져왔습니다.`,
        address: latestAddress,
      });
    }
    // 주소 생성
    else if (method === "POST") {
      // 기본 배송지로 지정할 경우
      if (body.isDefault) {
        const exAddress = await prisma.address.findFirst({
          where: {
            AND: {
              userIdx: session.user.idx,
              isDefault: true,
            },
          },
        });

        // 이미 기본 배송지가 존재하는 경우, 기본 배송지 변경
        if (exAddress) {
          await prisma.address.update({
            where: { idx: exAddress.idx },
            data: { isDefault: false },
          });
        }
      }

      await prisma.address.create({
        data: {
          ...body,
          User: {
            connect: {
              idx: session.user.idx,
            },
          },
        },
      });

      return res.status(201).json({ message: "주소를 등록했습니다." });
    }
    // 주소 제거
    else if (method === "DELETE") {
      if (!(typeof query.idx === "string"))
        throw new Error("잘못된 데이터 송신");

      const exAddress = await prisma.address.findUnique({
        where: { idx: +query.idx },
      });

      if (!exAddress)
        return res
          .status(404)
          .json({ message: "존재하지 않는 주소에 삭제요청을 보냈습니다." });

      await prisma.address.delete({ where: { idx: +query.idx } });

      return res.status(200).json({ message: "주소를 삭제했습니다." });
    }
    // 주소 수정
    else if (method === "PUT") {
      const exAddress = await prisma.address.findUnique({
        where: { idx: +body.idx },
      });

      // 기본 배송지로 지정할 경우
      if (body.isDefault) {
        const exAddress = await prisma.address.findFirst({
          where: {
            AND: {
              userIdx: session.user.idx,
              isDefault: true,
            },
          },
        });

        // 이미 기본 배송지가 존재하는 경우, 기본 배송지 변경
        if (exAddress) {
          await prisma.address.update({
            where: { idx: exAddress.idx },
            data: { isDefault: false },
          });
        }
      }

      if (!exAddress)
        return res
          .status(404)
          .json({ message: "존재하지 않는 주소에 수정요청을 보냈습니다." });

      await prisma.address.update({
        where: { idx: +body.idx },
        data: { ...body },
      });

      return res.status(200).json({ message: "주소를 수정했습니다." });
    }
  } catch (error) {
    console.error(error);

    return res.status(400).json({ message: "주소 등록/수정/삭제 실패." });
  }
}
