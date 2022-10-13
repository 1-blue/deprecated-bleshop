"use strict";
(() => {
var exports = {};
exports.id = 6942;
exports.ids = [6942];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 7208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./src/prisma/index.ts
var prisma = __webpack_require__(5638);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: ./src/libs/utils.ts
var utils = __webpack_require__(9707);
;// CONCATENATED MODULE: ./src/api/photo.ts



/**
 * 2022/08/11 - presignedURL을 이용해서 이미지를 업로드하는 함수 - by 1-blue
 * @param file: File 형태 입력, kinds: 이미지 종류 ( 유저, 상품 )
 * @returns 업로드된 이미지 URL(photoURL)반환 ( "photoURL"가 null이 아니면 성공 )
 */ const apiCreatePhoto = async ({ file , kinds  })=>{
    try {
        const { data: { preSignedURL , photoURL , message  } ,  } = await axiosInstance.get(`/photo?name=${file.name}&kinds=${kinds}`);
        // 예측 불가능한 에러
        if (!preSignedURL || !photoURL) return {
            photoURL,
            preSignedURL,
            message: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!"
        };
        await external_axios_default().put(preSignedURL, file, {
            headers: {
                "Content-Type": file.type
            }
        });
        return {
            photoURL,
            preSignedURL,
            message
        };
    } catch (error) {
        console.error("apiCreatePhoto() >> ", error);
        // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
        if (error instanceof external_axios_namespaceObject.AxiosError) {
            const { preSignedURL: preSignedURL1 , photoURL: photoURL1 , message: message1  } = error.response?.data;
            return {
                photoURL: photoURL1,
                preSignedURL: preSignedURL1,
                message: message1
            };
        }
        // 예측 불가능한 에러
        return {
            photoURL: null,
            preSignedURL: null,
            message: "이미지 업로드에 실패했습니다. 잠시후에 다시 시도해주세요!"
        };
    }
};
/**
 * 2022/08/12 - presignedURL을 이용해서 이미지들을 업로드하는 함수 - by 1-blue
 * @param files FileList 형태 입력
 * @returns 업로드된 이미지 URL(photoURL)들 반환
 */ const apiCreatePhotos = async ({ files , kinds  })=>{
    try {
        // 각 이미지들의 "preSignedURL"의 promise 얻음
        const preSignedUrlPromiseList = [
            ...files
        ].map((file)=>axiosInstance.get(`/photo?name=${file.name}&kinds=${kinds}`));
        // promise 병렬 처리
        const preSignedUrlPromiseResultList = await Promise.allSettled(preSignedUrlPromiseList);
        // 필요한 값만 추출 ( message, preSignedURL, photoURL )
        const preSignedUrlResultList = preSignedUrlPromiseResultList.filter(utils/* isFulFilled */.Mo).map((url)=>({
                ...url.value.data
            }));
        // 각 이미지 업로드 promise 얻음
        const photoPromiseList = preSignedUrlResultList.map(({ preSignedURL  }, i)=>external_axios_default().put(preSignedURL, files[i], {
                headers: {
                    "Content-Type": files[i].type
                }
            }));
        // 병렬 처리
        await Promise.allSettled(photoPromiseList);
        return preSignedUrlResultList;
    } catch (error) {
        console.error("apiCreatePhotos() >> ", error);
        // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
        if (error instanceof external_axios_namespaceObject.AxiosError) {
            const { preSignedURL , photoURL , message  } = error.response?.data;
            return [
                {
                    photoURL,
                    preSignedURL,
                    message
                }
            ];
        }
        // 예측 불가능한 에러
        return [
            {
                photoURL: null,
                preSignedURL: null,
                message: "이미지 업로드에 실패했습니다. 잠시후에 다시 시도해주세요!"
            }, 
        ];
    }
};
/**
 * 2022/08/15 - 유저 이미지 수정 - by 1-blue
 * @param file 수정할 이미지 파일
 * @returns
 */ const apiEditUserPhoto = async ({ file  })=>{
    try {
        const { data: { preSignedURL , photoURL , message  } ,  } = await axiosInstance.put(`/user/photo?name=${file.name}`);
        // 예측 불가능한 에러
        if (!preSignedURL) return {
            preSignedURL,
            photoURL,
            message: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!"
        };
        await external_axios_default().put(preSignedURL, file, {
            headers: {
                "Content-Type": file.type
            }
        });
        return {
            preSignedURL,
            photoURL,
            message
        };
    } catch (error) {
        console.error("apiEditUserPhoto() >> ", error);
        // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
        if (error instanceof external_axios_namespaceObject.AxiosError) {
            const { preSignedURL: preSignedURL1 , photoURL: photoURL1 , message: message1  } = error.response?.data;
            return {
                preSignedURL: preSignedURL1,
                photoURL: photoURL1,
                message: message1
            };
        }
        // 예측 불가능한 에러
        return {
            preSignedURL: null,
            photoURL: null,
            message: "이미지 업데이트에 실패했습니다. 잠시후에 다시 시도해주세요!"
        };
    }
};
/**
 * 2022/08/14 - 유저의 이미지 제거 - by 1-blue
 * @returns 결과 메시지
 */ const apiDeleteUserPhoto = async ()=>{
    try {
        const { data: { message  } ,  } = await axiosInstance["delete"](`/user/photo`);
        return {
            message
        };
    } catch (error) {
        console.error("apiDeleteUserPhoto() >> ", error);
        if (error instanceof external_axios_namespaceObject.AxiosError) {
            return {
                message: error.response?.data.message
            };
        }
        return {
            message: "에러가 발생했습니다. 잠시후에 다시 시도해주세요!"
        };
    }
};
/**
 * 2022/08/19 - 이미지 제거 - by 1-blue
 * @param name 이미지 이름
 * @returns 결과 메시지 ( message )
 */ const apiDeletePhoto = async ({ name  })=>{
    try {
        const { data: { message  } ,  } = await axiosInstance["delete"](`/photo?name=${name}`);
        return {
            message
        };
    } catch (error) {
        console.error("apiDeletePhoto() >> ", error);
        // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
        if (error instanceof external_axios_namespaceObject.AxiosError) {
            const { message: message1  } = error.response?.data;
            return {
                message: message1
            };
        }
        return {
            message: "알 수 없는 문제입니다. 잠시후에 다시 시도해주세요!"
        };
    }
};
/**
 * 2022/08/19 - 이미지들 제거 - by 1-blue
 * @param name 이미지 이름 배열
 * @returns 결과 메시지 ( message )
 */ const apiDeletePhotos = async ({ names  })=>{
    try {
        const { data: { message  } ,  } = await axiosInstance["delete"](`/photo?names=${names}`);
        return {
            message
        };
    } catch (error) {
        console.error("apiDeletePhotos() >> ", error);
        // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
        if (error instanceof external_axios_namespaceObject.AxiosError) {
            const { message: message1  } = error.response?.data;
            return {
                message: message1
            };
        }
        return {
            message: "알 수 없는 문제입니다. 잠시후에 다시 시도해주세요!"
        };
    }
};
/**
 * 2022/08/17 - 이미지 관련 api 요청 객체 - by 1-blue
 */ const photoService = {
    apiCreatePhoto,
    apiCreatePhotos,
    apiDeleteUserPhoto,
    apiEditUserPhoto,
    apiDeletePhoto,
    apiDeletePhotos
};
/* harmony default export */ const photo = (photoService);

;// CONCATENATED MODULE: ./src/api/auth.ts

/**
 * 2022/08/17 - 회원가입 요청 - by 1-blue
 * @param body 회원가입에 필요한 데이터들 ( id, password, name, email, phone, photo? )
 * @returns 결과 메시지 ( message )
 */ const apiSignUp = (body)=>axiosInstance.post(`/signup`, body);
/**
 * 2022/08/17 - 로그인 요청 - by 1-blue
 * @param body 로그인에 필요한 데이터들 ( id, password )
 * @returns 결과 메시지 ( message )
 */ const apiLogIn = (body)=>axiosInstance.post(`/login`, body);
/**
 * 2022/08/17 - 인증 관련 api 요청 객체 - by 1-blue
 */ const authService = {
    apiSignUp,
    apiLogIn
};
/* harmony default export */ const auth = (authService);

;// CONCATENATED MODULE: ./src/api/user.ts

/**
 * 2022/08/17 - 유저 기본 정보 수정 - by 1-blue
 * @param body 수정할 데이터들 ( name, email, phone )
 * @returns 결과 메시지 ( message )
 */ const apiEditUser = (body)=>axiosInstance.put(`/user`, body);
/**
 * 2022/08/17 - 유저 프로필 이미지 수정 - by 1-blue
 * @param body aws-s3에 업로드된 이미지 path
 * @returns 결과 메시지 ( message )
 */ const apiUpdateUserPhoto = (body)=>axiosInstance.put(`/user`, body);
/**
 * 2022/09/08 - 로그인한 유저의 모든 리뷰들 요청 - by 1-blue
 * @returns
 */ const apiGetReviews = ()=>axiosInstance.get("/user/review");
/**
 * 2022/08/17 - 유저 관련 api 요청 객체 - by 1-blue
 */ const userService = {
    apiEditUser,
    apiUpdateUserPhoto,
    apiGetReviews
};
/* harmony default export */ const user = (userService);

;// CONCATENATED MODULE: ./src/api/address.ts

/**
 * 2022/08/17 - 주소지 생성 요청 - by 1-blue
 * @param body 주소지를 생성하는데 필요한 데이터들 ( name, address, residence, phone, message, isDefault )
 * @returns 결과 메시지 ( message )
 */ const apiCreateAddress = (body)=>axiosInstance.post(`/address`, body);
/**
 * 2022/08/17 - 등록된 모든 주소지 요청 - by 1-blue
 * @returns 로그인한 유저의 등록된 모든 주소지 반환
 */ const apiGetAllAddress = ()=>axiosInstance.get(`/addresses`);
/**
 * 2022/08/17 - 기본 주소지 요청 - by 1-blue
 * @returns 결과 메시지와 기본 주소 or 최근 주소 or null 반환
 */ const apiGetAddress = ()=>axiosInstance.get(`/address`);
/**
 * 2022/08/17 - 특정 주소지 제거 - by 1-blue
 * @param body 제거할 주소의 식별자 ( idx )
 * @returns 결과 메시지 ( message )
 */ const apiDeleteAddress = (body)=>axiosInstance["delete"](`/address?idx=${body.idx}`);
/**
 * 2022/08/17 - 특정 주소지 수정 - by 1-blue
 * @param body 수정할 주소의 식별자(idx)와 나머지 수정 데이터들 ( name, address, residence, phone, message, isDefault )
 * @returns 결과 메시지 ( message )
 */ const apiUpdateAddress = (body)=>axiosInstance.put(`/address`, body);
/**
 * 2022/08/17 - 주소 관련 api 요청 객체 - by 1-blue
 */ const addressService = {
    apiCreateAddress,
    apiGetAllAddress,
    apiGetAddress,
    apiDeleteAddress,
    apiUpdateAddress
};
/* harmony default export */ const address = (addressService);

;// CONCATENATED MODULE: ./src/api/category.ts

/**
 * 2022/08/18 - 모든 카테고리 요청 - by 1-blue
 * @returns 등록된 모든 카테고리
 */ const apiGetCategory = ()=>axiosInstance.get(`/category`);
/**
 * 2022/08/18 - 카테고리 관련 api 요청 객체 - by 1-blue
 */ const categoryService = {
    apiGetCategory
};
/* harmony default export */ const category = (categoryService);

;// CONCATENATED MODULE: ./src/api/product.ts

/**
 * 2022/08/20 - 상품 등록 - by 1-blue
 * @param body 상품에 대한 데이터들
 * @returns 생성된 상품의 식별자
 */ const apiCreateProduct = (body)=>axiosInstance.post(`/product`, body);
/**
 * 2022/08/21 - 상품들 요청 - by 1-blue
 * @param 요청 개수(limit)와 마지막 상품 식별자(lastIdx), 선택한 카테고리와 선택한 필터링
 * @returns
 */ const apiGetProducts = ({ limit , lastIdx , selectedCategory , selectedFilters  })=>{
    let requestUrl = `/products?limit=${limit}&lastIdx=${lastIdx}`;
    requestUrl += selectedCategory ? `&selectedCategory=${selectedCategory}` : "";
    requestUrl += selectedFilters ? `&selectedFilters=${selectedFilters}` : "";
    return axiosInstance.get(requestUrl);
};
/**
 * 2022/08/23 - 특정 키워드를 가진 상품들 요청 - by 1-blue
 * @param 요청 개수(limit)와 마지막 상품 식별자(lastIdx), 검색 키워드, 선택한 카테고리와 선택한 필터링
 * @returns
 */ const apiGetProductsByKeyword = ({ limit , lastIdx , keyword , selectedCategory , selectedFilters  })=>{
    let requestUrl = `/products?limit=${limit}&lastIdx=${lastIdx}&keyword=${keyword}`;
    requestUrl += selectedCategory ? `&selectedCategory=${selectedCategory}` : "";
    requestUrl += selectedFilters ? `&selectedFilters=${selectedFilters}` : "";
    return axiosInstance.get(requestUrl);
};
/**
 * 2022/08/25 - 특정 상품의 상세 정보 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 특정 상품의 상세 정보 ( 연관 이미지들, 검색 키워드들 )
 */ const apiGetProduct = ({ productIdx  })=>axiosInstance.get(`/product?productIdx=${productIdx}`);
/**
 * 2022/08/26 - 특정 상품과 관련된 상품들 요청 - by 1-blue
 * @param 특정 상품의 식별자 ( productIdx ), 상품이 가진 키워드 ( keywords )
 * @returns 특정 상품과 연관된 상품들의 정보
 */ const apiGetRelatedProducts = ({ lastIdx , limit , productIdx , keywords  })=>axiosInstance.get(`/products/related?lastIdx=${lastIdx}&limit=${limit}&productIdx=${productIdx}&keywords=${keywords}`);
/**
 * 2022/08/30 - 찜한 상품들 요청 - by 1-blue
 * @returns 로그인한 유저가 찜한 상품들
 */ const apiGetWishProducts = ()=>axiosInstance.get(`/products/wish`);
/**
 * 2022/08/31 - 장바구니에 담긴 모든 상품들 요청 - by 1-blue
 * @returns 로그인한 유저가 장바구니에 담은 상품들
 */ const apiGetBasketProducts = ()=>axiosInstance.get(`/products/basket`);
/**
 * 2022/09/07 - 특정 상품의 리뷰들 요청 - by 1-blue
 * @param body 리뷰의 마지막 식별자, 요청 개수, 요청 상품 식별자
 * @returns 결과 메시지
 */ const product_apiGetReviews = ({ lastIdx , limit , productIdx  })=>axiosInstance.get(`/product/review?lastIdx=${lastIdx}&limit=${limit}&productIdx=${productIdx}`);
/**
 * 2022/08/19 - 상품 관련 api 요청 객체 - by 1-blue
 */ const productService = {
    apiCreateProduct,
    apiGetProducts,
    apiGetProductsByKeyword,
    apiGetProduct,
    apiGetRelatedProducts,
    apiGetWishProducts,
    apiGetBasketProducts,
    apiGetReviews: product_apiGetReviews
};
/* harmony default export */ const product = (productService);

;// CONCATENATED MODULE: ./src/api/keyword.ts

/**
 * 2022/08/23 - 추천 키워드들 요청 - by 1-blue
 * @param body 키워드에 포함될 단어
 * @returns 추천 키워드들
 */ const apiGetKeywords = ({ word  })=>axiosInstance.get(`/keywords?word=${word}`);
/**
 * 2022/08/23 - 키워드 관련 api 요청 객체 - by 1-blue
 */ const keywordService = {
    apiGetKeywords
};
/* harmony default export */ const keyword = (keywordService);

;// CONCATENATED MODULE: ./src/api/filter.ts

/**
 * 2022/08/24 - 모든 필터들 요청 - by 1-blue
 * @returns 등록된 모든 필터들
 */ const apiGetFilters = ()=>axiosInstance.get(`/filter`);
/**
 * 2022/08/24 - 필터 관련 api 요청 객체 - by 1-blue
 */ const filterService = {
    apiGetFilters
};
/* harmony default export */ const filter = (filterService);

;// CONCATENATED MODULE: ./src/api/wish.ts

/**
 * 2022/08/26 - 특정 상품에 찜하기 눌렀는지 여부 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 특정 상품에 찜하기 눌렀는지 여부
 */ const apiGetWish = ({ productIdx  })=>axiosInstance.get(`/wish?productIdx=${productIdx}`);
/**
 * 2022/08/30 - 특정 상품 찜하기 요청 - by 1-blue
 * @param body 특정 상품의 식별자, 색상, 사이즈, 구매 개수
 * @returns 결과 메시지
 */ const apiCreateWish = (body)=>axiosInstance.post(`/wish`, body);
/**
 * 2022/08/30 - 특정 상품 찜하기 취소 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 결과 메시지
 */ const apiDeleteWish = ({ productIdx  })=>axiosInstance["delete"](`/wish?productIdx=${productIdx}`);
/**
 * 2022/08/26 - 찜하기 관련 api 요청 객체 - by 1-blue
 */ const wishService = {
    apiGetWish,
    apiCreateWish,
    apiDeleteWish
};
/* harmony default export */ const wish = (wishService);

;// CONCATENATED MODULE: ./src/api/basket.ts

/**
 * 2022/08/31 - 장바구니 상품 담기 요청 - by 1-blue
 * @param body 색상, 사이즈, 개수, 상품 식별자
 * @returns 결과 메시지
 */ const apiCreateBasket = (body)=>axiosInstance.post(`/basket`, body);
/**
 * 2022/08/31 - 장바구니 상품 제거 요청 - by 1-blue
 * @param productIdx 상품 식별자
 * @returns 결과 메시지
 */ const apiDeleteBasket = ({ productIdx  })=>axiosInstance["delete"](`/basket?productIdx=${productIdx}`);
/**
 * 2022/09/01 - 장바구니 상품 수정 요청 - by 1-blue
 * @param body 상품 식별자, 개수, 스킵여부
 * @returns 결과 메시지
 */ const apiUpdateBasket = (body)=>axiosInstance.put(`/basket`, body);
/**
 * 2022/09/01 - 장바구니 관련 api 요청 객체 - by 1-blue
 */ const basketService = {
    apiCreateBasket,
    apiDeleteBasket,
    apiUpdateBasket
};
/* harmony default export */ const basket = (basketService);

;// CONCATENATED MODULE: ./src/api/order.ts

/**
 * 2022/09/04 - 로그인한 유저의 모든 결제 내용 요청 등록 - by 1-blue
 * @returns 유저의 모든 결제 내역들
 */ const apiGetOrderList = ()=>axiosInstance.get(`/order`);
/**
 * 2022/09/04 - 결제 정보 등록 - by 1-blue
 * @param body 결제 정보들
 * @returns 결과 메시지
 */ const apiCreateOrder = (body)=>axiosInstance.post(`/order`, body);
/**
 * 2022/09/05 - 결제 정보 제거 - by 1-blue
 * @param orderIdx 결제 내역의 식별자
 * @returns 결과 메시지
 */ const apiDeleteOrder = ({ orderIdx  })=>axiosInstance["delete"](`/order?orderIdx=${orderIdx}`);
/**
 * 2022/09/04 - 결제 정보 관련 api 요청 객체 - by 1-blue
 */ const orderService = {
    apiGetOrderList,
    apiCreateOrder,
    apiDeleteOrder
};
/* harmony default export */ const order = (orderService);

;// CONCATENATED MODULE: ./src/api/review.ts

/**
 * 2022/09/07 - 리뷰 생성 요청 - by 1-blue
 * @param body 내용, 점수, 상품 식별자, 이미지들
 * @returns 결과 메시지
 */ const apiCreateReview = (body)=>axiosInstance.post(`/review`, body);
/**
 * 2022/09/07 - 리뷰 제거 요청 - by 1-blue
 * @param productIdx 상품 식별자
 * @returns 결과 메시지
 */ const apiDeleteReview = ({ reviewIdx  })=>axiosInstance["delete"](`/review?reviewIdx=${reviewIdx}`);
/**
 * 2022/09/07 - 리뷰 관련 api 요청 객체 - by 1-blue
 */ const reviewService = {
    apiCreateReview,
    apiDeleteReview
};
/* harmony default export */ const review = (reviewService);

;// CONCATENATED MODULE: ./src/api/iamport.ts

const iamportInstance = external_axios_default().create({
    baseURL: "https://api.iamport.kr",
    timeout: 10000
});
/**
 * 2022/09/14 - iamport 엑세스 토큰 발급 받기 - by 1-blue
 * @returns 엑세스 토큰
 */ const apiGetToken = ()=>iamportInstance.post(`/users/getToken`, {
        imp_key: process.env.IAMPORT_REST_API_KEY,
        imp_secret: process.env.IAMPORT_REST_API_SECRET
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
/**
 * 2022/09/14 - iamport 엑세스 토큰을 이용해 결제 정보 조회 - by 1-blue
 * @returns 결제 정보
 */ const apiGetPaymentData = ({ imp_uid , access_token  })=>iamportInstance.get(`/payments/${imp_uid}`, {
        headers: {
            Authorization: access_token
        }
    });
/**
 * 2022/09/14 - iamport 관련 api 요청 객체 - by 1-blue
 */ const iamportService = {
    apiGetToken,
    apiGetPaymentData
};
/* harmony default export */ const iamport = (iamportService);

;// CONCATENATED MODULE: ./src/api/index.ts

const axiosInstance = external_axios_default().create({
    baseURL: "https://bleshop.shop" + "/api",
    withCredentials: true,
    timeout: 10000
});
// const myRequestInterceptor = axiosInstance.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     console.log("오류 요청을 보내기전 호출됨");
//     return Promise.reject(error);
//   },
// );













/**
 * 2022/08/17 - api요청 관련 메서드들을 가진 객체 - by 1-blue
 */ const apiService = {
    photoService: photo,
    authService: auth,
    userService: user,
    addressService: address,
    categoryService: category,
    productService: product,
    keywordService: keyword,
    filterService: filter,
    wishService: wish,
    basketService: basket,
    orderService: order,
    reviewService: review,
    iamportService: iamport
};
/* harmony default export */ const api = (apiService);

;// CONCATENATED MODULE: ./src/pages/api/payment/complete/mobile.ts


// api

async function handler(req, res) {
    const session = await (0,react_.getSession)({
        req
    });
    if (!session || !session.user) return res.status(403).json({
        message: "접근 권한이 없습니다."
    });
    const userIdx = session.user.idx;
    try {
        const { imp_uid , merchant_uid  } = req.query;
        if (typeof imp_uid !== "string") return;
        // 액세스 토큰(access token) 발급 받기
        const { data: { response: { access_token  } ,  } ,  } = await api.iamportService.apiGetToken();
        // imp_uid로 아임포트 서버에서 결제 정보 조회
        const { data: { response: paymentData  } ,  } = await api.iamportService.apiGetPaymentData({
            imp_uid,
            access_token
        });
        const customData = JSON.parse(paymentData.custom_data);
        const createdOrder = await prisma/* default.order.create */.Z.order.create({
            data: {
                name: paymentData.name,
                address: paymentData.buyer_addr,
                residence: customData.residence,
                message: customData.message,
                amount: paymentData.amount,
                email: paymentData.buyer_email,
                phone: paymentData.buyer_tel,
                provider: paymentData.pg_provider,
                User: {
                    connect: {
                        idx: userIdx
                    }
                }
            }
        });
        await prisma/* default.productsOnOrders.createMany */.Z.productsOnOrders.createMany({
            data: customData.singleData.map((data)=>({
                    ...data,
                    orderIdx: createdOrder.idx
                }))
        });
        // 주문한 상품은 장바구니에서 제거
        prisma/* default.basket.deleteMany */.Z.basket.deleteMany({
            where: {
                productIdx: {
                    in: customData.singleData.map((v)=>v.productIdx)
                }
            }
        });
        return res.redirect("/information/order");
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [575], () => (__webpack_exec__(7208)));
module.exports = __webpack_exports__;

})();