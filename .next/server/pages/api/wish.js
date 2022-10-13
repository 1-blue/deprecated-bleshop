"use strict";
(() => {
var exports = {};
exports.id = 7975;
exports.ids = [7975];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 8746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5638);


async function handler(req, res) {
    const { method  } = req;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    if (!session || !session.user) return res.status(403).json({
        isWish: false,
        message: "접근 권한이 없습니다."
    });
    const userIdx = session.user.idx;
    const productIdx = Number(req.query.productIdx) || Number(req.body.productIdx);
    try {
        const exProduct = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].product.findUnique */ .Z.product.findUnique({
            where: {
                idx: productIdx
            }
        });
        if (!exProduct) return res.status(404).json({
            message: "상품이 존재하지 않습니다."
        });
        const exWish = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].wish.findUnique */ .Z.wish.findUnique({
            where: {
                userIdx_productIdx: {
                    userIdx,
                    productIdx
                }
            }
        });
        // 로그인한 유저가 특정 상품에 찜하기 눌렀는지 여부
        if (method === "GET") {
            return res.status(200).json({
                isWish: !!exWish,
                message: "특정 상품에 찜하기를 눌렀는지 여부입니다."
            });
        } else if (method === "POST") {
            const { productIdx: productIdx1 , ...body } = req.body;
            if (exWish) return res.status(409).json({
                message: "이미 찜하기를 누른 상품입니다."
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].wish.create */ .Z.wish.create({
                data: {
                    productIdx: productIdx1,
                    userIdx,
                    ...body
                }
            });
            return res.status(201).json({
                message: "찜하기를 성공했습니다."
            });
        } else if (method === "DELETE") {
            if (!exWish) return res.status(409).json({
                message: "찜하기를 누르지 않은 상품입니다."
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].wish["delete"] */ .Z.wish["delete"]({
                where: {
                    userIdx_productIdx: {
                        productIdx,
                        userIdx
                    }
                }
            });
            return res.status(200).json({
                message: "찜취소하기를 성공했습니다."
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            isWish: false,
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
var __webpack_exports__ = (__webpack_exec__(8746));
module.exports = __webpack_exports__;

})();