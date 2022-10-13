"use strict";
(() => {
var exports = {};
exports.id = 1357;
exports.ids = [1357];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _src_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5638);

async function handler(req, res) {
    const { method  } = req;
    try {
        // 모든 카테고리들 요청
        if (method === "GET") {
            try {
                const filters = await _src_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].filter.findMany */ .Z.filter.findMany();
                return res.status(200).json({
                    message: "모든 필터들을 가져왔습니다.",
                    filters
                });
            } catch (error) {
                console.error(error);
                return res.status(400).json({
                    message: "필터를 가져오는데 실패했습니다.",
                    filters: []
                });
            }
        }
    } catch (error1) {
        console.error("/api/filter >> ", error1);
    }
};


/***/ }),

/***/ 5638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(438));
module.exports = __webpack_exports__;

})();