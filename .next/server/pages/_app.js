(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 9254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/libs/utils.ts
var utils = __webpack_require__(9923);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useScrollDirection.tsx

// util

/**
 * 마지막 스크롤링의 방향을 알아내는 훅
 * @param waitTime 쓰로틀링에 적용할 시간 입력
 * @returns [스크롤 방향, 스크롤 최하단 여부, 현재 스크롤 위치] 순서로 반환 ( boolean, boolean, number )
 */ const useScrollDirection = (waitTime)=>{
    // 2022/08/09 - 마지막 스크롤 방향 - by 1-blue
    const { 0: isUp , 1: setIsUp  } = (0,external_react_.useState)(false);
    // 2022/08/09 - 현재 스크롤 위치값 저장할 변수 - by 1-blue
    const { 0: pageY , 1: setPageY  } = (0,external_react_.useState)(0);
    // 2022/08/09 - 현재 스크롤이 최하단에 있는지 판단할 변수 - by 1-blue
    const { 0: isBottom , 1: setIsBottom  } = (0,external_react_.useState)(false);
    // 2022/08/09 - 현재 스크롤 방향을 확인할 스크롤 이벤트 함수 - by 1-blue
    const handleScroll = (0,external_react_.useCallback)(()=>{
        /**
     * scrollHeight: 총 컨텐츠 높이
     * clientHeight: 현재 보이는 높이 ( 현재 화면(컨텐츠)의 높이 )
     * scrollY: 현재 스크롤 높이
     *
     * 따라서 "총 컨텐츠 높이 === 현재 보이는 높이 + 현재 스크롤 높이" 라면 최하단까지 스크롤을 내린 것
     */ const { scrollY , document: { documentElement: { scrollHeight , clientHeight  } ,  } ,  } = window;
        const deltaY = scrollY - pageY;
        const isUp = scrollY !== 0 && deltaY >= 0;
        const isBottom = scrollHeight - scrollY - clientHeight === 0;
        setIsUp(isUp);
        setPageY(scrollY);
        setIsBottom(isBottom);
    }, [
        pageY,
        setIsUp,
        setPageY,
        setIsBottom
    ]);
    // 2022/08/09 - 스크롤 이벤트에 스로틀링 적용 - by 1-blue
    const throttleScroll = (0,utils/* throttleHelper */.NC)(handleScroll, waitTime);
    // 2022/08/09 - 스크롤 이벤트 등록 - by 1-blue
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", throttleScroll);
        return ()=>document.removeEventListener("scroll", throttleScroll);
    }, [
        throttleScroll
    ]);
    return [
        isUp,
        isBottom,
        pageY
    ];
};
/* harmony default export */ const hooks_useScrollDirection = (useScrollDirection);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/common/Icon.tsx
var Icon = __webpack_require__(6193);
;// CONCATENATED MODULE: ./src/components/Layout/MenuAnchor.tsx



// util

// components

const MenuAnchor = ({ shape , name , url  })=>{
    const { asPath  } = (0,router_.useRouter)();
    const isMatch = url.length > 0 && asPath.includes(url) || url === "" && asPath === "/";
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "flex-1",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/${url}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: (0,utils/* combineClassNames */.Nn)("py-2 flex flex-col items-center transition-colors hover:text-white hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:text-white", isMatch ? " text-blue-500" : "text-gray-500"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon["default"], {
                        shape: shape,
                        className: "w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6",
                        fill: isMatch
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-[8px] xs:text-xs",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: name
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Layout_MenuAnchor = (MenuAnchor);

;// CONCATENATED MODULE: ./src/components/Layout/NavBar.tsx
// util


// hook

// component

const NavBar = ()=>{
    const [hide, isBottom] = hooks_useScrollDirection(50);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: (0,utils/* combineClassNames */.Nn)("fixed bottom-0 flex justify-between border-t border-gray-400 max-w-[1024px] w-full bg-gray-50 transition-transform duration-300 z-[9]", hide ? "translate-y-[57px]" : "translate-y-0", isBottom ? "translate-y-0" : ""),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_MenuAnchor, {
                shape: "search",
                name: "검색",
                url: "search"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_MenuAnchor, {
                shape: "home",
                name: "홈",
                url: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_MenuAnchor, {
                shape: "user",
                name: "내 정보",
                url: "information"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_MenuAnchor, {
                shape: "basket",
                name: "장바구니",
                url: "basket"
            })
        ]
    });
};
/* harmony default export */ const Layout_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/components/Layout/ScrollProgress.tsx


const ScrollProgress = ()=>{
    const { 0: currentPositionY , 1: setCurrentPositionY  } = (0,external_react_.useState)(0);
    // 2022/08/10 - 현재 스크롤 Y값 %로 구하기 - by 1-blue
    const scrollEvent = (0,external_react_.useCallback)(()=>{
        setCurrentPositionY(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
    }, []);
    // 2022/08/10 - 스크롤 이벤트 등록 - by 1-blue
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", scrollEvent);
        return ()=>window.removeEventListener("scroll", scrollEvent);
    }, [
        scrollEvent
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: "absolute top-0 max-w-[1024px] h-[6px] shadow-lg m-0 bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400",
        style: {
            width: currentPositionY * 100 + "%"
        }
    });
};
/* harmony default export */ const Layout_ScrollProgress = (ScrollProgress);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/components/Layout/ToTopButton.tsx
// util


// component

const ToTopButton = ({ showCondition  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: (0,utils/* combineClassNames */.Nn)("rounded-full bg-white border border-gray-300 shadow-md p-2 flex flex-col items-center  hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:text-blue-600 focus:border-blue-600 transition-all duration-500", showCondition),
        onClick: ()=>window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon["default"], {
                shape: "doubleUp",
                className: "w-5 h-5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-[8px]",
                children: "맨위로"
            })
        ]
    });
};
/* harmony default export */ const Layout_ToTopButton = (ToTopButton);

