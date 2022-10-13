"use strict";
exports.id = 2249;
exports.ids = [2249];
exports.modules = {

/***/ 2249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
// type

const Checkbox = ({ name , register , errorMessage , disabled  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-4 min-w-[200px] max-w-[600px] w-full flex items-center space-x-1 xs:space-x-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                ...register,
                type: "checkBox",
                className: "w-4 h-4 xs:w-5 xs:h-5 cursor-pointer focus:outline-blue-400",
                disabled: disabled
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "text-xs xs:text-sm cursor-pointer",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "self-start text-red-600 mb-4 mt-1 font-semibold text-[8px] xs:text-xs",
                children: errorMessage && "※" + " " + errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ })

};
;