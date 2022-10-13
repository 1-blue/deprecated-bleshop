"use strict";
exports.id = 1432;
exports.ids = [1432];
exports.modules = {

/***/ 1432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9923);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8201);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5842);
// util


// component


const Input = ({ name , type , register , placeholder , errorMessage , disabled , onFocus , onBlur , hiddenLabel , hiddenMessage , className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            hiddenLabel || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Label__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                name: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: type,
                id: name,
                placeholder: placeholder,
                ...register,
                className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .combineClassNames */ .Nn)("px-2 xs:px-4 py-2 font-semibold text-xs xs:text-base rounded-sm border-2 border-gray-200 focus:border-blue-400 focus:outline-none placeholder:text-[8px] xs:placeholder:text-xs", className ? className : ""),
                disabled: disabled,
                onFocus: onFocus,
                onBlur: onBlur
            }),
            hiddenMessage || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                errorMessage: errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;