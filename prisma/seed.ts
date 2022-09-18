import { PrismaClient } from "@prisma/client";

import {
  getAdminUser,
  getDummyCategories,
  getDummyFilters,
  getDummyKeywords,
  getDummyProducts,
} from "../src/dummy";

const prisma = new PrismaClient();

const createAdminUser = async () => {
  const createdUser = await prisma.user.create({
    data: { ...getAdminUser() },
  });

  console.log("createdUser >> ", createdUser);
};

const createProduct = async () => {
  try {
    // 가짜 상품 생성
    const productPromise = prisma.product.create({
      data: { ...getDummyProducts(1)[0] },
    });

    const keywords = getDummyKeywords(4);
    const filters = getDummyFilters(4);
    const categories = getDummyCategories(4);

    // 가짜 키워드 생성
    const keywordPromise = prisma.keyword.createMany({
      data: keywords.map((keyword) => ({ keyword })),
      skipDuplicates: true,
    });
    // 가짜 필터 생성
    const filterPromise = prisma.filter.createMany({
      data: filters.map((filter) => ({ filter })),
      skipDuplicates: true,
    });

    // 가짜 카테고리 생성
    const categoriesPromise = prisma.category.createMany({
      data: categories.map((category) => ({ category })),
      skipDuplicates: true,
    });

    const [createdProductResult] = await Promise.allSettled([
      productPromise,
      keywordPromise,
      filterPromise,
      categoriesPromise,
    ]);

    // 상품 생성 오류
    if (createdProductResult.status === "rejected") {
      console.log("상품 생성 오류 >> ", createdProductResult);

      return;
    }

    const createdProduct = await prisma.product.update({
      where: { idx: createdProductResult.value.idx },
      data: {
        categories: { create: { categoryIdx: categories[0] } },
        keywords: {
          createMany: {
            data: keywords.map((keyword) => ({ keywordIdx: keyword })),
            skipDuplicates: true,
          },
        },
        filters: {
          createMany: {
            data: filters.map((filter) => ({ filterIdx: filter })),
            skipDuplicates: true,
          },
        },
      },
    });

    console.log("createdProduct >> ", createdProduct);
  } catch (error) {
    console.error("error >> ", error);
  }
};

async function main() {
  // 관리자 유저 생성
  // await createAdminUser();

  // 특정 상품 생성 ( + 카테고리, 키워드, 필터 )
  const createProductPromises = Array(10)
    .fill(null)
    .map(() => createProduct());

  const result = await Promise.allSettled(createProductPromises);

  console.log("result >> ", result);
}

main()
  .catch((e) => console.log(e))
  .finally(() => prisma.$disconnect);
