"use strict";
exports.id = 7025;
exports.ids = [7025];
exports.modules = {

/***/ 7025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5842);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8201);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9923);
// component




const Select = ({ name , register , children , placeholder , errorMessage , className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Label__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                name: name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                id: name,
                ...register,
                className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .combineClassNames */ .Nn)("p-1 xs:p-1.5 sm:p-2 text-xs xs:text-sm sm:text-base border-2 cursor-pointer focus:outline-blue-400", className ? className : ""),
                children: [
                    placeholder && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "",
                        children: placeholder
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                errorMessage: errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ })

};
;