"use strict";
exports.id = 1304;
exports.ids = [1304];
exports.modules = {

/***/ 1304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9923);



// util

const Photo = ({ path , className , alt , cover , contain , priority , avatar , isFocus , onClick  })=>{
    const photoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onClickPhoto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (typeof onClick === "function") onClick();
    }, [
        onClick
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: path ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
            className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)("relative bg-black", isFocus ? "focus:ring-2 focus:ring-blue-400 focus:ring-offset-4" : "", avatar ? "rounded-full" : "rounded-md", className ? className : ""),
            tabIndex: typeof onClick === "function" ? 0 : -1,
            onClick: onClickPhoto,
            ref: photoRef,
            onKeyDown: (e)=>e.key === "Enter" ? photoRef.current?.click() : null,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: path.includes("http") ? path : (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combinePhotoUrl */ .eV)(path),
                layout: "fill",
                className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)(avatar ? "rounded-full" : "", cover ? "object-cover" : "", contain ? "object-contain" : ""),
                alt: alt,
                priority: priority
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)("relative bg-black", avatar ? "rounded-full" : "rounded-md", className ? className : ""),
                onClick: onClickPhoto,
                tabIndex: typeof onClick === "function" ? 0 : -1,
                ref: photoRef,
                onKeyDown: (e)=>e.key === "Enter" ? photoRef.current?.click() : null,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/user.png",
                    layout: "fill",
                    className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)(avatar ? "rounded-full" : "rounded-md", cover ? "object-cover" : "", contain ? "object-contain" : ""),
                    alt: alt,
                    priority: priority
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photo);


/***/ })

};
;