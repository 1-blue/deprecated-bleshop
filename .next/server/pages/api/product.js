"use strict";
(() => {
var exports = {};
exports.id = 2759;
exports.ids = [2759];
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

/***/ 4035:
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
    try {
        // 특정 상품 상세 정보 요청
        if (method === "GET") {
            const productIdx = Number(req.query.productIdx);
            const product = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].product.findUnique */ .Z.product.findUnique({
                where: {
                    idx: productIdx
                },
                include: {
                    photos: true,
                    keywords: true
                }
            });
            if (!product) return res.status(404).json({
                message: "찾는 상품이 존재하지 않습니다."
            });
            return res.status(200).json({
                product,
                message: "특정 상품에 대한 데이터입니다."
            });
        } else if (method === "POST") {
            if (!session || !session.user) return res.status(403).json({
                message: "접근 권한이 없습니다."
            });
            const userIdx = session.user.idx;
            const { name , category , description , information: { brand , company , period , price  } , option: { color , size  } , photo , photos , keywords , filters ,  } = req.body;
            // "string[]"이 아니라면
            if (!Array.isArray(photos) || !Array.isArray(keywords) || !Array.isArray(filters)) return res.status(418).json({
                message: "잘못된 데이터를 전달받았습니다."
            });
            // 상품 이미지들 확정으로 위치 이동
            const photoPromise = (0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .movePhoto */ .R8)(photo, "product");
            const photosPromise = photos.map((photo)=>(0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .movePhoto */ .R8)(photo, "product"));
            await Promise.allSettled([
                photoPromise,
                ...photosPromise
            ]);
            // 상품 생성
            const productPromise = _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].product.create */ .Z.product.create({
                data: {
                    name,
                    price: +price,
                    description,
                    brand,
                    company,
                    period,
                    color,
                    size,
                    photo: photo.replace("/temporary", ""),
                    photos: {
                        createMany: {
                            data: photos.map((photo)=>({
                                    path: photo.replace("/temporary", "")
                                }))
                        }
                    },
                    User: {
                        connect: {
                            idx: userIdx
                        }
                    }
                }
            });
            // 키워드 생성
            const keywordPromise = _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].keyword.createMany */ .Z.keyword.createMany({
                data: keywords.map((keyword)=>({
                        keyword
                    })),
                skipDuplicates: true
            });
            // 필터 생성
            const filterPromise = _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].filter.createMany */ .Z.filter.createMany({
                data: filters.map((filter)=>({
                        filter
                    })),
                skipDuplicates: true
            });
            // 상품/키워드/필터 생성 병렬 처리
            const [createdProductResult] = await Promise.allSettled([
                productPromise,
                keywordPromise,
                filterPromise, 
            ]);
            // 상품 생성 오류
            if (createdProductResult.status === "rejected") {
                console.log(createdProductResult);
                return res.status(418).json({
                    message: "서버측에서 오류가 발생했습니다. 잠시후에 다시 시도해주세요!"
                });
            }
            // 상품 - 카테고리, 상품 - 키워드들, 상품 - 필터들 연결
            const createdProduct = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].product.update */ .Z.product.update({
                where: {
                    idx: createdProductResult.value.idx
                },
                data: {
                    categories: {
                        create: {
                            categoryIdx: category
                        }
                    },
                    keywords: {
                        createMany: {
                            data: keywords.map((keyword)=>({
                                    keywordIdx: keyword
                                })),
                            skipDuplicates: true
                        }
                    },
                    filters: {
                        createMany: {
                            data: filters.map((filter)=>({
                                    filterIdx: filter
                                })),
                            skipDuplicates: true
                        }
                    }
                }
            });
            return res.status(201).json({
                message: "상품을 등록했습니다.",
                productIdx: createdProduct.idx
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
var __webpack_exports__ = __webpack_require__.X(0, [4995], () => (__webpack_exec__(4035)));
module.exports = __webpack_exports__;

})();