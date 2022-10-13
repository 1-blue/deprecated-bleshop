"use strict";
exports.id = 1423;
exports.ids = [1423];
exports.modules = {

/***/ 1423:
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _src_components_common_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6193);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1304);
/* harmony import */ var _src_components_common_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5129);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5842);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8201);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2483);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9923);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// component





// api

// util


const MultiplePhoto = ({ photoURLs , setPhotoURLs , name , register , kinds , placeholder , errorMessage , disabled  })=>{
    // 2022/08/18 - photo ref 떼내기 - by 1-blue
    const photoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { ref , ...restRegister } = register;
    // 2022/08/18 - 추가 이미지들 선택 시 실행 - by 1-blue
    const onInputPhotos = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (e)=>{
        if (!e.target.files) return;
        if (e.target.files?.length === 0) return;
        if (photoURLs.length + e.target.files.length >= 9) return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("이미지는 최대 8개까지 등록할 수 있습니다.");
        const files = e.target.files;
        const toastId = react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.loading("이미지들을 업로드하는중입니다. 잠시 기다려주세요!");
        try {
            const response = await _src_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].photoService.apiCreatePhotos */ .Z.photoService.apiCreatePhotos({
                files,
                kinds
            });
            if (response.length === 0) return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.update(toastId, {
                render: "이미지들을 업로드하지 못했습니다. 다시 시도해주세요!",
                type: "warning",
                isLoading: false
            });
            // 생성된 이미지만 필터링
            const filteredPhotoURLs = response.map(({ photoURL  })=>photoURL).filter((photoURL)=>typeof photoURL === "string");
            setPhotoURLs((prev)=>[
                    ...prev,
                    ...filteredPhotoURLs
                ]);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.update(toastId, {
                render: "이미지들을 업로드했습니다.",
                type: "success",
                isLoading: false,
                autoClose: 1500
            });
        } catch (error) {
            console.error(error);
            if (error instanceof axios__WEBPACK_IMPORTED_MODULE_3__.AxiosError) {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.update(toastId, {
                    render: error.response?.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.update(toastId, {
                    render: "알 수 없는 에러가 발생했습니다.",
                    type: "error",
                    isLoading: false,
                    autoClose: 1500
                });
            }
        }
    }, [
        setPhotoURLs,
        photoURLs,
        kinds
    ]);
    // 2022/08/19 - 추가 이미지중에 현재 선택한 이미지 번호 - by 1-blue
    const { 0: currentDot , 1: setCurrentDot  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // 2022/08/19 - 추가 이미지 제거 시 실행 - by 1-blue
    const onDeletePhoto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        let name = "";
        // 브라우저에서 제거
        setPhotoURLs((prev)=>prev.filter((v, i)=>{
                if (i !== currentDot) return true;
                name = v;
                return false;
            }));
        // s3에서 제거
        _src_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].photoService.apiDeletePhoto */ .Z.photoService.apiDeletePhoto({
            name
        });
    }, [
        currentDot,
        setPhotoURLs
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                name: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                type: "file",
                accept: "image/*",
                ...restRegister,
                ref: (e)=>{
                    ref(e);
                    photoRef.current = e;
                },
                disabled: disabled,
                hidden: true,
                onChange: onInputPhotos,
                multiple: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>photoURLs.length === 0 && photoRef.current?.click(),
                className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_6__/* .combineClassNames */ .Nn)("min-w-[200px] max-w-[600px] w-full h-full min-h-[200px] xs:min-h-[300px] md:min-h-[400px] p-2 flex justify-center items-center bg-transparent border-2 border-dashed border-gray-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 rounded-md transition-colors focus:outline-none focus:border-blue-600 focus:text-blue-600", photoURLs.length === 0 ? "cursor-pointer" : ""),
                tabIndex: 0,
                children: photoURLs.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    shape: "plus",
                    className: "w-12 h-12"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    currentDot: currentDot,
                    setCurrentDot: setCurrentDot,
                    className: "min-w-[200px] max-w-[600px]",
                    children: photoURLs.map((photoURL)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "absolute top-[6px] right-[6px] z-[1]",
                                    onClick: onDeletePhoto,
                                    tabIndex: -1,
                                    children: "❌"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    path: photoURL,
                                    className: "w-full h-[200px] xs:h-[300px] md:h-[400px]",
                                    alt: placeholder || "이미지",
                                    contain: true
                                })
                            ]
                        }, photoURL))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                errorMessage: errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiplePhoto);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;