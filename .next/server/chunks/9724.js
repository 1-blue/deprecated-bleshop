"use strict";
exports.id = 9724;
exports.ids = [9724];
exports.modules = {

/***/ 4192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Spinner = ({ kinds  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: kinds === "button" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-8 h-8 rounded-full mx-auto border-[6px] border-gray-200 border-t-gray-500 animate-spin"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);


/***/ }),

/***/ 9724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9923);
/* harmony import */ var _src_components_common_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// util

// component

const Button = ({ type , text , className , primary , loading , onClick  })=>{
    // 2022/08/11 - 로딩 여부로 버튼 클릭 가능 판단하는 함수 및 기능 전달 시 사용 - by 1-blue
    const onClickButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (typeof onClick === "function") onClick();
        if (!loading) return;
        e.preventDefault();
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warning("처리중입니다. 잠시 기다려주세요!");
    }, [
        loading,
        onClick
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)(primary ? "py-2 xs:py-3 text-xs xs:text-sm md:text-base text-white font-semibold rounded-sm xs:rounded-md bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors" : "", className ? className : ""),
        onClick: onClickButton,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Suspense), {
            fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Loading..."
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Spinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                kinds: "button"
            })
        }) : text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;