"use strict";
(() => {
var exports = {};
exports.id = 2514;
exports.ids = [2514];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9336:
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5638);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4995);


// util

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
        // 리뷰 생성
        if (method === "POST") {
            const productIdx = Number(req.body.productIdx);
            const exProduct = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].product.findUnique */ .Z.product.findUnique({
                where: {
                    idx: productIdx
                }
            });
            if (!exProduct) return res.status(404).json({
                message: "상품이 존재하지 않습니다."
            });
            const { contents , score , photos , orderIdx  } = req.body;
            // aws 이미지 사용 확적으로 위치 이동
            const photosPromise = photos.map((photo)=>(0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .movePhoto */ .R8)(photo, "review"));
            // 리뷰 생성
            const reviewPromise = _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].review.create */ .Z.review.create({
                data: {
                    contents,
                    score: +score,
                    productIdx,
                    userIdx,
                    photos: {
                        createMany: {
                            data: photos.map((photo)=>({
                                    path: photo.replace("/temporary", "")
                                }))
                        }
                    }
                }
            });
            // 해당 주문에 대해 리뷰 작성으로 변경
            const orderPromise = _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].productsOnOrders.update */ .Z.productsOnOrders.update({
                where: {
                    productIdx_orderIdx: {
                        productIdx,
                        orderIdx: +orderIdx
                    }
                },
                data: {
                    isReview: true
                }
            });
            await Promise.allSettled([
                ...photosPromise,
                reviewPromise,
                orderPromise
            ]);
            return res.status(201).json({
                message: "리뷰를 생성했습니다. \n리뷰를 작성한 상품 페이지로 이동됩니다."
            });
        } else if (method === "DELETE") {
            const reviewIdx = Number(req.query.reviewIdx);
            const exReview = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].review.findUnique */ .Z.review.findUnique({
                where: {
                    idx: reviewIdx
                },
                include: {
                    photos: {
                        select: {
                            path: true
                        }
                    }
                }
            });
            if (!exReview) return res.status(404).json({
                message: "존재하지 않는 리뷰입니다."
            });
            // aws 이미지 제거
            const photosPromise1 = exReview.photos.map(({ path  })=>(0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .movePhoto */ .R8)(path, "remove"));
            await Promise.allSettled(photosPromise1);
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].review["delete"] */ .Z.review["delete"]({
                where: {
                    idx: reviewIdx
                }
            });
            return res.status(200).json({
                message: "리뷰를 제거했습니다."
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
var __webpack_exports__ = __webpack_require__.X(0, [4995], () => (__webpack_exec__(1963)));
module.exports = __webpack_exports__;

})();