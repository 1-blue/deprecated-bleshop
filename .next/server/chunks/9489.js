"use strict";
exports.id = 9489;
exports.ids = [9489];
exports.modules = {

/***/ 9489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_common_Support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(695);
/* harmony import */ var _src_components_common_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5129);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1304);



// component



const RecentProducts = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // 2022/09/11 - 최근 본 상품들 - by 1-blue
    const { 0: recentProducts , 1: setReconetProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // 2022/09/11 - "localStorage"에서 최근 본 상품 가져오기 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setReconetProducts(JSON.parse(localStorage.getItem("watched") || "[]"));
    }, []);
    // 2022/09/11 - 현재 보여지는 광고 번호  - by 1-blue
    const { 0: currentDot , 1: setCurrentDot  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // 2022/10/13 - 드래그를 하는 경우 해당 상품페이지로 이동 X - by 1-blue
    const { 0: dargging , 1: setDragging  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const beforeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setDragging(true), [
        setDragging
    ]);
    const afterChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setDragging(false), [
        setDragging
    ]);
    const onClickPhoto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((path)=>(e)=>{
            if (dargging) {
                e.stopPropagation();
                return;
            }
            router.push(path);
        }, [
        dargging,
        router
    ]);
    if (recentProducts.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Error */ .Z.Error, {
        text: "** 최근 본 상품이 없습니다. **"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        currentDot: currentDot,
        setCurrentDot: setCurrentDot,
        slidesToShow: 3,
        dotPos: 30,
        afterChange: afterChange,
        beforeChange: beforeChange,
        children: recentProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: onClickPhoto(`/product/${product.idx}`),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            path: product.photo,
                            className: "w-full h-[100px] xsm:h-[160px] md:h-[200px]",
                            alt: "상품 이미지",
                            cover: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block w-full text-center font-bold text-xs xs:text-sm sm:text-base",
                            children: product.name
                        })
                    ]
                })
            }, product.idx))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentProducts);


/***/ })

};
;