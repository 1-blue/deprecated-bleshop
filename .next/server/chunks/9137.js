"use strict";
exports.id = 9137;
exports.ids = [9137,1887];
exports.modules = {

/***/ 2858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2483);
/* harmony import */ var _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3300);
/* harmony import */ var _src_components_common_StarRating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1323);
/* harmony import */ var _src_components_common_Support__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(695);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// api

// component



// tpye

const ReviewForm = ({ productIdx , orderIdx  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { register , handleSubmit , formState: { errors  } , getValues , setValue , watch ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        defaultValues: {
            score: 1
        }
    });
    // 2022/09/07 - 리뷰 이미지들 - by 1-blue
    const { 0: photoURLs , 1: setPhotoURLs  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    // 2022/09/07 - 리뷰 등록 - by 1-blue
    const onCreateReview = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ({ contents , score  })=>{
        const toastId = react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.loading("이미지들을 업로드하는중입니다. 잠시 기다려주세요!");
        try {
            const { data: { message  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"].reviewService.apiCreateReview */ .Z.reviewService.apiCreateReview({
                contents,
                photos: photoURLs,
                score,
                productIdx,
                orderIdx
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.update(toastId, {
                render: message,
                type: "success",
                isLoading: false,
                autoClose: 1500
            });
            router.push(`/product/${productIdx}`);
        } catch (error) {
            console.error(error);
            if (error instanceof axios__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.update(toastId, {
                    render: error.response?.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.update(toastId, {
                    render: "알 수 없는 에러가 발생했습니다.",
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            }
        }
    }, [
        photoURLs,
        productIdx,
        orderIdx,
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Form */ .Z.Form, {
        onSubmit: handleSubmit(onCreateReview),
        className: "self-center bg-white rounded-md shadow-2xl overflow-hidden min-w-[250px] max-w-[700px] p-8 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_8__/* ["default"].SubTitle */ .Z.SubTitle, {
                text: "별점 등록"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_StarRating__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                score: watch("score"),
                setScore: setValue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Textarea */ .Z.Textarea, {
                name: "리뷰 작성",
                register: register("contents", {
                    required: {
                        message: "리뷰를 입력해주세요!",
                        value: true
                    },
                    maxLength: {
                        message: "500자 이내로 입력해주세요!" + `( ${getValues("contents") ? getValues("contents").length : 0}/500 )`,
                        value: 500
                    }
                }),
                errorMessage: errors.contents?.message,
                placeholder: "상품에 대한 솔직한 리뷰를 남겨주세요. ( 최소 10자, 최대 500자 )"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__/* ["default"].MultiplePhoto */ .Z.MultiplePhoto, {
                photoURLs: photoURLs,
                setPhotoURLs: setPhotoURLs,
                name: "리뷰 이미지들 등록",
                register: register("photos"),
                kinds: "review",
                placeholder: "리뷰 이미지들"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Button */ .Z.Button, {
                text: "리뷰 등록",
                type: "submit",
                primary: true,
                className: "mt-8 min-w-[200px] w-full"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_common_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6193);


// component

const arr = Array(5).fill(null).map((_, i)=>i + 1);
const StarRating = ({ score , setScore  })=>{
    // 2022/09/07 - 별 클릭 ( 점수 변경 ) - by 1-blue
    const onClickStar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        const target = e.target;
        if (!target.dataset.score) return;
        setScore("score", +target.dataset.score);
    }, [
        setScore
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "flex space-x-1",
        onClick: onClickStar,
        children: arr.map((v)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                tabIndex: -1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    shape: "star",
                    className: "w-6 h-6 xs:w-8 xs:h-8 text-yellow-400",
                    fill: score >= v,
                    score: v
                })
            }, v))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);


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