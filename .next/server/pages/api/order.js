"use strict";
(() => {
var exports = {};
exports.id = 8626;
exports.ids = [8626];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 8720:
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
        // 모든 주문 내역 요청
        if (method === "GET") {
            const orderList = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].order.findMany */ .Z.order.findMany({
                where: {
                    userIdx
                },
                include: {
                    products: {
                        include: {
                            product: {
                                select: {
                                    name: true,
                                    photo: true,
                                    price: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    updatedAt: "desc"
                }
            });
            return res.status(200).json({
                orderList,
                message: "모든 주문 내역을 가져왔습니다."
            });
        } else if (method === "POST") {
            const { orderData , singleData  } = req.body;
            const createdOrder = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].order.create */ .Z.order.create({
                data: {
                    ...orderData,
                    userIdx
                }
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].productsOnOrders.createMany */ .Z.productsOnOrders.createMany({
                data: singleData.map((data)=>({
                        ...data,
                        orderIdx: createdOrder.idx
                    }))
            });
            // 주문한 상품은 장바구니에서 제거
            _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].basket.deleteMany */ .Z.basket.deleteMany({
                where: {
                    productIdx: {
                        in: singleData.map((v)=>v.productIdx)
                    }
                }
            }).then();
            return res.status(201).json({
                message: "결제를 완료했습니다."
            });
        } else if (method === "DELETE") {
            const orderIdx = Number(req.query.orderIdx);
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].productsOnOrders.deleteMany */ .Z.productsOnOrders.deleteMany({
                where: {
                    orderIdx
                }
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].order["delete"] */ .Z.order["delete"]({
                where: {
                    idx: orderIdx
                }
            });
            return res.status(200).json({
                message: "특정 주문내역을 삭제했습니다.\n새로고침해주세요!"
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
var __webpack_exports__ = (__webpack_exec__(8720));
module.exports = __webpack_exports__;

})();