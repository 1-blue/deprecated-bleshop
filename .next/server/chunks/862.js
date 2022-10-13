"use strict";
exports.id = 862;
exports.ids = [862];
exports.modules = {

/***/ 862:
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
/* harmony import */ var _src_components_common_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6193);
/* harmony import */ var _src_components_common_Photo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1304);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5842);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8201);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2483);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// component




// api


const SinglePhoto = ({ photoURL , setPhotoURL , name , register , kinds , errorMessage , disabled  })=>{
    // 2022/08/18 - photo ref 떼내기 - by 1-blue
    const photoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { ref , ...restRegister } = register;
    // 2022/08/18 - 이미지 선택 시 실행 - by 1-blue
    const onInputPhoto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (e)=>{
        if (!e.target.files) return;
        if (e.target.files?.length === 0) return;
        const file = e.target.files[0];
        const toastId = react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.loading("이미지를 업로드하는중입니다. 잠시 기다려주세요!");
        try {
            const { photoURL  } = await _src_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].photoService.apiCreatePhoto */ .Z.photoService.apiCreatePhoto({
                file,
                kinds
            });
            if (!photoURL) return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.update(toastId, {
                render: "이미지를 업로드하지 못했습니다. 다시 시도해주세요!",
                type: "warning",
                isLoading: false
            });
            setPhotoURL(photoURL);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.update(toastId, {
                render: "이미지를 업로드했습니다.",
                type: "success",
                isLoading: false,
                autoClose: 1500
            });
        } catch (error) {
            console.error("error >> ", error);
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
        setPhotoURL,
        kinds
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
                onChange: onInputPhoto
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-w-[200px] max-w-[600px] w-full h-60 xs:h-96 p-2 flex justify-center items-center bg-transparent border-dashed border-2 border-gray-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 rounded-md cursor-pointer transition-colors focus:outline-none focus:text-blue-600 focus:border-blue-600",
                onClick: ()=>photoRef.current?.click(),
                tabIndex: 0,
                children: photoURL === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    shape: "plus",
                    className: "w-8 h-8 xs:w-12 xs:h-12"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Photo__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    path: photoURL,
                    className: "h-full w-full",
                    alt: "대표 이미지",
                    contain: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                errorMessage: errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePhoto);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;