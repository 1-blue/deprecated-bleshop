"use strict";
(() => {
var exports = {};
exports.id = 2021;
exports.ids = [2021];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6930:
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
        message: "접근 권한이 없습니다."
    });
    const userIdx = session.user.idx;
    try {
        // 장바구니에 상품 넣기
        if (method === "POST") {
            const { productIdx , ...body } = req.body;
            const exBasket = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].basket.findUnique */ .Z.basket.findUnique({
                where: {
                    userIdx_productIdx: {
                        productIdx: +productIdx,
                        userIdx
                    }
                }
            });
            if (exBasket) return res.status(409).json({
                message: "이미 장바구니에 존재하는 상품입니다."
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].basket.create */ .Z.basket.create({
                data: {
                    productIdx,
                    userIdx,
                    ...body
                }
            });
            return res.status(201).json({
                message: "해당 상품을 장바구니에 담았습니다."
            });
        } else if (method === "DELETE") {
            const productIdx1 = Number(req.query.productIdx);
            const exBasket1 = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].basket.findUnique */ .Z.basket.findUnique({
                where: {
                    userIdx_productIdx: {
                        userIdx,
                        productIdx: productIdx1
                    }
                }
            });
            if (!exBasket1) return res.status(409).json({
                message: "장바구니에 해당 상품이 존재하지 않습니다."
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].basket["delete"] */ .Z.basket["delete"]({
                where: {
                    userIdx_productIdx: {
                        productIdx: productIdx1,
                        userIdx
                    }
                }
            });
            return res.status(200).json({
                message: "해당 상품을 장바구니에서 제거했습니다."
            });
        } else if (method === "PUT") {
            const productIdx2 = Number(req.body.productIdx);
            const exBasket2 = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].basket.findUnique */ .Z.basket.findUnique({
                where: {
                    userIdx_productIdx: {
                        userIdx,
                        productIdx: productIdx2
                    }
                }
            });
            if (!exBasket2) return res.status(409).json({
                message: "장바구니에 해당 상품이 존재하지 않습니다."
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].basket.update */ .Z.basket.update({
                where: {
                    userIdx_productIdx: {
                        userIdx,
                        productIdx: productIdx2
                    }
                },
                data: {
                    ...req.body
                }
            });
            return res.status(200).json({
                message: "장바구니 상품의 데이터를 수정했습니다."
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
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
var __webpack_exports__ = (__webpack_exec__(6930));
module.exports = __webpack_exports__;

})();