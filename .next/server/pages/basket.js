"use strict";
(() => {
var exports = {};
exports.id = 3701;
exports.ids = [3701];
exports.modules = {

/***/ 8430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2483);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9800);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9923);
/* harmony import */ var _src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4629);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




// api

// state

// util

// component

const Background = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 565).then(__webpack_require__.bind(__webpack_require__, 565)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/common/Support/Background"
        ]
    },
    suspense: true
});
const Title = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 740).then(__webpack_require__.bind(__webpack_require__, 740)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/common/Support/Title"
        ]
    },
    suspense: true
});
const TitleNav = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 7340).then(__webpack_require__.bind(__webpack_require__, 7340)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/common/Nav/TitleNav"
        ]
    },
    suspense: true
});
const BasketNav = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(7426)]).then(__webpack_require__.bind(__webpack_require__, 7426)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/common/Nav/BasketNav"
        ]
    },
    suspense: true
});
const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 9724).then(__webpack_require__.bind(__webpack_require__, 9724)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/common/Tool/Button"
        ]
    },
    suspense: true
});
const BasketProducts = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(5675), __webpack_require__.e(6193), __webpack_require__.e(1304), __webpack_require__.e(5129), __webpack_require__.e(695), __webpack_require__.e(862), __webpack_require__.e(1432), __webpack_require__.e(7025), __webpack_require__.e(5797), __webpack_require__.e(1423), __webpack_require__.e(4030), __webpack_require__.e(9724), __webpack_require__.e(5865), __webpack_require__.e(2249), __webpack_require__.e(6670)]).then(__webpack_require__.bind(__webpack_require__, 6670)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/Products/BasketProducts"
        ]
    },
    suspense: true
});
const SelectAddressModal = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(695), __webpack_require__.e(3989), __webpack_require__.e(5328)]).then(__webpack_require__.bind(__webpack_require__, 5328)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/Product/SelectAddressModal"
        ]
    },
    suspense: true
});
const NotLoggedIn = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(6193), __webpack_require__.e(1566)]).then(__webpack_require__.bind(__webpack_require__, 1566)), {
    loadableGenerated: {
        modules: [
            "basket\\index.tsx -> " + "@src/components/common/401"
        ]
    },
    suspense: true
});

const Basket = ({ baskets , isLoggedIn =true  })=>{
    // 2022/09/03 - 내 장바구니 상품들 수정 함수 - by 1-blue
    const [basketProducts, setBasketProducts] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_5__/* ["default"].basketService.basketProductsState */ .Z.basketService.basketProductsState);
    // 2022/09/03 - 내 장바구니 상품들 초기화 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setBasketProducts(baskets), [
        setBasketProducts,
        baskets
    ]);
    // 2022/09/05 - 배송지 선택 모달 렌더링 여부 - by 1-blue
    const { 0: showAddressModal , 1: setShowAddressModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "BleShop - 장바구니",
                description: "BleShop의 장바구니 페이지"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "pt-4 space-y-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleNav, {
                        title: "장바구니"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BasketNav, {}),
                    isLoggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Background, {
                                hasPadding: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BasketProducts, {})
                            }),
                            basketProducts.length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
                                className: "space-y-2",
                                hasPadding: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                        text: "결제 금액"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            basketProducts.filter((basket)=>!basket.skip).map((basket)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-xs xs:text-sm sm:text-base font-bold text-gray-500",
                                                            children: basket.product.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex-1"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-bold text-xs xs:text-sm sm:text-base",
                                                            children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_7__/* .numberWithComma */ .Wb)(basket.quantity * basket.product.price)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-[8px] xs:text-xs sm:text-sm",
                                                            children: "원"
                                                        })
                                                    ]
                                                }, basket.productIdx)),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                className: "h-0.5 bg-gray-300 my-2"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm xs:text-base sm:text-lg font-bold text-gray-600",
                                                        children: "총 결제 금액"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex-1"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-bold text-sm xs:text-base sm:text-lg",
                                                        children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_7__/* .numberWithComma */ .Wb)(basketProducts.map((basket)=>basket.skip ? 0 : basket.quantity * basket.product.price).reduce((prev, curr)=>prev + curr))
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-bold text-xs xs:text-sm sm:text-base",
                                                        children: "원"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "mt-4 text-end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                                    type: "button",
                                                    text: "구매하기",
                                                    primary: true,
                                                    className: "px-4",
                                                    onClick: ()=>setShowAddressModal(true)
                                                })
                                            }),
                                            showAddressModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectAddressModal, {
                                                products: basketProducts.filter((basket)=>!basket.skip).map((basket)=>basket.product),
                                                onCloseModal: ()=>setShowAddressModal(false),
                                                singleData: basketProducts.filter((basket)=>!basket.skip).map((basket)=>({
                                                        color: basket.color,
                                                        quantity: basket.quantity,
                                                        size: basket.size,
                                                        productIdx: basket.productIdx
                                                    }))
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotLoggedIn, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basket);
const getServerSideProps = async (context)=>{
    /**
   * SSR 요청일 경우에는 서버에서 페이지를 완성한 후에 반환하는 방식임
   * 하지만 서버에서는 클라이언트(브라우저)에 대한 정보를 알 수 없으니 "cookie"(세션 쿠키)를 이용해서 유저를 식별함
   * 컴포넌트에 내부에서 하는 요청들은 "axios"의 "withCredentials" 옵션을 통해서 자동으로 쿠키를 넣어서 전달하지만
   * "getServerSideProps()"에서 전달하는 요청은 서버에서 서버로 보내는 요청이므로 쿠키의 존재를 몰라서 첨부하지 않고 요청을 보냄
   *
   * 따라서 직접적으로 쿠키를 넣어주는 행동을 하지 않으면 요청에 쿠키가 들어가지 않아서 서버가 어떤 유저인지 식별할 수 없기에 직접적으로 쿠키를 넣어주는 구문임
   */ let { cookie  } = context.req.headers;
    cookie = cookie ? cookie : "";
    _src_api__WEBPACK_IMPORTED_MODULE_8__/* .axiosInstance.defaults.headers.Cookie */ .b.defaults.headers.Cookie = cookie;
    let baskets = [];
    try {
        const { data  } = await _src_api__WEBPACK_IMPORTED_MODULE_8__/* ["default"].productService.apiGetBasketProducts */ .Z.productService.apiGetBasketProducts();
        baskets = data.baskets;
    } catch (error) {
        // 로그인 하지 않은 유저인 경우 실행
        if (error instanceof axios__WEBPACK_IMPORTED_MODULE_4__.AxiosError) {
            if (error.response?.status === 403) {
                return {
                    props: {
                        baskets,
                        isLoggedIn: false
                    }
                };
            }
        }
        console.error("getServerSideProps basket/wish >> ", error);
    } finally{
        /**
     * "axios"에 등록한 특정 유저의 쿠키 제거
     * ( 브라우저에서의 요청이 아니라 서버에서의 요청이므로 다른 유저도 같은 서버를 사용하기에 쿠키가 공유되는 문제가 생김 )
     */ _src_api__WEBPACK_IMPORTED_MODULE_8__/* .axiosInstance.defaults.headers.Cookie */ .b.defaults.headers.Cookie = "";
    }
    return {
        props: {
            baskets
        }
    };
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 129:
/***/ ((module) => {

module.exports = require("date-fns/locale/ko");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 983:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,4629,2483,9800], () => (__webpack_exec__(8430)));
module.exports = __webpack_exports__;

})();