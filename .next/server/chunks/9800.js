"use strict";
exports.id = 9800;
exports.ids = [9800];
exports.modules = {

/***/ 9800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ states)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./src/states/product.ts

/**
 * 2022/08/27 - 현재 상품과 연관된 상품들 - by 1-blue
 */ const relatedProductsState = (0,external_recoil_.atom)({
    key: "relatedProductsState",
    default: []
});
/**
 * 2022/08/27 - 현재 상품과 연관된 상품들의 마지막 상품의 식별자 - by 1-blue
 */ const relatedProductsLastIdxState = (0,external_recoil_.selector)({
    key: "relatedProductsLastIdxState",
    get: ({ get  })=>{
        const products = get(relatedProductsState);
        if (products.length === 0) return -1;
        return products[products.length - 1].idx;
    },
    set: ({ set  })=>{
        set(relatedProductsState, []);
    }
});
/**
 * 2022/08/27 - 현재 랜더링할 상품 관련 states 객체 - by 1-blue
 */ const productService = {
    relatedProductsState,
    relatedProductsLastIdxState
};
/* harmony default export */ const product = (productService);

;// CONCATENATED MODULE: ./src/states/products.ts

/**
 * 2022/08/22 - 메인화면에서 불러올 상품들 - by 1-blue
 */ const productsState = (0,external_recoil_.atom)({
    key: "productsState",
    default: []
});
/**
 * 2022/08/22 - 메인화면에서 불러올 상품들의 마지막 상품의 식별자 - by 1-blue
 */ const productLastIdxState = (0,external_recoil_.selector)({
    key: "productLastIdxState",
    get: ({ get  })=>{
        const products = get(productsState);
        if (products.length === 0) return -1;
        return products[products.length - 1].idx;
    },
    set: ({ set  })=>{
        set(productsState, []);
    }
});
/**
 * 2022/08/27 - 상품들 관련 states 객체 - by 1-blue
 */ const productsService = {
    productsState,
    productLastIdxState
};
/* harmony default export */ const products = (productsService);

;// CONCATENATED MODULE: ./src/states/category.ts

/**
 * 2022/08/20 - 저장된 모든 카테고리들 요청 - by 1-blue
 */ const categoriesState = (0,external_recoil_.atom)({
    key: "categoriesState",
    default: []
});
/**
 * 2022/08/24 - 현재 선택한 카테고리 - by 1-blue
 */ const selectedCategoryState = (0,external_recoil_.atom)({
    key: "selectedCategoryState",
    default: null
});
/**
 * 2022/08/27 - 카테고리 관련 states 객체 - by 1-blue
 */ const categoryService = {
    categoriesState,
    selectedCategoryState
};
/* harmony default export */ const category = (categoryService);

;// CONCATENATED MODULE: ./src/states/filter.ts

/**
 * 2022/08/24 - 저장된 모든 필터들 요청 - by 1-blue
 */ const filtersState = (0,external_recoil_.atom)({
    key: "filtersState",
    default: []
});
/**
 * 2022/08/24 - 현재 선택한 필터들 - by 1-blue
 */ const selectedFiltersState = (0,external_recoil_.atom)({
    key: "selectedFiltersState",
    default: []
});
/**
 * 2022/08/27 - 필터링 관련 states 객체 - by 1-blue
 */ const filterService = {
    filtersState,
    selectedFiltersState
};
/* harmony default export */ const filter = (filterService);

;// CONCATENATED MODULE: ./src/states/payment.ts

/**
 * 2022/08/26 - 구매할 상품 정보 + 선택한 옵션 ( 수량, 색상, 사이즈 등 ) - by 1-blue
 */ const productToPayment = (0,external_recoil_.atom)({
    key: "productToPayment",
    default: null
});
/**
 * 2022/08/27 - 상품 구매 관련 states 객체 - by 1-blue
 */ const paymentService = {
    productToPayment
};
/* harmony default export */ const payment = (paymentService);

;// CONCATENATED MODULE: ./src/states/wish.ts

/**
 * 2022/08/30 - 로그인한 유저가 찜한 상품들 - by 1-blue
 */ const wishProductsState = (0,external_recoil_.atom)({
    key: "wishProductsState",
    default: []
});
/**
 * 2022/08/30 - 찜한 상품들 관련 states 객체 - by 1-blue
 */ const wishService = {
    wishProductsState
};
/* harmony default export */ const wish = (wishService);

;// CONCATENATED MODULE: ./src/states/basket.ts

/**
 * 2022/08/31 - 로그인한 유저의 장바구니 상품들 - by 1-blue
 */ const basketProductsState = (0,external_recoil_.atom)({
    key: "basketProductsState",
    default: []
});
/**
 * 2022/09/01 - 장바구니 상품들의 관련 states 객체 - by 1-blue
 */ const basketService = {
    basketProductsState
};
/* harmony default export */ const basket = (basketService);

;// CONCATENATED MODULE: ./src/states/order.ts

/**
 * 2022/09/04 - 로그인한 유저의 주문 목록들 - by 1-blue
 */ const orderListState = (0,external_recoil_.atom)({
    key: "orderListState",
    default: []
});
/**
 * 2022/09/04 - 주문 목록 관련 states 객체 - by 1-blue
 */ const orderService = {
    orderListState
};
/* harmony default export */ const order = (orderService);

;// CONCATENATED MODULE: ./src/states/review.ts

/**
 * 2022/09/07 - 현재 상품의 리뷰들 - by 1-blue
 */ const reviewsState = (0,external_recoil_.atom)({
    key: "reviewsState",
    default: []
});
/**
 * 2022/09/07 - 현재 상품의 리뷰들 마지막 상품의 식별자 - by 1-blue
 */ const reviewsLastIdxState = (0,external_recoil_.selector)({
    key: "reviewsLastIdxState",
    get: ({ get  })=>{
        const reviews = get(reviewsState);
        if (reviews.length === 0) return -1;
        return reviews[reviews.length - 1].idx;
    },
    set: ({ set  })=>{
        set(reviewsState, []);
    }
});
/**
 * 2022/09/07 - 리뷰를 작성할 때 사용할 정보 - by 1-blue
 */ const informationAboutReviewState = (0,external_recoil_.atom)({
    key: "informationAboutReviewState",
    default: null
});
/**
 * 2022/09/07 - 리뷰들의 states 객체 - by 1-blue
 */ const review_productService = {
    reviewsState,
    reviewsLastIdxState,
    informationAboutReviewState
};
/* harmony default export */ const review = (review_productService);

;// CONCATENATED MODULE: ./src/states/index.ts









const stateService = {
    productService: product,
    productsService: products,
    categoryService: category,
    filterService: filter,
    paymentService: payment,
    wishService: wish,
    basketService: basket,
    orderService: order,
    reviewService: review
};
/* harmony default export */ const states = (stateService); /**
 * 구글링으로 알아본 결과 "next.js"와 "recoil"을 같이 사용하면 어떤 문제로 인해서 "key" 중복 경고가 발생함
 */  /**
 * 추가적으로 문제가 "selector"를 이용한 비동기 처리를 할 때
 * "next-auth"에서 생성한 쿠키를 전송하지 않는 경우가 많이 발생함
 * 따라서 서버측에서는 비로그인 유저가 특정 유저의 데이터를 요청하는 경우로 인식하여 오류가 발생됨
 *
 * 아직 마땅한 해결법을 찾지 못해서 "selector"의 비동기처리를 하는 경우에는 인증된 유저가 아니어도 접근할 수 있는 정보를 요청할 때만 사용함
 */ 


/***/ })

};
;