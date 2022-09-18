import type { LIMIT, DetailProduct, PhotoKinds } from ".";
import type {
  Address,
  Basket,
  Category,
  Filter,
  Keyword,
  Product,
  User,
  Wish,
  Order,
  ProductsOnOrders,
  Review,
} from "@prisma/client";

/**
 * 2022/08/11 - 모든 api요청이 공통으로 갖는 타입 - by 1-blue
 */
type ApiResponse = {
  message: string | null;
};

/**
 * 2022/08/12 - 단일 이미지 업로드 송신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotoBody = { file: File; kinds: PhotoKinds };
/**
 * 2022/08/12 - 단일 이미지 업로드 수신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotoResponse = ApiResponse & {
  preSignedURL: string | null;
  photoURL: string | null;
};

/**
 * 2022/08/12 - 여러 이미지들 업로드 송신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotosBody = { files: FileList; kinds: PhotoKinds };
/**
 * 2022/08/12 - 여러 이미지들 업로드 수신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotosResponse = ApiCreatePhotoResponse[];

/**
 * 2022/08/11 - 회원가입 송신 타입 - by 1-blue
 */
export type ApiSignUpBody = Omit<User, "idx" | "provider">;
/**
 * 2022/08/11 - 회원가입 수신 타입 - by 1-blue
 */
export type ApiSignUpResponse = ApiResponse & { user: User | null };

/**
 * 2022/08/12 - 로그인 송신 타입 - by 1-blue
 */
export type ApiLogInBody = { id: string; password: string };
/**
 * 2022/08/12 - 로그인 수신 타입 - by 1-blue
 */
export type ApiLogInResponse = ApiResponse & {};

/**
 * 2022/08/14 - 유저 일반 정보 수정 송신 타입 - by 1-blue
 */
export type ApiUpdateUserBody = Pick<User, "name" | "email" | "phone">;
/**
 * 2022/08/14 - 유저 일반 정보 수정 수신 타입 - by 1-blue
 */
export type ApiUpdateUserResponse = ApiResponse & { user?: User | null };
/**
 * 2022/08/14 - 유저 이미지 수정 송신 타입 - by 1-blue
 * 기존 이미지를 제거하고 새로운 이미지를 추가할 수 있는 "preSingedUrl"을 얻는 타입
 */
export type ApiEditUserPhotoBody = { file: File };
/**
 * 2022/08/14 - 유저 이미지 수정 수신 타입 - by 1-blue
 * 기존 이미지를 제거하고 새로운 이미지를 추가할 수 있는 "preSingedUrl"을 얻는 타입
 */
export type ApiEditUserPhotoResponse = ApiResponse & {
  preSignedURL: string | null;
  photoURL: string | null;
};
/**
 * 2022/08/14 - 유저 이미지 수정 송신 타입 - by 1-blue
 * 새로운 이미지의 "path"를 이미지 DB에 수정하는 타입
 */
export type ApiUpdateUserPhotoBody = { path: string };
/**
 * 2022/08/14 - 유저 이미지 수정 수신 타입 - by 1-blue
 * 새로운 이미지의 "path"를 이미지 DB에 수정하는 타입
 */
export type ApiUpdateUserPhotoResponse = ApiResponse;
/**
 * 2022/08/14 - 유저 이미지 제거 송신 타입 - by 1-blue
 */
export type ApiDeleteUserPhotoBody = {};
/**
 * 2022/08/14 - 유저 이미지 제거 수신 타입 - by 1-blue
 */
export type ApiDeleteUserPhotoResponse = ApiResponse;

/**
 * 2022/08/15 - 주소 생성 송신 타입 - by 1-blue
 */
export type ApiCreateAddressBody = {
  name: string;
  address: string;
  residence: string;
  phone: string;
  message: string;
  isDefault: boolean;
};
/**
 * 2022/08/15 - 주소 생성 송신 타입 - by 1-blue
 */
export type ApiCreateAddressResponse = ApiResponse & {};

/**
 * 2022/08/15 - 로그인한 유저의 등록된 모든 주소들 요청 송신 타입 - by 1-blue
 */
