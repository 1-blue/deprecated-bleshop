"use strict";
(() => {
var exports = {};
exports.id = 5541;
exports.ids = [5541];
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

/***/ 3428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5638);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4995);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9707);


// util

async function handler(req, res) {
    const { body  } = req;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    if (!session || !session.user) return res.status(403).json({
        message: "접근 권한이 없습니다."
    });
    const userIdx = session.user.idx;
    // 2022/08/14 - 유저 일반 정보 수정 - by 1-blue
    if (req.method === "PUT") {
        const { name , email , phone , path  } = body;
        // 이미지 수정
        if (path) {
            await (0,_src_libs__WEBPACK_IMPORTED_MODULE_1__/* .movePhoto */ .R8)(path, "user");
            await _src_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].user.update */ .Z.user.update({
                where: {
                    idx: userIdx
                },
                data: {
                    photo: path.replace("/temporary", "")
                }
            });
            return res.json({
                message: "이미지를 수정했습니다. 새로고침해주세요!"
            });
        } else {
            // 이름, 이메일, 휴대폰번호 중복 여부 확인
            const promiseList = [
                _src_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].user.findUnique */ .Z.user.findUnique({
                    where: {
                        email
                    },
                    select: {
                        idx: true
                    }
                }),
                _src_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].user.findUnique */ .Z.user.findUnique({
                    where: {
                        phone
                    },
                    select: {
                        idx: true
                    }
                }), 
            ];
            const promiseResultList = await Promise.allSettled(promiseList);
            const resultList = promiseResultList.filter(_src_libs__WEBPACK_IMPORTED_MODULE_3__/* .isFulFilled */ .Mo).map((data)=>({
                    ...data.value
                }));
            if (resultList[0]?.idx && resultList[0].idx !== userIdx) return res.status(409).json({
                message: "이미 사용중인 이메일입니다."
            });
            if (resultList[1]?.idx && resultList[1].idx !== userIdx) return res.status(409).json({
                message: "이미 사용중인 폰번호입니다."
            });
            const user = await _src_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].user.update */ .Z.user.update({
                where: {
                    idx: userIdx
                },
                data: {
                    name,
                    email,
                    phone
                }
            });
            return res.json({
                message: "기본 정보를 수정했습니다. 다시 로그인해 주세요!",
                user
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4995,575], () => (__webpack_exec__(3428)));
module.exports = __webpack_exports__;

})();