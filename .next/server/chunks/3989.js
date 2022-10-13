"use strict";
exports.id = 3989;
exports.ids = [3989];
exports.modules = {

/***/ 3989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9923);


// util

const Modal = ({ children , onCloseModal , title , className  })=>{
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (modalRef.current === e.target) onCloseModal();
    }, [
        modalRef,
        onCloseModal
    ]);
    // 2022/08/14 - 영역 외 클릭시 메뉴 닫는 이벤트 등록 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("click", closeModal);
        return ()=>window.removeEventListener("click", closeModal);
    }, [
        closeModal
    ]);
    // 2022/09/10 - 모달 열려있으면 외부 스크롤 금지 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "auto";
            return;
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
        className: "fixed top-0 left-0 bg-black/60 w-full h-full animate-fade-in z-[10]",
        ref: modalRef,
        style: {
            margin: 0
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
            className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .combineClassNames */ .Nn)("absolute top-1/2 left-1/2 w-2/3 rounded-md bg-white -translate-x-1/2 -translate-y-1/2 overflow-y-auto", className ? className : ""),
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-base sm:text-xl md:text-2xl text-center text-white font-bolder py-2 xs:py-3 bg-blue-400",
                    children: title
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ })

};
;