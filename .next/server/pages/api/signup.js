"use strict";
(() => {
var exports = {};
exports.id = 2964;
exports.ids = [2964];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9336:
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 6496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: ./src/prisma/index.ts
var prisma = __webpack_require__(5638);
// EXTERNAL MODULE: ./src/libs/s3.ts
var s3 = __webpack_require__(4995);
;// CONCATENATED MODULE: external "@prisma/client/runtime"
const runtime_namespaceObject = require("@prisma/client/runtime");
;// CONCATENATED MODULE: ./src/pages/api/signup.ts


// util


async function handler(req, res) {
    const { body  } = req;
    try {
        const photo = body.photo;
        // 프로필 이미지 확정으로 위치 이동
        await (0,s3/* movePhoto */.R8)(photo, "user");
        let data = null;
        const hashPassword = await external_bcrypt_default().hash(body.password, 6);
        if (body.photo) {
            data = {
                ...body,
                password: hashPassword,
                photo: photo.replace("/temporary", "")
            };
        } else {
            data = {
                ...body,
                password: hashPassword,
                photo: undefined
            };
        }
        const createdUser = await prisma/* default.user.create */.Z.user.create({
            data
        });
        return res.status(200).json({
            user: createdUser,
            message: "회원가입에 성공했습니다. 로그인 페이지로 이동합니다."
        });
    } catch (error) {
        console.error("/api/signup >> ", error);
        // 아이디, 이름, 이메일, 폰번호중에 하나가 겹친다면 실행
        if (error instanceof runtime_namespaceObject.PrismaClientKnownRequestError) {
            const errorType = error.meta?.target;
            switch(errorType){
                case "User_id_key":
                    return res.status(409).json({
                        user: null,
                        message: "이미 사용중인 아이디입니다."
                    });
                case "User_email_key":
                    return res.status(409).json({
                        user: null,
                        message: "이미 사용중인 이메일입니다."
                    });
                case "User_phone_key":
                    return res.status(409).json({
                        user: null,
                        message: "이미 사용중인 전화번호입니다."
                    });
                default:
                    return res.status(409).json({
                        user: null,
                        message: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!"
                    });
            }
        }
        return res.status(400).json({
            user: null,
            message: "회원가입에 실패했습니다. 새로고침후에 시도해주세요!"
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
var __webpack_exports__ = __webpack_require__.X(0, [4995], () => (__webpack_exec__(6496)));
module.exports = __webpack_exports__;

})();