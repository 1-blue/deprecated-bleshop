"use strict";
(() => {
var exports = {};
exports.id = 3254;
exports.ids = [3254];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 5749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _src_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5638);

async function handler(req, res) {
    const { method  } = req;
    try {
        // lastIdx 기준으로 상품들 요청
        if (method === "GET") {
            const word = req.query.word;
            if (typeof word === "object") return res.status(418).json({
                keywords: [],
                message: "잘못된 데이터를 전달받았습니다."
            });
            const keywords = await _src_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].keyword.findMany */ .Z.keyword.findMany({
                where: {
                    keyword: {
                        contains: word
                    }
                },
                take: 10
            });
            res.status(200).json({
                keywords,
                message: "추천 검색 키워드들을 가져왔습니다."
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            keywords: [],
            message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!"
        });
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
var __webpack_exports__ = (__webpack_exec__(5749));
module.exports = __webpack_exports__;

})();