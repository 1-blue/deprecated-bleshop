"use strict";
exports.id = 7261;
exports.ids = [7261,1887];
exports.modules = {

/***/ 7261:
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
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2483);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9800);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9923);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5797);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1304);
/* harmony import */ var _src_components_common_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6193);
/* harmony import */ var _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3300);
/* harmony import */ var _src_components_common_Support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(695);
/* harmony import */ var _src_components_common_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3989);
/* harmony import */ var _src_components_common_Carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__]);
_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// api

// state

// util

// component






const limit = 15;
const Reviews = ({ productIdx  })=>{
    // 2022/09/07 - 현재 상품의 리뷰들 - by 1-blue
    const [reviews, setReviews] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_3__/* ["default"].reviewService.reviewsState */ .Z.reviewService.reviewsState);
    // 2022/09/07 - 마지막 리뷰의 식별자 - by 1-blue
    const lastReviewIdx = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_states__WEBPACK_IMPORTED_MODULE_3__/* ["default"].reviewService.reviewsLastIdxState */ .Z.reviewService.reviewsLastIdxState);
    // 2022/09/07 - 리뷰 추가 패치 - by 1-blue
    const onFetchReview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        try {
            const { data: { reviews  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].productService.apiGetReviews */ .Z.productService.apiGetReviews({
                lastIdx: lastReviewIdx,
                limit,
                productIdx
            });
            setReviews((prev)=>[
                    ...prev,
                    ...reviews
                ]);
        } catch (error) {
            console.error(error);
        }
    }, [
        lastReviewIdx,
        productIdx,
        setReviews
    ]);
    // 2022/09/08 - 리뷰의 이미지들 자세히 보기 모달 - by 1-blue
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // 2022/09/08 - 모달에서 보여줄 이미지들 - by 1-blue
    const { 0: targetPhotos , 1: setTargetPhotos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // 2022/09/08 - 모달에서 보여줄 이미지들중에 보여지는 이미지 번호 - by 1-blue
    const { 0: currentDot , 1: setCurrentDot  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    if (reviews.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Error */ .Z.Error, {
        text: "** 등록된 리뷰가 없습니다. **"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [
            reviews.map((review, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex space-x-2 mb-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    path: review.User.photo,
                                    className: "w-16 h-16 sm:w-20 sm:h-20 cursor-pointer",
                                    alt: "유저 이미지",
                                    cover: true,
                                    avatar: true
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm sm:text-base font-bold",
                                            children: review.User.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex",
                                            children: Array(5).fill(null).map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                    shape: "star",
                                                    fill: true,
                                                    className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_8__/* .combineClassNames */ .Nn)("w-5 h-5 sm:w-6 sm:h-6", review.score >= i + 1 ? "text-yellow-400" : "text-gray-400")
                                                }, i + 1))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                            className: "text-[8px] sm:text-xs text-gray-400",
                                            children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_9__/* .dateOrTimeFormat */ .ie)(review.updatedAt, "YYYY-MM<-DD")
                                        })
                                    ]
                                })
                            ]
                        }),
                        review.photos.length >= 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex space-x-1 mb-2 cursor-pointer focus:outline-blue-400 focus:outline-offset-2",
                            onClick: ()=>{
                                setTargetPhotos(review.photos.map((photo)=>photo.path));
                                setShowModal(true);
                            },
                            tabIndex: 0,
                            children: review.photos.map((photo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        path: photo.path,
                                        className: "w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16",
                                        alt: "상품 대표 이미지",
                                        cover: true
                                    })
                                }, photo.path))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm sm:text-base whitespace-pre-wrap",
                            children: review.contents
                        }),
                        reviews.length - 1 !== i && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "my-4 border-2"
                        })
                    ]
                }, review.idx)),
            showModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                onCloseModal: ()=>setShowModal(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Carousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    currentDot: currentDot,
                    setCurrentDot: setCurrentDot,
                    className: "overflow-hidden",
                    children: targetPhotos.map((photo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            path: photo,
                            className: "w-full h-[30vh] xs:h-[40vh] sm:h-[60vh] md:h-[80vh]",
                            alt: "리뷰 이미지",
                            contain: true
                        }, photo))
                })
            }),
            reviews.length % 2 === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Button */ .Z.Button, {
                type: "button",
                text: "리뷰 더 불러오기",
                primary: true,
                onClick: onFetchReview,
                className: "w-full mt-6"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

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