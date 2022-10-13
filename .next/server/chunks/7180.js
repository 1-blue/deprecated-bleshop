"use strict";
exports.id = 7180;
exports.ids = [7180];
exports.modules = {

/***/ 7180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9800);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9923);



// state

// util

const CategorySelector = ()=>{
    // 2022/08/22 - 등록된 모든 카테고리들 - by 1-blue
    const categories = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_states__WEBPACK_IMPORTED_MODULE_3__/* ["default"].categoryService.categoriesState */ .Z.categoryService.categoriesState);
    // 2022/08/24 - 현재 선택한 카테고리 - by 1-blue
    const [selectedCategory, setSelectedCategory] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_3__/* ["default"].categoryService.selectedCategoryState */ .Z.categoryService.selectedCategoryState);
    // 2022/08/24 - 카테고리 클릭 이벤트 함수 - by 1-blue
    const onClickCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((category)=>()=>setSelectedCategory((prev)=>prev === category ? null : category), [
        setSelectedCategory
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "flex flex-wrap space-x-2",
        children: categories.map(({ category  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "first:self-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: (0,_src_libs__WEBPACK_IMPORTED_MODULE_4__/* .combineClassNames */ .Nn)("py-1 px-2 shrink-1 bg-gray-400 text-white font-bolder text-xs hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 transition-colors", selectedCategory === category ? "bg-blue-400" : ""),
                    onClick: onClickCategory(category),
                    children: category
                })
            }, category))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySelector);


/***/ })

};
;