export type ApiGetAllAddressBody = {};
/**
 * 2022/08/15 - 로그인한 유저의 등록된 모든 주소들 요청 수신 타입 - by 1-blue
 */
export type ApiGetAllAddressResponse = ApiResponse & { addresses?: Address[] };
/**
 * 2022/08/15 - 주소 삭제 송신 타입 - by 1-blue
 */
export type ApiDeleteAddressBody = { idx: number };
/**
 * 2022/08/15 - 주소 삭제 수신 타입 - by 1-blue
 */
export type ApiDeleteAddressResponse = ApiResponse & {};

/**
 * 2022/08/15 - 주소 수정 송신 타입 - by 1-blue
 */
export type ApiUpdateAddressBody = ApiCreateAddressBody & { idx: number };
/**
 * 2022/08/15 - 주소 수정 수신 타입 - by 1-blue
 */
export type ApiUpdateAddressResponse = ApiResponse & {};

/**
 * 2022/08/17 - 로그인한 유저의 기본 주소 요청 송신 타입 - by 1-blue
 * 기본 주소가 없다면 제일 처음 등록한 주소 요청
 */
export type ApiGetAddressBody = {};
/**
 * 2022/08/17 - 로그인한 유저의 기본 주소 요청 수신 타입 - by 1-blue
 * 기본 주소가 없다면 제일 처음 등록한 주소 반환
 */
export type ApiGetAddressResponse = ApiResponse & { address: Address | null };

/**
 * 2022/08/18 - 모든 카테고리 요청 송신 타입 - by 1-blue
 */
export type ApiGetCategoryBody = {};
/**
 * 2022/08/18 - 모든 카테고리 요청 수신 타입 - by 1-blue
 */
export type ApiGetCategoryResponse = ApiResponse & { categories: Category[] };

/**
 * 2022/08/19 - 임시 저장된 이미지 제거 송신 타입 - by 1-blue
 */
export type ApiDeletePhotoBody = { name: string };
/**
 * 2022/08/19 - 임시 저장된 이미지 제거 수신 타입 - by 1-blue
 */
export type ApiDeletePhotoResponse = ApiResponse & {};
/**
 * 2022/08/19 - 임시 저장된 이미지들 제거 송신 타입 - by 1-blue
 */
export type ApiDeletePhotosBody = { names: string[] };
/**
 * 2022/08/19 - 임시 저장된 이미지들 제거 수신 타입 - by 1-blue
 */
export type ApiDeletePhotosResponse = ApiResponse & {};

/**
 * 2022/08/18 - 상품 등록 송신 타입 - by 1-blue
 */
export type ApiCreateProductBody = {
  name: string;
  category: string;
  option: {
    color: string;
    size: string;
  };
  photo: string;
  photos: string[];
  description: string;
  information: {
    brand: string;
    company: string;
    period: Date;
    price: string;
  };
  keywords: string[];
  filters: string[];
  // delivery: {
  //   location: string;
  //   way: string;
  //   company: string;
  //   kinds: string;
  //   period: string;
  // };
};
/**
 * 2022/08/18 - 상품 등록 수신 타입 - by 1-blue
 */
export type ApiCreateProductResponse = ApiResponse & {
  productIdx?: number;
};

/**
 * 2022/08/21 - 상품들 불러오기 송신 타입 - by 1-blue
 */
export type ApiGetProductsBody = {
  limit: LIMIT;
  lastIdx: number;
  selectedCategory: string | null;
  selectedFilters: string[];
};
/**
 * 2022/08/21 - 상품들 불러오기 수신 타입 - by 1-blue
 */
export type ApiGetProductsResponse = ApiResponse & { products: Product[] };

/**
 * 2022/08/23 - 추천 검색 키워드 불러오기 송신 타입 - by 1-blue
 */
export type ApiGetKeywordsBody = { word?: string };
/**
 * 2022/08/23 - 추천 검색 키워드 불러오기 수신 타입 - by 1-blue
 */
export type ApiGetKeywordsResponse = ApiResponse & { keywords: Keyword[] };

