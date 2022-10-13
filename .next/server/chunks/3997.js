"use strict";
exports.id = 3997;
exports.ids = [3997,1887];
exports.modules = {

/***/ 3997:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9137);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2483);
/* harmony import */ var _src_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(362);
/* harmony import */ var _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3300);
/* harmony import */ var _src_components_common_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// api

// hook

// component


const SearchBar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { register , handleSubmit , watch , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        defaultValues: {
            searchWord: typeof router.query.searchWord === "string" ? router.query.searchWord : ""
        }
    });
    // 2022/08/23 - 현재 검색창에 입력한 단어 - by 1-blue
    const searchWord = watch("searchWord");
    // 2022/08/23 - 검색 디바운스 적용할때 사용할 값 - by 1-blue
    const [debounce] = (0,_src_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        value: searchWord,
        time: 300
    });
    // 2022/08/27 - 추천 검색어들 - by 1-blue
    const { 0: keywords , 1: setKeywords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // 2022/08/23 - 디바운싱 적용한 추천 검색어 요청 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!debounce) return;
        (async ()=>{
            const { data: { keywords  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"].keywordService.apiGetKeywords */ .Z.keywordService.apiGetKeywords({
                word: searchWord
            });
            setKeywords(keywords);
        })();
    }, [
        searchWord,
        debounce
    ]);
    // 2022/08/23 - 검색창 포커스 여부 - by 1-blue
    const { 0: isFocus , 1: setIsFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // 2022/08/23 - 검색창과 추천 검색어를 모두 포함하는 태그 - by 1-blue
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // 2022/08/23 - 영역외 클릭 시 추천 키워드 창 닫기 - by 1-blue
    const handleCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (!isFocus) return;
        if (!(e.target instanceof Node)) return;
        if (wrapperRef.current && wrapperRef.current.contains(e.target)) return;
        setIsFocus(false);
    }, [
        isFocus,
        setIsFocus,
        wrapperRef
    ]);
    // 2022/08/23 - 추천 키워드 창 닫기 이벤트 등록 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>window.addEventListener("click", handleCloseModal), 0);
        return ()=>window.removeEventListener("click", handleCloseModal);
    }, [
        handleCloseModal
    ]);
    // 2022/08/23 - 특정 키워드를 가진 상품들 검색 - by 1-blue
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ searchWord  })=>router.push(`/search?searchWord=${searchWord}`), [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "flex flex-col justify-center",
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex flex-col items-center w-full",
                ref: wrapperRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Tool__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Input */ .Z.Input, {
                        type: "search",
                        name: "검색어",
                        placeholder: "검색어를 입력해주세요.",
                        register: register("searchWord", {
                            required: "검색어를 입력해주세요!"
                        }),
                        hiddenLabel: true,
                        hiddenMessage: true,
                        className: "min-w-full max-w-full",
                        onFocus: ()=>setIsFocus(true)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "absolute top-0 right-0 p-[10px] xs:p-[12px] md:p-[10px] bg-blue-400 text-white rounded-r-sm hover:bg-blue-500 focus:outline-none focus:bg-blue-500",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            shape: "search",
                            className: "w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-full z-[3]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "absolute top-0 left-0 w-full bg-gray-200 rounded-b-md",
                    children: isFocus && keywords.map(({ keyword  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/search?searchWord=${keyword}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "inline-block w-full px-4 py-2 text-[8px] xs:text-sm sm:text-base hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition-colors",
                                    onBlur: ()=>i === keywords.length - 1 ? setIsFocus(false) : null,
                                    onClick: ()=>setValue("searchWord", keyword),
                                    children: keyword
                                })
                            })
                        }, keyword))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

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

/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 2022/08/23 - "value"가 변하고 "time"이 지난 이후에 실행 가능 여부 반환 - by 1-blue
 * @param props "value", "time" 감시할 값과 기다릴 시간
 * @returns 재실행 가능 여부 반환
 */ const useDebounce = ({ value , time  })=>{
    const { 0: debounce , 1: setDebounce  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // 2022/08/23 - 디바운스 적용할 때 사용하는 함수 - by 1-blue
    const debounceKeyword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setDebounce(true), [
        setDebounce
    ]);
    // 2022/08/23 - 디바운스 적용 - by 1-blue
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timerId = setTimeout(debounceKeyword, time);
        return ()=>{
            clearTimeout(timerId);
            setDebounce(false);
        };
    }, [
        debounceKeyword,
        time,
        setDebounce,
        value
    ]);
    return [
        debounce
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounce);


/***/ })

};
;