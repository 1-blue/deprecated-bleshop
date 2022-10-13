"use strict";
exports.id = 5129;
exports.ids = [5129];
exports.modules = {

/***/ 5129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9923);



// util

// css


const Carousel = ({ children , currentDot , setCurrentDot , autoPlay , className , slidesToShow =1 , dotPos =40 , afterChange , beforeChange  })=>{
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: autoPlay,
        appendDots: (dots)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                style: {
                    bottom: `-${dotPos}px`
                },
                children: dots
            }),
        beforeChange: (prev, next)=>{
            setCurrentDot(next);
            if (typeof beforeChange === "function") beforeChange();
        },
        afterChange
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)(className ? className : ""),
        ...settings,
        customPaging: (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .combineClassNames */ .Nn)("text-[8px] xs:text-xs md:text-sm border-2 border-blue-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus:outline-none focus:bg-blue-600 focus:text-white focus:border-blue-600", currentDot === i ? "bg-blue-400 text-white" : ""),
                tabIndex: 0,
                children: i + 1
            }),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);


/***/ })

};
;