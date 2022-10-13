"use strict";
exports.id = 5865;
exports.ids = [5865];
exports.modules = {

/***/ 5865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8201);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5842);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9923);


// component



const Textarea = ({ name , register , placeholder , errorMessage , disabled , hiddenLabel , className  })=>{
    // 2022/08/18 - register에서 ref 떼내기 - by 1-blue
    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { ref , ...restRegister } = register;
    // 2022/08/18 - textarea 리사이징 - by 1-blue
    const handleResizeHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!textRef.current) return;
        textRef.current.style.height = "auto";
        textRef.current.style.height = textRef.current?.scrollHeight + 4 + "px";
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            hiddenLabel || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Label__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                name: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: name,
                rows: 10,
                placeholder: placeholder,
                ...restRegister,
                className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)("min-w-[200px] max-w-[600px] w-full px-2 xs:px-4 py-2 font-semibold text-xs xs:text-base rounded-sm border-2 border-gray-200 focus:border-blue-400 focus:outline-none placeholder:text-[8px] xs:placeholder:text-xs resize-none", className ? className : ""),
                disabled: disabled,
                ref: (e)=>{
                    ref(e);
                    textRef.current = e;
                },
                onInput: handleResizeHeight
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                errorMessage: errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ })

};
;