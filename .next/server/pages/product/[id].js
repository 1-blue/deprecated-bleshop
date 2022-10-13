"use strict";
(() => {
var exports = {};
exports.id = 6360;
exports.ids = [6360];
exports.modules = {

/***/ 6312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9137);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9923);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5797);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2483);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9800);
/* harmony import */ var _src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4629);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// util

// api

// state

// component

const Background = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 565).then(__webpack_require__.bind(__webpack_require__, 565)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/Support/Background"
        ]
    },
    suspense: true
});
const Title = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 740).then(__webpack_require__.bind(__webpack_require__, 740)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/Support/Title"
        ]
    },
    suspense: true
});
const TitleNav = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 7340).then(__webpack_require__.bind(__webpack_require__, 7340)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/Nav/TitleNav"
        ]
    },
    suspense: true
});
const Select = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7025), __webpack_require__.e(2833)]).then(__webpack_require__.bind(__webpack_require__, 7025)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/Tool/Select"
        ]
    },
    suspense: true
});
const Carousel = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 5129).then(__webpack_require__.bind(__webpack_require__, 5129)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/Carousel"
        ]
    },
    suspense: true
});
const Photo = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(5675), __webpack_require__.e(1304)]).then(__webpack_require__.bind(__webpack_require__, 1304)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/Photo"
        ]
    },
    suspense: true
});
const MyError = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(6193), __webpack_require__.e(6613)]).then(__webpack_require__.bind(__webpack_require__, 6613)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/MyError"
        ]
    },
    suspense: true
});
const MyLoading = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 3654).then(__webpack_require__.bind(__webpack_require__, 3654)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/common/MyLoading"
        ]
    },
    suspense: true
});
const RelatedProducts = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(5675), __webpack_require__.e(1304), __webpack_require__.e(695), __webpack_require__.e(3195)]).then(__webpack_require__.bind(__webpack_require__, 3195)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/Products/RelatedProducts"
        ]
    },
    suspense: true
});
const SelectAddressModal = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(2952), __webpack_require__.e(1664), __webpack_require__.e(695), __webpack_require__.e(3989), __webpack_require__.e(5328)]).then(__webpack_require__.bind(__webpack_require__, 5328)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/Product/SelectAddressModal"
        ]
    },
    suspense: true
});
const Reviews = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9159), __webpack_require__.e(910), __webpack_require__.e(5675), __webpack_require__.e(6193), __webpack_require__.e(1304), __webpack_require__.e(5129), __webpack_require__.e(695), __webpack_require__.e(862), __webpack_require__.e(1432), __webpack_require__.e(7025), __webpack_require__.e(1423), __webpack_require__.e(4030), __webpack_require__.e(9724), __webpack_require__.e(5865), __webpack_require__.e(2249), __webpack_require__.e(3989), __webpack_require__.e(7261)]).then(__webpack_require__.bind(__webpack_require__, 7261)), {
    loadableGenerated: {
        modules: [
            "product\\[id].tsx -> " + "@src/components/Product/Reviews"
        ]
    },
    suspense: true
});

