"use strict";
exports.id = 5319;
exports.ids = [5319];
exports.modules = {

/***/ 5319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2483);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9923);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5797);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9800);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1304);
/* harmony import */ var _src_components_common_Support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(695);




// api

// util

// state

// component


const limit = 15;
const Products = ({ searchWord  })=>{
    // 2022/08/22 - 화면에 랜더링할 상품들 - by 1-blue
    const [products, setProducts] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_4__/* ["default"].productsService.productsState */ .Z.productsService.productsState);
    // 2022/08/22 - 가장 최근에 요청한 상품의 마지막 식별자 ( 해당 식별자를 기준으로 다음 상품들의 데이터를 요청 ) - by 1-blue
    const productLastIdx = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_states__WEBPACK_IMPORTED_MODULE_4__/* ["default"].productsService.productLastIdxState */ .Z.productsService.productLastIdxState);
    // 2022/08/22 - 마지막 상품의 ref - by 1-blue
    const { 0: lastProductRef , 1: setLastProductRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // 2022/08/23 - 현재 선택한 카테고리 - by 1-blue
    const selectedCategory = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_states__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categoryService.selectedCategoryState */ .Z.categoryService.selectedCategoryState);
    // 2022/08/23 - 현재 선택한 카테고리 - by 1-blue
    const selectedFilters = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_states__WEBPACK_IMPORTED_MODULE_4__/* ["default"].filterService.selectedFiltersState */ .Z.filterService.selectedFiltersState);
    // 2022/09/06 - 카테고리, 필터링 바뀌면 초기 상품들 패치 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                let products = [];
                // 특정 상품들 검색
                if (searchWord) {
                    const { data  } = await _src_api__WEBPACK_IMPORTED_MODULE_5__/* ["default"].productService.apiGetProductsByKeyword */ .Z.productService.apiGetProductsByKeyword({
                        limit,
                        lastIdx: -1,
                        selectedCategory,
                        selectedFilters,
                        keyword: searchWord
                    });
                    products = data.products;
                } else {
                    const { data: data1  } = await _src_api__WEBPACK_IMPORTED_MODULE_5__/* ["default"].productService.apiGetProducts */ .Z.productService.apiGetProducts({
                        limit,
                        lastIdx: -1,
                        selectedCategory,
                        selectedFilters
                    });
                    products = data1.products;
                }
                setProducts(products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [
        searchWord,
        setProducts,
        selectedCategory,
        selectedFilters
    ]);
    // 2022/08/22 - observer로 인해 실행할 이벤트 함수 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수 ) - by 1-blue
    const onScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ([{ isIntersecting  }])=>{
        if (!lastProductRef) return;
        // 지정한 엘리먼트가 "threshold"만큼을 제외하고 뷰포트에 들어왔다면 실행
        if (isIntersecting) {
            try {
                let products = [];
                // 특정 상품들 검색
                if (searchWord) {
                    const { data  } = await _src_api__WEBPACK_IMPORTED_MODULE_5__/* ["default"].productService.apiGetProductsByKeyword */ .Z.productService.apiGetProductsByKeyword({
                        limit,
                        lastIdx: productLastIdx,
                        selectedCategory,
                        selectedFilters,
                        keyword: searchWord
                    });
                    products = data.products;
                } else {
                    const { data: data1  } = await _src_api__WEBPACK_IMPORTED_MODULE_5__/* ["default"].productService.apiGetProducts */ .Z.productService.apiGetProducts({
                        limit,
                        lastIdx: productLastIdx,
                        selectedCategory,
                        selectedFilters
                    });
                    products = data1.products;
                }
                setProducts((prev)=>[
                        ...prev,
                        ...products
                    ]);
            } catch (error) {
                console.error(error);
            }
        }
    }, [
        searchWord,
        lastProductRef,
        productLastIdx,
        setProducts,
        selectedCategory,
        selectedFilters, 
    ]);
    // 2022/08/22 - observer 등록 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수를 등록 ) - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!lastProductRef) return;
        if (products.length % limit !== 0) return;
        let observer = new IntersectionObserver(onScroll, {
            threshold: 0.1,
            rootMargin: "20px"
        });
        observer.observe(lastProductRef);
        return ()=>observer?.disconnect();
    }, [
        lastProductRef,
        onScroll,
        products
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: products.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Error */ .Z.Error, {
            text: "** 조건에 맞는 상품이 없습니다. **"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-2",
            children: products.map((product, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible",
                    ref: (e)=>products.length === i + 1 ? setLastProductRef(e) : null,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/product/${product.idx}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "flex flex-col h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-400 focus:outline-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        path: product.photo,
                                        cover: true,
                                        className: "h-60"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1 flex flex-col space-y-2 px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "font-bolder text-xl",
                                                children: product.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "flex-1 whitespace-pre overflow-hidden text-ellipsis",
                                                children: product.description
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            (0,_src_libs__WEBPACK_IMPORTED_MODULE_8__/* .numberWithComma */ .Wb)(product.price),
                                                            "원"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        className: "text-xs sm:text-sm text-gray-400",
                                                        children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_9__/* .dateOrTimeFormat */ .ie)(product.updatedAt, "YYYY-MM-DD-hh-mm-ss")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-full rounded-md bg-gray-400 -z-10 group-hover:animate-my-ping group-hover:z-[1]"
                        })
                    ]
                }, product.idx))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Products));


/***/ })

};
;