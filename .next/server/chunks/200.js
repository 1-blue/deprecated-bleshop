"use strict";
exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 200:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2483);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9800);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5797);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9923);
/* harmony import */ var _src_components_common_Support__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(695);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1304);
/* harmony import */ var _src_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6193);
/* harmony import */ var _src_components_common_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3989);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// api

// state

// util

// component





const OrderProducts = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const orderList = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_src_states__WEBPACK_IMPORTED_MODULE_7__/* ["default"].orderService.orderListState */ .Z.orderService.orderListState);
    // 2022/09/05 - 결제 내역 삭제 모달 - by 1-blue
    const { 0: isShowModal , 1: setIsShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // 2022/09/05 - 삭제할 결제 내역의 식별자 - by 1-blue
    const { 0: targetOrderIdx , 1: setTargetOrderIdx  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // 2022/09/05 - 결제 내역 옵션 버튼 클릭 ( 모달 띄우고, 식별자 기록 ) - by 1-blue
    const onClickOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((orderIdx)=>()=>{
            setIsShowModal(true);
            setTargetOrderIdx(orderIdx);
        }, [
        setIsShowModal,
        setTargetOrderIdx
    ]);
    // 2022/09/05 - 결제 내역 제거 - by 1-blue
    const onDeleteOrder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (typeof targetOrderIdx !== "number") return react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warning("알 수 없는 요청입니다.");
        const toastId = react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.loading("주문을 삭제하는 중입니다.");
        try {
            const { data: { message  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_8__/* ["default"].orderService.apiDeleteOrder */ .Z.orderService.apiDeleteOrder({
                orderIdx: targetOrderIdx
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.update(toastId, {
                render: message,
                type: "success",
                isLoading: false
            });
        } catch (error) {
            console.error(error);
            if (error instanceof axios__WEBPACK_IMPORTED_MODULE_6__.AxiosError) {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.update(toastId, {
                    render: error.response?.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.update(toastId, {
                    render: "알 수 없는 에러가 발생했습니다.",
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            }
        } finally{
            setIsShowModal(false);
        }
    }, [
        targetOrderIdx,
        setIsShowModal
    ]);
    // 2022/09/07 - 리뷰를 작성할 상품의 정보 입력 함수 - by 1-blue
    const setTargetProduct = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_7__/* ["default"].reviewService.informationAboutReviewState */ .Z.reviewService.informationAboutReviewState);
    // 2022/09/07 - 리뷰 작성 클릭 - by 1-blue
    const onClickWriteReview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((body)=>()=>{
            // 리뷰를 작성할 상품의 정보 저장
            setTargetProduct(body);
            // 리뷰 페이지로 이동
            router.push("/review");
        }, [
        setTargetProduct,
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: orderList.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Error */ .Z.Error, {
            text: "** 주문 내역이 없습니다. **"
        }) : // 주문들
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "space-y-4",
            children: [
                orderList.map((order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Background */ .Z.Background, {
                            hasPadding: true,
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "px-3 text-sm sm:text-base font-bold",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                            children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_10__/* .dateFormat */ .vc)(order.updatedAt, "YYYY/MM/DD")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: " - "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                            children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_10__/* .dateFormat */ .vc)(order.updatedAt, "hh시mm분")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: " 주문"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "absolute top-3 right-2",
                                    onClick: onClickOption(order.idx),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        shape: "verticalDotDotDot",
                                        className: "w-6 h-6"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: order.products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: `/product/${product.productIdx}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-500",
                                                    onClick: (e)=>{
                                                        const target = e.target;
                                                        if (target.nodeName === "BUTTON") {
                                                            e.preventDefault();
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                            path: product.product.photo,
                                                            cover: true,
                                                            className: "flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex-1 flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "font-bolder sm:text-lg",
                                                                            children: product.product.name
                                                                        }),
                                                                        product.isReview ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "text-[8px] sm:text-xs hover:underline hover:underline-offset-2",
                                                                            onClick: ()=>router.push("/information/review"),
                                                                            children: "리뷰 관리로 이동"
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "py-1 px-1.5 text-[8px] sm:text-xs border border-blue-400 rounded-md text-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white transition-colors",
                                                                            onClick: onClickWriteReview({
                                                                                name: product.product.name,
                                                                                photo: product.product.photo,
                                                                                productIdx: product.productIdx,
                                                                                orderIdx: product.orderIdx
                                                                            }),
                                                                            children: "리뷰 작성"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-1"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-sm sm:text-base font-bold",
                                                                                    children: "상품 가격"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "text-sm sm:text-base",
                                                                                    children: [
                                                                                        (0,_src_libs__WEBPACK_IMPORTED_MODULE_13__/* .numberWithComma */ .Wb)(product.product.price),
                                                                                        "원"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-sm sm:text-base font-bold",
                                                                                    children: "구매 개수"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "text-sm sm:text-base",
                                                                                    children: [
                                                                                        product.quantity,
                                                                                        "개"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                                            className: "my-1"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "flex justify-between font-bold",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-sm sm:text-base",
                                                                                    children: "상품 결제금액"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "text-sm sm:text-base",
                                                                                    children: [
                                                                                        (0,_src_libs__WEBPACK_IMPORTED_MODULE_13__/* .numberWithComma */ .Wb)(product.product.price * product.quantity),
                                                                                        "원"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, "" + product.productIdx + product.orderIdx))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "border-gray-300 my-2 border-2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bolder sm:text-lg",
                                                children: "결제 정보"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm sm:text-base font-bold",
                                                    children: "결제 방법"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm sm:text-base",
                                                    children: order.provider
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between font-bold",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm sm:text-base font-bold",
                                                    children: "총 결제금액"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "text-sm sm:text-base",
                                                    children: [
                                                        (0,_src_libs__WEBPACK_IMPORTED_MODULE_13__/* .numberWithComma */ .Wb)(order.amount),
                                                        "원"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "px-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "border-gray-300 my-2 border-2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bolder sm:text-lg",
                                                children: "배송지 정보"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm sm:text-base font-bold",
                                                children: order.name
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm sm:text-base",
                                                children: order.address
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm sm:text-base",
                                                children: order.residence
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm sm:text-base",
                                                children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_13__/* .addSeparatorToPhone */ .lM)(order.phone)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "my-1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-sm sm:text-base",
                                                children: [
                                                    "배송 요청 사항: ",
                                                    order.message
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, order.idx)),
                isShowModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    title: "상품 주문 내역 관리",
                    onCloseModal: ()=>setIsShowModal(false),
                    className: "max-w-[500px] min-w-[250px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Background */ .Z.Background, {
                        className: "flex flex-col divide-y",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "py-2 text-xs xs:text-sm md:text-base hover:bg-gray-300 transition-colors",
                                onClick: onDeleteOrder,
                                children: "주문내역 삭제"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "py-2 text-xs xs:text-sm md:text-base hover:bg-gray-300 transition-colors",
                                onClick: ()=>setIsShowModal(false),
                                children: "닫기"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;