/**
 * 2022/08/23 - 특정 키워드를 가진 상품들 불러오기 송신 타입 - by 1-blue
 */
export type ApiGetProductsByKeywordBody = ApiGetProductsBody & {
  keyword: string;
};
/**
 * 2022/08/23 - 특정 키워드를 가진 상품들 불러오기 수신 타입 - by 1-blue
 */
export type ApiGetProductsByKeywordResponse = ApiGetProductsResponse;

/**
 * 2022/08/24 - 모든 필터들 요청 송신 타입 - by 1-blue
 */
export type ApiGetFiltersBody = {};
/**
 * 2022/08/24 - 모든 필터들 요청 수신 타입 - by 1-blue
 */
export type ApiGetFiltersResponse = ApiResponse & { filters: Filter[] };

/**
 * 2022/08/25 - 특정 상품 상세 데이터 송신 타입 - by 1-blue
 */
export type ApiGetProductBody = { productIdx: number };
/**
 * 2022/08/25 - 특정 상품 상세 데이터 수신 타입 - by 1-blue
 */
export type ApiGetProductResponse = ApiResponse & { product: DetailProduct };

/**
 * 2022/08/26 - 로그인한 유저가 특정 상품에 찜하기를 눌렀는지 여부 송신 타입 - by 1-blue
 */
export type ApiGetWishBody = { productIdx: number };
/**
 * 2022/08/26 - 로그인한 유저가 특정 상품에 찜하기를 눌렀는지 여부 수신 타입 - by 1-blue
 */
export type ApiGetWishResponse = ApiResponse & { isWish: boolean };

/**
 * 2022/08/26 - 연관된 상품들 요청 송신 타입 - by 1-blue
 */
export type ApiGetRelatedProductsBody = {
  limit: LIMIT;
  lastIdx: number;
  productIdx: number;
  keywords: string[];
};
/**
 * 2022/08/26 - 연관된 상품들 요청 수신 타입 - by 1-blue
 */
export type ApiGetRelatedProductsResponse = ApiResponse & {
  products: Product[];
};

/**
 * 2022/08/30 - 찜하기 요청 송신 타입 - by 1-blue
 */
export type ApiCreateWishBody = {
  productIdx: number;
  size: string;
  color: string;
  quantity: number;
};
/**
 * 2022/08/30 - 찜하기 요청 수신 타입 - by 1-blue
 */
export type ApiCreateWishResponse = ApiResponse & {};
/**
 * 2022/08/30 - 찜하기 취소하기 요청 송신 타입 - by 1-blue
 */
export type ApiDeleteWishBody = { productIdx: number };
/**
 * 2022/08/30 - 찜하기 취소하기 요청 수신 타입 - by 1-blue
 */
export type ApiDeleteWishResponse = ApiResponse & {};

/**
 * 2022/08/30 - 찜한 상품들 요청 송신 타입 - by 1-blue
 */
export type ApiGetWishProductsBody = {};
/**
 * 2022/08/30 - 찜한 상품들 요청 수신 타입 - by 1-blue
 */
export type ApiGetWishProductsResponse = ApiResponse & {
  wishes: (Wish & {
    product: Product;
  })[];
};

/**
 * 2022/08/31 - 장바구니 모든 상품들 요청 송신 타입 - by 1-blue
 */
export type ApiGetBasketProductsBody = {};
/**
 * 2022/08/31 - 장바구니 모든 상품들 요청 수신 타입 - by 1-blue
 */
export type ApiGetBasketProductsResponse = ApiResponse & {
  baskets: (Basket & {
    product: Product;
  })[];
};

/**
 * 2022/08/31 - 장바구니 상품 추가 송신 타입 - by 1-blue
 */
export type ApiCreateBasketBody = {
  size: string;
  color: string;
  quantity: number;
  productIdx: number;
};
/**
 * 2022/08/31 - 장바구니 상품 추가 요청 수신 타입 - by 1-blue
 */
export type ApiCreateBasketResponse = ApiResponse & {};

