"use strict";
exports.id = 6670;
exports.ids = [6670,1887];
exports.modules = {

/***/ 6670:
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
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9923);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5797);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9800);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1304);
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



// type

const BasketProducts = ()=>{
    // 2022/09/01 - 장바구니 상품들 - by 1-blue
    const [basketProducts, setBasketProducts] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_6__/* ["default"].basketService.basketProductsState */ .Z.basketService.basketProductsState);
    // 2022/09/01 - 장바구니 상품에서 제거 - by 1-blue
    const onDeleteBasketProduct = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((productIdx)=>async ()=>{
            try {
                const { data: { message  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].basketService.apiDeleteBasket */ .Z.basketService.apiDeleteBasket({
                    productIdx
                });
                setBasketProducts((prev)=>prev.filter((product)=>product.productIdx !== productIdx));
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
        setBasketProducts
    ]);
    // 2022/09/01 - "수량 +/-"" 버튼 클릭 - by 1-blue
    const onUpdateQuantity = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((productIdx, quantity)=>async ()=>{
            if (quantity <= 0) return react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warn("0개 이하의 제품은 주문할 수 없습니다.");
            try {
                await _src_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].basketService.apiUpdateBasket */ .Z.basketService.apiUpdateBasket({
                    productIdx,
                    quantity
                });
                setBasketProducts((prev)=>prev.map((product)=>{
                        if (product.productIdx !== productIdx) return product;
                        return {
                            ...product,
                            quantity
                        };
                    }));
            } catch (error) {
                console.error(error);
                if (error instanceof axios__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response?.data.message);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("알 수 없는 오류입니다.");
                }
            }
        }, [
        setBasketProducts
    ]);
    // 2022/09/01 - 스킵 버튼 클릭 - by 1-blue
    const onUpdateSkip = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((productIdx, skip)=>async ()=>{
            try {
                await _src_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].basketService.apiUpdateBasket */ .Z.basketService.apiUpdateBasket({
                    productIdx,
                    skip
                });
                setBasketProducts((prev)=>prev.map((product)=>{
                        if (product.productIdx !== productIdx) return product;
                        return {
                            ...product,
                            skip
                        };
                    }));
            } catch (error) {
                console.error(error);
                if (error instanceof axios__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response?.data.message);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("알 수 없는 오류입니다.");
                }
            }
        }, [
        setBasketProducts
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: basketProducts.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Error */ .Z.Error, {
            text: "** 장바구니에 담긴 상품이 없습니다. **"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "space-y-2 sm:space-y-4",
            children: basketProducts.map((basketProduct)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_9__/* .combineClassNames */ .Nn)("group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible", basketProduct.skip ? "opacity-50" : ""),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/product/${basketProduct.productIdx}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-400 focus:outline-4",
                                onClick: (e)=>{
                                    const target = e.target;
                                    if (target.nodeName === "BUTTON" || target.nodeName === "INPUT") e.preventDefault();
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        path: basketProduct.product.photo,
                                        cover: true,
                                        className: "flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1 flex flex-col space-y-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "font-bolder sm:text-lg",
                                                children: basketProduct.product.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-xs sm:text-sm font-bold",
                                                        children: [
                                                            (0,_src_libs__WEBPACK_IMPORTED_MODULE_9__/* .numberWithComma */ .Wb)(basketProduct.product.price),
                                                            "원"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        className: "text-[8px] sm:text-xs text-gray-400",
                                                        children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_11__/* .dateOrTimeFormat */ .ie)(basketProduct.product.updatedAt, "YYYY-MM-DD-hh-mm-ss")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-1"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "self-start rounded-sm border border-gray-600",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        onClick: onUpdateQuantity(basketProduct.productIdx, basketProduct.quantity - 1),
                                                        className: "py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500",
                                                        children: "–"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "py-1 px-1.5 sm:px-2 text-sm sm:text-base border-x-2 border-gray-300",
                                                        children: basketProduct.quantity
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        onClick: onUpdateQuantity(basketProduct.productIdx, basketProduct.quantity + 1),
                                                        className: "py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500",
                                                        children: "+"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-xs sm:text-base",
                                                children: [
                                                    "상품 가격:",
                                                    " ",
                                                    (0,_src_libs__WEBPACK_IMPORTED_MODULE_9__/* .numberWithComma */ .Wb)(basketProduct.quantity * basketProduct.product.price)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "absolute top-1 right-2 flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Button */ .Z.Button, {
                                                        type: "button",
                                                        text: "삭제",
                                                        className: "text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-gray-400 text-gray-500 font-bold rounded-sm focus:outline-none focus:bg-gray-400 focus:text-white transition-colors",
                                                        onClick: onDeleteBasketProduct(basketProduct.productIdx)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "checkbox",
                                                        className: "w-4 h-4 sm:w-5 sm:h-5 cursor-pointer focus:outline-blue-400",
                                                        checked: !basketProduct.skip,
                                                        onChange: onUpdateSkip(basketProduct.productIdx, !basketProduct.skip)
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
                }, basketProduct.productIdx))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(BasketProducts));

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