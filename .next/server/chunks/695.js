"use strict";
exports.id = 695;
exports.ids = [695,565,740,7179,8300];
exports.modules = {

/***/ 565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9923);
// util


const Background = ({ children , className , hasPadding  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_1__/* .combineClassNames */ .Nn)("min-w-[250px] bg-white rounded-md shadow-2xl", hasPadding ? "p-2 xsm:p-3 md:p-4" : "", className ? className : ""),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);


/***/ }),

/***/ 7179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9923);
// util


const Error = ({ text , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
        className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_1__/* .combineClassNames */ .Nn)("text-center font-bolder text-red-500", className ? className : ""),
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ 8300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SubTitle = ({ text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        className: "pl-1 text-gray-800 font-bolder text-sm xs:text-base md:text-lg",
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);


/***/ }),

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Title = ({ text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: "text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl",
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(740);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8300);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7179);
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);




const Support = {
    Title: _Title__WEBPACK_IMPORTED_MODULE_0__["default"],
    SubTitle: _SubTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    Error: _Error__WEBPACK_IMPORTED_MODULE_2__["default"],
    Background: _Background__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Support);


/***/ })

};
;