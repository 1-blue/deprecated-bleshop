"use strict";
exports.id = 7426;
exports.ids = [7426];
exports.modules = {

/***/ 7426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9923);



// util

const BasketNav = ()=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "flex justify-between bg-white rounded-md shadow-2xl overflow-hidden w-full min-w-[250px] divide-x-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "flex-1 flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/basket",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)("flex-1 text-center py-2 xs:py-3 font-bolder text-xs xs:text-base sm:text-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition-colors", asPath.endsWith("/basket") ? "bg-blue-400 text-white" : ""),
                        children: "장바구니 상품들"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "flex-1 flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/basket/wish",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)("flex-1 text-center py-2 xs:py-3 font-bolder text-xs xs:text-base sm:text-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition-colors", asPath.includes("/basket/wish") ? "bg-blue-400 text-white" : ""),
                        children: "찜한 상품들"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketNav);


/***/ })

};
;