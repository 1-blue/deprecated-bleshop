"use strict";
(() => {
var exports = {};
exports.id = 2274;
exports.ids = [2274];
exports.modules = {

/***/ 5993:
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
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2483);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9800);
/* harmony import */ var _src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4629);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




// api

// state

// component

const TitleNav = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 7340).then(__webpack_require__.bind(__webpack_require__, 7340)), {
    loadableGenerated: {
        modules: [
            "information\\order\\index.tsx -> " + "@src/components/common/Nav/TitleNav"
        ]
    },
    suspense: true
});
const OrderProducts = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(5675), __webpack_require__.e(6193), __webpack_require__.e(1304), __webpack_require__.e(695), __webpack_require__.e(5797), __webpack_require__.e(3989), __webpack_require__.e(200)]).then(__webpack_require__.bind(__webpack_require__, 200)), {
    loadableGenerated: {
        modules: [
            "information\\order\\index.tsx -> " + "@src/components/Products/OrderProducts"
        ]
    },
    suspense: true
});
const NotLoggedIn = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(6193), __webpack_require__.e(1566)]).then(__webpack_require__.bind(__webpack_require__, 1566)), {
    loadableGenerated: {
        modules: [
            "information\\order\\index.tsx -> " + "@src/components/common/401"
        ]
    },
    suspense: true
});

const Order = ({ orderList , isLoggedIn =true  })=>{
    // 2022/09/04 - 로그인한 유저의 주문 목록 수정 함수 - by 1-blue
    const setOrderList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orderService.orderListState */ .Z.orderService.orderListState);
    // 2022/09/04 - 로그인한 유저의 주문 목록 초기화 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setOrderList(orderList), [
        setOrderList,
        orderList
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "BleShop - 구매 목록",
                description: "BleShop의 구매 목록 페이지입니다."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "pt-4 space-y-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleNav, {
                        title: "내 정보"
                    }),
                    isLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderProducts, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotLoggedIn, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);
const getServerSideProps = async (context)=>{
    let { cookie  } = context.req.headers;
    cookie = cookie ? cookie : "";
    _src_api__WEBPACK_IMPORTED_MODULE_7__/* .axiosInstance.defaults.headers.Cookie */ .b.defaults.headers.Cookie = cookie;
    let orderList = [];
    try {
        const { data  } = await _src_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].orderService.apiGetOrderList */ .Z.orderService.apiGetOrderList();
        orderList = data.orderList;
    } catch (error) {
        // 로그인 하지 않은 유저인 경우 실행
        if (error instanceof axios__WEBPACK_IMPORTED_MODULE_4__.AxiosError) {
            if (error.response?.status === 403) {
                return {
                    props: {
                        orderList,
                        isLoggedIn: false
                    }
                };
            }
        }
        console.error("getServerSideProps information/order >> ", error);
    } finally{
        _src_api__WEBPACK_IMPORTED_MODULE_7__/* .axiosInstance.defaults.headers.Cookie */ .b.defaults.headers.Cookie = "";
    }
    return {
        props: {
            orderList
        }
    };
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,4629,2483,9800], () => (__webpack_exec__(5993)));
module.exports = __webpack_exports__;

})();