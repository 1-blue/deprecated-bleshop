import { PrismaClient } from "@prisma/client";

import { getAdminUser, getDummyProducts } from "../src/dummy";

const prisma = new PrismaClient();

async function main() {
  let result = null;

  // 관리자 유저 생성
  // result = await prisma.user.create({
  //   data: {
  //     ...getAdminUser(),
  //     photo: {
  //       create: {
  //         path: "photos/development/big-ben.jpg",
  //       },
  //     },
  //   },
  // });

  // 가짜 상품 생성
  // const productPromises = getDummyProducts(25).map((product) =>
  //   prisma.product.create({ data: { ...product } })
  // );
  // result = await Promise.allSettled(productPromises);

  console.log("가짜 데이터 생성 >> ", result);
}

main()
  .catch((e) => console.log(e))
  .finally(() => prisma.$disconnect);
