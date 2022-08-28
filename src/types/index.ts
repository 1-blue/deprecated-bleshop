export type { ICON } from "./icon";

export type {
  ApiCreatePhotoBody,
  ApiCreatePhotoResponse,
  ApiCreatePhotosBody,
  ApiCreatePhotosResponse,
  ApiSignUpBody,
  ApiSignUpResponse,
  ApiLogInBody,
  ApiLogInResponse,
  ApiUpdateUserBody,
  ApiUpdateUserResponse,
  ApiDeleteUserPhotoBody,
  ApiDeleteUserPhotoResponse,
  ApiEditUserPhotoBody,
  ApiEditUserPhotoResponse,
  ApiUpdateUserPhotoBody,
  ApiUpdateUserPhotoResponse,
  ApiCreateAddressBody,
  ApiCreateAddressResponse,
  ApiGetAllAddressBody,
  ApiGetAllAddressResponse,
  ApiDeleteAddressBody,
  ApiDeleteAddressResponse,
  ApiUpdateAddressBody,
  ApiUpdateAddressResponse,
  ApiGetAddressBody,
  ApiGetAddressResponse,
  ApiCreateProductBody,
  ApiCreateProductResponse,
  ApiGetCategoryBody,
  ApiGetCategoryResponse,
  ApiDeletePhotoBody,
  ApiDeletePhotoResponse,
  ApiDeletePhotosBody,
  ApiDeletePhotosResponse,
  ApiGetProductsBody,
  ApiGetProductsResponse,
  ApiGetKeywordsBody,
  ApiGetKeywordsResponse,
  ApiGetProductsByKeywordBody,
  ApiGetProductsByKeywordResponse,
  ApiGetFiltersBody,
  ApiGetFiltersResponse,
  ApiGetProductBody,
  ApiGetProductResponse,
  ApiGetWishBody,
  ApiGetWishResponse,
  ApiGetRelatedProductsBody,
  ApiGetRelatedProductsResponse,
} from "./api";

export type {
  UserWithPhoto,
  ProductOptionForm,
  ProductToBuy,
  DetailProduct,
} from "./data";

// 2022/08/21 - 최대 요청 개수 - by 1-blue
export type LIMIT = 15;

// 2022/08/28 - 이미지 종류 - by 1-blue
export type PhotoKinds = "user" | "product" | "benner" | "remove";