;// CONCATENATED MODULE: ./src/components/Layout/ToCreateProductButton.tsx


// component

const ToCreateProductButton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/product/upload",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "rounded-full bg-white border border-gray-300 shadow-md p-2 flex flex-col items-center hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:text-blue-600 focus:border-blue-600 transition-all duration-500",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Icon["default"], {
                    shape: "plus",
                    className: "w-5 h-5"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-[8px]",
                    children: "상품등록"
                })
            ]
        })
    });
};
/* harmony default export */ const Layout_ToCreateProductButton = (ToCreateProductButton);

;// CONCATENATED MODULE: ./src/components/Layout/ASide.tsx



// util

// hook

// component


const ASide = ()=>{
    const { data  } = (0,react_.useSession)();
    // 2022/08/10 - 현재 가로 길이 - by 1-blue
    const { 0: screenWidth , 1: setScreenWidth  } = (0,external_react_.useState)(0);
    // 2022/08/10 - 리사이즈일 경우 실행할 이벤트 함수 - by 1-blue
    const handleResize = (0,external_react_.useCallback)(()=>setScreenWidth(window.innerWidth), []);
    // 2022/08/10 - 쓰로틀링적용한 이벤트 함수 - by 1-blue
    const throttleResize = (0,utils/* throttleHelper */.NC)(handleResize, 100);
    // 2022/08/10 - 리사이즈 이벤트 등록 - by 1-blue
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", throttleResize);
        return ()=>window.removeEventListener("resize", throttleResize);
    }, [
        throttleResize
    ]);
    // 2022/08/10 - 가로 길이, 스크롤 방향에 의해서 버튼 위치 결정 조건 - by 1-blue
    const [isUp, isBottom, pageY] = hooks_useScrollDirection(50);
    const locationCondition = screenWidth >= 1150 ? "bottom-2" : isBottom ? "bottom-[64px]" : isUp ? "bottom-2" : "bottom-[64px]";
    const showCondition = pageY < 100 ? "opacity-0" : "opacity-75";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (0,utils/* combineClassNames */.Nn)("fixed bottom-2 right-2 flex transition-all duration-500 space-x-2 z-[9]", locationCondition),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_ToTopButton, {
                showCondition: showCondition
            }),
            (data?.user?.role === "ADMIN" || data?.user?.role === "SELLER") && /*#__PURE__*/ jsx_runtime_.jsx(Layout_ToCreateProductButton, {})
        ]
    });
};
/* harmony default export */ const Layout_ASide = (ASide);

;// CONCATENATED MODULE: ./src/components/Layout/index.tsx
// component




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "sticky top-0 z-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_ScrollProgress, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "px-4",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "bg-gray-200",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_NavBar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_ASide, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9254);
/* harmony import */ var _src_components_common_MyLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// css



// component


function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Suspense), {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_MyLoading__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                        position: "top-center",
                        autoClose: 1000,
                        theme: "dark",
                        closeOnClick: true,
                        hideProgressBar: true,
                        limit: 3
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9159,910,2952,1664,4629,6193,3654], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();