"use strict";
(() => {
var exports = {};
exports.id = 1837;
exports.ids = [1837];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _src_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5638);

async function handler(req, res) {
    const { method  } = req;
    const productIdx = Number(req.query.productIdx) || Number(req.body.productIdx);
    try {
        const exProduct = await _src_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].product.findUnique */ .Z.product.findUnique({
            where: {
                idx: productIdx
            }
        });
        if (!exProduct) return res.status(404).json({
            reviews: [],
            message: "상품이 존재하지 않습니다."
        });
        // 특정 상품의 리뷰들 요청
        if (method === "GET") {
            const limit = Number(req.query.limit);
            const lastIdx = Number(req.query.lastIdx);
            const reviews = await _src_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].review.findMany */ .Z.review.findMany({
                where: {
                    productIdx
                },
                take: limit,
                skip: lastIdx === -1 ? 0 : 1,
                ...lastIdx !== -1 && {
                    cursor: {
                        idx: lastIdx
                    }
                },
                orderBy: {
                    updatedAt: "desc"
                },
                include: {
                    photos: {
                        select: {
                            path: true
                        }
                    },
                    User: {
                        select: {
                            name: true,
                            photo: true
                        }
                    }
                }
            });
            return res.status(200).json({
                reviews,
                message: "특정 상품의 리뷰들을 가져왔습니다."
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            reviews: [],
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7790));
module.exports = __webpack_exports__;

})();