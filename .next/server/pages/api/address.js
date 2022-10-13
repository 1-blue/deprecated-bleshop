"use strict";
(() => {
var exports = {};
exports.id = 1358;
exports.ids = [1358];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5638);


async function handler(req, res) {
    const { body , query , method  } = req;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    if (!session || !session.user) return res.status(403).json({
        message: "접근 권한이 없습니다."
    });
    try {
        // 기본 주소 가져오기
        if (method === "GET") {
            const defaultAddress = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.findFirst */ .Z.address.findFirst({
                where: {
                    userIdx: session.user.idx,
                    isDefault: true
                }
            });
            // 기본 주소가 존재한다면
            if (defaultAddress) {
                return res.status(200).json({
                    message: `${session.user.name}님의 기본 주소를 가져왔습니다.`,
                    address: defaultAddress
                });
            }
            // 기본 주소가 존재하지 않는다면 제일 처음 등록한 주소
            const latestAddress = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.findFirst */ .Z.address.findFirst({
                where: {
                    userIdx: session.user.idx
                }
            });
            return res.status(200).json({
                message: `${session.user.name}님의 최근 주소를 가져왔습니다.`,
                address: latestAddress
            });
        } else if (method === "POST") {
            // 기본 배송지로 지정할 경우
            if (body.isDefault) {
                const exAddress = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.findFirst */ .Z.address.findFirst({
                    where: {
                        AND: {
                            userIdx: session.user.idx,
                            isDefault: true
                        }
                    }
                });
                // 이미 기본 배송지가 존재하는 경우, 기본 배송지 변경
                if (exAddress) {
                    await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.update */ .Z.address.update({
                        where: {
                            idx: exAddress.idx
                        },
                        data: {
                            isDefault: false
                        }
                    });
                }
            }
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.create */ .Z.address.create({
                data: {
                    ...body,
                    User: {
                        connect: {
                            idx: session.user.idx
                        }
                    }
                }
            });
            return res.status(201).json({
                message: "주소를 등록했습니다."
            });
        } else if (method === "DELETE") {
            if (!(typeof query.idx === "string")) throw new Error("잘못된 데이터 송신");
            const exAddress1 = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.findUnique */ .Z.address.findUnique({
                where: {
                    idx: +query.idx
                }
            });
            if (!exAddress1) return res.status(404).json({
                message: "존재하지 않는 주소에 삭제요청을 보냈습니다."
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address["delete"] */ .Z.address["delete"]({
                where: {
                    idx: +query.idx
                }
            });
            return res.status(200).json({
                message: "주소를 삭제했습니다."
            });
        } else if (method === "PUT") {
            const exAddress2 = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.findUnique */ .Z.address.findUnique({
                where: {
                    idx: +body.idx
                }
            });
            // 기본 배송지로 지정할 경우
            if (body.isDefault) {
                const exAddress3 = await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.findFirst */ .Z.address.findFirst({
                    where: {
                        AND: {
                            userIdx: session.user.idx,
                            isDefault: true
                        }
                    }
                });
                // 이미 기본 배송지가 존재하는 경우, 기본 배송지 변경
                if (exAddress3) {
                    await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.update */ .Z.address.update({
                        where: {
                            idx: exAddress3.idx
                        },
                        data: {
                            isDefault: false
                        }
                    });
                }
            }
            if (!exAddress2) return res.status(404).json({
                message: "존재하지 않는 주소에 수정요청을 보냈습니다."
            });
            await _src_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].address.update */ .Z.address.update({
                where: {
                    idx: +body.idx
                },
                data: {
                    ...body
                }
            });
            return res.status(200).json({
                message: "주소를 수정했습니다."
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "주소 등록/수정/삭제 실패."
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
var __webpack_exports__ = (__webpack_exec__(1117));
module.exports = __webpack_exports__;

})();