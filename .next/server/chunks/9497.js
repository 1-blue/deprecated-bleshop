"use strict";
exports.id = 9497;
exports.ids = [9497,1887];
exports.modules = {

/***/ 9497:
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
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2483);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9923);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5797);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9800);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1304);
/* harmony import */ var _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3300);
/* harmony import */ var _src_components_common_Support__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(695);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// api

// util

// state

// component




const WishProducts = ()=>{
    // 2022/08/30 - 화면에 랜더링할 찜한 상품들 - by 1-blue
    const [wishProducts, setWishProducts] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_6__/* ["default"].wishService.wishProductsState */ .Z.wishService.wishProductsState);
    // 2022/08/30 - 현재 브라우저 가로 길이 구하기 - by 1-blue
    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const onResizeWidth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setWidth(window.innerWidth), []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onResizeWidth();
        window.addEventListener("resize", onResizeWidth);
        return ()=>window.removeEventListener("resize", onResizeWidth);
    }, [
        onResizeWidth
    ]);
    // 2022/08/30 - 찜한 상품에서 제거 - by 1-blue
    const onDeleteWishProduct = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((productIdx)=>async ()=>{
            try {
                const { data: { message  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].wishService.apiDeleteWish */ .Z.wishService.apiDeleteWish({
                    productIdx
                });
                setWishProducts((prev)=>prev.filter((wishProduct)=>wishProduct.productIdx !== productIdx));
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(message);
            } catch (error) {
                console.error(error);
                if (error instanceof axios__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response?.data.message);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("알 수 없는 오류입니다.");
                }
            }
        }, [
        setWishProducts
    ]);
    // 2022/09/01 - 찜한 상품 장바구니로 옮기기 - by 1-blue
    const onMoveBasket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ productIdx , color , size , quantity  })=>async ()=>{
            try {
                const { data: { message  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].basketService.apiCreateBasket */ .Z.basketService.apiCreateBasket({
                    productIdx,
                    color,
                    size,
                    quantity
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(message);
            } catch (error) {
                console.error(error);
                if (error instanceof axios__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response?.data.message);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("알 수 없는 오류입니다.");
                }
            }
        }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: wishProducts.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Error */ .Z.Error, {
            text: "** 조건에 맞는 상품이 없습니다. **"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "space-y-2 sm:space-y-4",
            children: wishProducts.map((wishProduct)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/product/${wishProduct.productIdx}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-500",
                                onClick: (e)=>{
                                    const target = e.target;
                                    if (target.nodeName === "BUTTON") e.preventDefault();
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                        path: wishProduct.product.photo,
                                        cover: true,
                                        className: "flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1 flex flex-col space-y-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "font-bolder sm:text-lg",
                                                children: wishProduct.product.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "flex-1 whitespace-pre-wrap overflow-hidden text-ellipsis text-xs",
                                                children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_10__/* .sliceLineOfString */ .Um)(wishProduct.product.description, width > 638 ? 4 : 2).slice(0, width > 638 ? 200 : 60)
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-xs sm:text-sm font-bold",
                                                        children: [
                                                            (0,_src_libs__WEBPACK_IMPORTED_MODULE_10__/* .numberWithComma */ .Wb)(wishProduct.product.price),
                                                            "원"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        className: "text-[8px] sm:text-xs text-gray-400",
                                                        children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_11__/* .dateOrTimeFormat */ .ie)(wishProduct.product.updatedAt, "YYYY-MM-DD-hh-mm-ss")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "self-end space-x-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Button */ .Z.Button, {
                                                        type: "button",
                                                        text: "삭제",
                                                        className: "text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-gray-400 text-gray-500 font-bold rounded-sm hover:bg-gray-400 hover:text-white focus:outline-none focus:bg-gray-400 focus:text-white transition-colors",
                                                        onClick: onDeleteWishProduct(wishProduct.productIdx)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Button */ .Z.Button, {
                                                        type: "button",
                                                        text: "장바구니 담기",
                                                        className: "text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-blue-500 text-blue-500 font-bold rounded-sm hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition-colors",
                                                        onClick: onMoveBasket(wishProduct)
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
                }, wishProduct.productIdx))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(WishProducts));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9923);
// util


const Form = ({ onSubmit , className , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: onSubmit,
        className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_1__/* .combineClassNames */ .Nn)("flex flex-col items-center", className ? className : ""),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ 3300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1887);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1432);
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5865);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9724);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2249);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7025);
/* harmony import */ var _SinglePhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(862);
/* harmony import */ var _MultiplePhoto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1423);
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4030);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Button__WEBPACK_IMPORTED_MODULE_3__, _SinglePhoto__WEBPACK_IMPORTED_MODULE_6__, _MultiplePhoto__WEBPACK_IMPORTED_MODULE_7__, _DatePicker__WEBPACK_IMPORTED_MODULE_8__]);
([_Button__WEBPACK_IMPORTED_MODULE_3__, _SinglePhoto__WEBPACK_IMPORTED_MODULE_6__, _MultiplePhoto__WEBPACK_IMPORTED_MODULE_7__, _DatePicker__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Tool = {
    Form: _Form__WEBPACK_IMPORTED_MODULE_0__["default"],
    Input: _Input__WEBPACK_IMPORTED_MODULE_1__["default"],
    Textarea: _Textarea__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    Checkbox: _Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"],
    Select: _Select__WEBPACK_IMPORTED_MODULE_5__["default"],
    SinglePhoto: _SinglePhoto__WEBPACK_IMPORTED_MODULE_6__["default"],
    MultiplePhoto: _MultiplePhoto__WEBPACK_IMPORTED_MODULE_7__["default"],
    DatePicker: _DatePicker__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tool);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;