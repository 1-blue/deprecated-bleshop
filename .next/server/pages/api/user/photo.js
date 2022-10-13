"use strict";
(() => {
var exports = {};
exports.id = 9171;
exports.ids = [9171];
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

/***/ 2507:
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
    const { query , method  } = req;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    if (!session || !session.user) return res.status(403).json({
        message: "접근 권한이 없습니다."
    });
    const userIdx = session.user.idx;
    // 프로필 이미지 수정
    if (method === "PUT") {
        const exUser = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.findUnique */ .Z.user.findUnique({
            where: {
                idx: userIdx
            }
        });
        // 이미 프로필 이미지가 존재하는 경우 이미지 제거
        if (exUser?.photo) {
            // AWS-S3에서 제거
            await (0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .movePhoto */ .R8)(exUser.photo, "remove");
            // DB에서 제거
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.update */ .Z.user.update({
                where: {
                    idx: userIdx
                },
                data: {
                    photo: null
                }
            });
        }
        if (typeof query.name === "string") {
            const { preSignedURL , photoURL  } = (0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .getSignedURL */ .qb)(query.name, "user");
            return res.status(200).json({
                preSignedURL,
                photoURL,
                message: "프로필 이미지를 업데이트중입니다. 잠시만 기다려주세요!"
            });
        }
    } else if (method === "DELETE") {
        const exUser1 = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.findUnique */ .Z.user.findUnique({
            where: {
                idx: userIdx
            }
        });
        // 이미 프로필 이미지가 존재하는 경우 이미지 제거
        if (exUser1?.photo) {
            // AWS-S3에서 제거
            await (0,_src_libs__WEBPACK_IMPORTED_MODULE_2__/* .movePhoto */ .R8)(exUser1.photo, "remove");
            // DB에서 제거
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.update */ .Z.user.update({
                where: {
                    idx: userIdx
                },
                data: {
                    photo: null
                }
            });
            return res.status(200).json({
                message: "기본 이미지로 변경 성공! 새로고침하면 적용됩니다."
            });
        } else {
            return res.status(409).json({
                message: "이미지가 존재하지 않습니다."
            });
        }
    }
    return res.status(412).json({
        preSignedURL: null,
        photoURL: null,
        message: "잘못된 데이터를 전달받았습니다. 잠시후에 다시 시도해주세요!"
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [4995], () => (__webpack_exec__(2507)));
module.exports = __webpack_exports__;

})();