const limit = 15;
const Product = ({ product , relatedProducts , reviews  })=>{
    const { data  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // 2022/08/26 - 상품 구매/장바구니 관련 폼 - by 1-blue
    const { register , watch , setValue , handleSubmit , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        defaultValues: {
            quantity: 1
        }
    });
    // 2022/08/26 - 구매할 상품 개수 - by 1-blue
    const quantity = watch("quantity");
    // 2022/09/04 - 배송지 선택 모달 렌더링 여부 - by 1-blue
    const { 0: showAddressModal , 1: setShowAddressModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // 2022/08/26 - 상품 구매버튼 클릭 시 실행 - by 1-blue
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!product) return;
        if (!data?.user) return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("로그인 후에 시도해주세요!");
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.info("배송지를 선택해주세요!");
        setShowAddressModal(true);
    }, [
        data,
        product,
        setShowAddressModal
    ]);
    // 2022/08/26 - 현재 상품의 이미지들중에 보여지는 이미지 번호 - by 1-blue
    const { 0: currentDot , 1: setCurrentDot  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // 2022/08/26 - 현재 상품에 찜하기를 눌렀는지 여부 - by 1-blue
    const { 0: isWish , 1: setIsWish  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!product) return;
        if (!data?.user) return;
        (async ()=>{
            const { data: { isWish  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].wishService.apiGetWish */ .Z.wishService.apiGetWish({
                productIdx: product.idx
            });
            setIsWish(isWish);
        })();
    }, [
        product,
        data
    ]);
    // 2022/08/30 - 찜하기/찜취소하기 - by 1-blue
    const onClickWishButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (typeof router.query.id !== "string") return;
        const toastId = react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.loading("찜하기 요청을 처리중입니다.");
        try {
            // 찜취소하기 요청
            if (isWish) {
                const { data: { message  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].wishService.apiDeleteWish */ .Z.wishService.apiDeleteWish({
                    productIdx: +router.query.id
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastId, {
                    render: message,
                    type: "success",
                    isLoading: false,
                    autoClose: 1500
                });
                setIsWish(false);
            } else {
                const { data: { message: message1  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].wishService.apiCreateWish */ .Z.wishService.apiCreateWish({
                    productIdx: +router.query.id,
                    ...getValues()
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastId, {
                    render: message1,
                    type: "success",
                    isLoading: false,
                    autoClose: 1500
                });
                setIsWish(true);
            }
        } catch (error) {
            console.error(error);
            if (error instanceof axios__WEBPACK_IMPORTED_MODULE_8__.AxiosError) {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastId, {
                    render: error.response?.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastId, {
                    render: "알 수 없는 에러가 발생했습니다.",
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            }
        }
    }, [
        isWish,
        router.query,
        getValues
    ]);
    // 2022/08/31 - 장바구니 담기 - by 1-blue
    const onPutBasket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (typeof router.query.id !== "string") return;
        const toastId = react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.loading("장바구니에 상품을 넣는중입니다.");
        try {
            const { data: { message  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].basketService.apiCreateBasket */ .Z.basketService.apiCreateBasket({
                ...getValues(),
                productIdx: +router.query.id
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastId, {
                render: message,
                type: "success",
                isLoading: false,
                autoClose: 1500
            });
        } catch (error) {
            console.error(error);
            if (error instanceof axios__WEBPACK_IMPORTED_MODULE_8__.AxiosError) {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastId, {
                    render: error.response?.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastId, {
                    render: "알 수 없는 에러가 발생했습니다.",
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            }
        }
    }, [
        getValues,
        router.query
    ]);
    // 2022/09/01 - 연관된 상품들 수정 함수 - by 1-blue
    const setRelatedProducts = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_10__/* ["default"].productService.relatedProductsState */ .Z.productService.relatedProductsState);
    // 2022/09/01 - 연관된 상품들 초기화 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRelatedProducts(relatedProducts);
    }, [
        setRelatedProducts,
        relatedProducts
    ]);
    // 2022/09/07 - 리뷰들 수정 함수 - by 1-blue
    const setReviews = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_10__/* ["default"].reviewService.reviewsState */ .Z.reviewService.reviewsState);
    // 2022/09/07 - 리뷰들 초기화 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setReviews(reviews), [
        setReviews,
        reviews
    ]);
    // 2022/09/11 - 최근 본 상품으로 등록 ( localStorage ) - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!product) return;
        const previousWatched = JSON.parse(localStorage.getItem("watched") || "[]");
        if (!Array.isArray(previousWatched)) return;
        let currentWatched = [];
        const targetIndex = previousWatched.findIndex((watched)=>watched.idx === product.idx);
        // 처음 보는 상품이라면
        if (targetIndex === -1) {
            const { idx , photo , name , ...rest } = product;
            currentWatched = [
                {
                    idx,
                    photo,
                    name
                },
                ...previousWatched
            ];
        } else {
            const target = previousWatched.splice(targetIndex, 1);
            currentWatched = [
                ...target,
                ...previousWatched
            ];
        }
        // 목록이 10개가 넘으면 자르기
        if (currentWatched.length > 10) currentWatched.pop();
        localStorage.setItem("watched", JSON.stringify(currentWatched));
    }, [
        product
    ]);
    if (router.isFallback) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyLoading, {});
    if (product === null) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyError, {
        message: "상품이 존재하지 않습니다."
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                title: `BleShop - ${product.name}`,
                description: product.description,
                photo: product.photo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "pt-4 space-y-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleNav, {
                        title: "돌아가기"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
                        className: "space-y-2",
                        hasPadding: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                text: "상품 이미지들"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Carousel, {
                                currentDot: currentDot,
                                setCurrentDot: setCurrentDot,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Photo, {
                                        path: product.photo,
                                        className: "w-full h-[200px] xs:h-[350px] md:h-[500px]",
                                        alt: "상품 대표 이미지",
                                        cover: true
                                    }, product.photo),
                                    product.photos.map(({ path  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Photo, {
                                            path: path,
                                            className: "w-full h-[200px] xs:h-[350px] md:h-[500px]",
                                            alt: "상품 이미지",
                                            cover: true
                                        }, path))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pb-10"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
                        className: "flex flex-col space-y-2",
                        hasPadding: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                text: product.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col divide-y-2 space-y-2 text-sm sm:text-base",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "px-2 font-bold",
                                        children: [
                                            (0,_src_libs__WEBPACK_IMPORTED_MODULE_12__/* .numberWithComma */ .Wb)(product.price),
                                            "원"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-2 pt-2",
                                        children: product.brand
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-2 pt-2",
                                        children: product.company
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                className: "self-end text-[8px] sm:text-xs text-gray-400",
                                children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_13__/* .dateOrTimeFormat */ .ie)(product.updatedAt, "YYYY-MM-DD-hh-mm-ss")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
                        className: "flex flex-col space-y-2",
                        hasPadding: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                text: "상품 설명"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm sm:text-base whitespace-pre-line",
                                children: product.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
                        className: "flex flex-col space-y-2",
                        hasPadding: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                text: "옵션 선택"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "flex flex-col",
                                children: [
                                    product.size && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Select, {
                                        name: "사이즈",
                                        register: register("size"),
                                        children: product.size.split(",").map((v)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: v
                                            }, v))
                                    }),
                                    product.color && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Select, {
                                        name: "색상",
                                        register: register("color"),
                                        children: product.color?.split(",").map((v)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: v
                                            }, v))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "rounded-sm border border-gray-600",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        onClick: ()=>setValue("quantity", quantity - 1 >= 1 ? quantity - 1 : quantity),
                                                        className: "py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500",
                                                        children: "–"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "py-1 px-1.5 sm:px-2 text-sm sm:text-base border-x-2 border-gray-300",
                                                        children: watch("quantity")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        onClick: ()=>setValue("quantity", quantity + 1),
                                                        className: "py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500",
                                                        children: "+"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-sm sm:text-base",
                                                children: [
                                                    "가격: ",
                                                    (0,_src_libs__WEBPACK_IMPORTED_MODULE_12__/* .numberWithComma */ .Wb)(quantity * product.price),
                                                    "원"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        className: "flex p-2 space-x-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "flex-1 p-1 xs:p-1.5 sm:p-2 bg-red-400 text-xs xs:text-sm sm:text-base text-white font-bold hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                onClick: onClickWishButton,
                                children: isWish ? "취소하기" : "찜하기"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "flex-1 p-1 xs:p-1.5 sm:p-2 bg-blue-400 text-xs xs:text-sm sm:text-base text-white font-bold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                children: "구매하기"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "flex-1 p-1 xs:p-1.5 sm:p-2 bg-indigo-400 text-xs xs:text-sm sm:text-base text-white font-bold hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                onClick: onPutBasket,
                                children: "장바구니"
                            })
                        ]
                    }),
                    showAddressModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectAddressModal, {
                        products: [
                            product
                        ],
                        onCloseModal: ()=>setShowAddressModal(false),
                        singleData: [
                            {
                                color: getValues("color"),
                                size: getValues("size"),
                                quantity: quantity,
                                productIdx: product.idx
                            }, 
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
                        className: "flex flex-col space-y-2 p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                text: "리뷰들"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Reviews, {
                                productIdx: product.idx
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
                        className: "flex flex-col space-y-2",
                        hasPadding: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                text: "연관 상품들"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RelatedProducts, {
                                productIdx: product.idx,
                                keywords: product.keywords.map(({ keywordIdx  })=>keywordIdx)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);
const getStaticProps = async (context)=>{
    const productIdx = Number(context.params?.id);
    try {
        // 2022/09/03 - 현재 상품 - by 1-blue
        const { data: { product  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].productService.apiGetProduct */ .Z.productService.apiGetProduct({
            productIdx
        });
        // 2022/09/03 - 현재 상품과 연관된 상품들 ( 같은 키워드를 가진 상품들 ) - by 1-blue
        const relatedProductsPromise = await _src_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].productService.apiGetRelatedProducts */ .Z.productService.apiGetRelatedProducts({
            limit,
            lastIdx: -1,
            productIdx,
            keywords: product.keywords.map(({ keywordIdx  })=>encodeURI(keywordIdx))
        });
        // 2022/09/07 - 현재 상품의 리뷰들 - by 1-blue
        const reviewsPromise = await _src_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].productService.apiGetReviews */ .Z.productService.apiGetReviews({
            limit,
            lastIdx: -1,
            productIdx
        });
        // 병렬 처리
        const [{ data: { products: relatedProducts  } ,  }, { data: { reviews  } ,  }, ] = await Promise.all([
            relatedProductsPromise,
            reviewsPromise
        ]);
        return {
            props: {
                product,
                relatedProducts,
                reviews
            }
        };
    } catch (error) {
        console.error("getStaticProps product/[id] >> ", error);
        return {
            props: {
                product: null,
                relatedProducts: [],
                reviews: []
            }
        };
    }
};
const getStaticPaths = async ()=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 129:
/***/ ((module) => {

module.exports = require("date-fns/locale/ko");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 983:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,4629,2483,9800,5797], () => (__webpack_exec__(6312)));
module.exports = __webpack_exports__;

})();