/**
 * 2022/08/31 - 장바구니 상품 제거 송신 타입 - by 1-blue
 */
export type ApiDeleteBasketBody = {
  productIdx: number;
};
/**
 * 2022/08/31 - 장바구니 상품 제거 요청 수신 타입 - by 1-blue
 */
export type ApiDeleteBasketResponse = ApiResponse & {};

/**
 * 2022/09/01 - 장바구니 상품중 하나 수정 송신 타입 - by 1-blue
 */
export type ApiUpdateBasketBody = {
  productIdx: number;
  quantity?: number;
  skip?: boolean;
};
/**
 * 2022/08/31 - 장바구니 상품중 하나 수정 수신 타입 - by 1-blue
 */
export type ApiUpdateBasketResponse = ApiResponse & {};

/**
 * 2022/09/04 - 결제 내역 등록 송신 타입 - by 1-blue
 */
export type ApiCreateOrderBody = {
  orderData: Omit<Order, "idx" | "updatedAt" | "userIdx">;
  singleData: Omit<ProductsOnOrders, "orderIdx" | "isReview">[];
};
/**
 * 2022/09/04 - 결제 내역 등록 수신 타입 - by 1-blue
 */
export type ApiCreateOrderResponse = ApiResponse & {};

/**
 * 2022/09/04 - 모든 결제 내역 요청 송신 타입 - by 1-blue
 */
export type ApiGetOrderListBody = {};
/**
 * 2022/09/04 - 모든 결제 내역 요청 수신 타입 - by 1-blue
 */
export type ApiGetOrderListResponse = ApiResponse & {
  orderList: (Order & {
    products: (ProductsOnOrders & {
      product: {
        name: string;
        photo: string;
        price: number;
      };
    })[];
  })[];
};

/**
 * 2022/09/05 - 결제 내역 제거 송신 타입 - by 1-blue
 */
export type ApiDeleteOrderBody = {
  orderIdx: number;
};
/**
 * 2022/09/05 - 결제 내역 제거 수신 타입 - by 1-blue
 */
export type ApiDeleteOrderResponse = ApiResponse & {};

/**
 * 2022/09/07 - 특정 게시글의 리뷰들 요청 송신 타입 - by 1-blue
 */
export type ApiGetReviewsOfProductBody = {
  limit: LIMIT;
  lastIdx: number;
  productIdx: number;
};
/**
 * 2022/09/07 - 특정 게시글의 리뷰들 요청 수신 타입 - by 1-blue
 */
export type ApiGetReviewsOfProductResponse = ApiResponse & {
  reviews: (Review & {
    User: {
      name: string;
      photo: string | null;
    };
    photos: {
      path: string;
    }[];
  })[];
};

/**
 * 2022/09/07 - 특정 게시글의 리뷰 생성 송신 타입 - by 1-blue
 */
export type ApiCreateReviewBody = {
  orderIdx: number;
  productIdx: number;
  score: number;
  contents: string;
  photos: string[];
};
/**
 * 2022/09/07 - 특정 게시글의 리뷰 생성 수신 타입 - by 1-blue
 */
export type ApiCreateReviewResponse = ApiResponse & {};

/**
 * 2022/09/07 - 특정 게시글의 리뷰 제거 송신 타입 - by 1-blue
 */
export type ApiDeleteReviewBody = {
  reviewIdx: number;
};
/**
 * 2022/09/07 - 특정 게시글의 리뷰 제거 수신 타입 - by 1-blue
 */
export type ApiDeleteReviewResponse = ApiResponse & {};

/**
 * 2022/09/08 - 로그인한 유저의 리뷰들 요청 송신 타입 - by 1-blue
 */
export type ApiGetReviewsOfUserBody = {};
/**
 * 2022/09/08 - 로그인한 유저의 리뷰들 요청 수신 타입 - by 1-blue
 */
export type ApiGetReviewsOfUserResponse = ApiResponse & {
  reviews: (Review & {
    photos: {
      path: string;
    }[];
    Product: {
      idx: number;
      name: string;
      photo: string;
    };
  })[];
};
