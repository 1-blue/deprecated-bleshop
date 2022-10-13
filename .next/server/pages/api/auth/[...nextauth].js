"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: ./src/prisma/index.ts
var prisma = __webpack_require__(5638);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/kakao"
const kakao_namespaceObject = require("next-auth/providers/kakao");
var kakao_default = /*#__PURE__*/__webpack_require__.n(kakao_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts






/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        // 인증 방식 선택 ( 현재는 "id" + "password" )
        credentials_default()({
            name: "Credentials",
            credentials: {
                id: {
                    label: "아이디",
                    type: "text",
                    placeholder: "아이디를 입력하세요."
                },
                password: {
                    label: "비밀번호",
                    type: "password",
                    placeholder: "비밀번호를 입력하세요."
                }
            },
            // 로그인 유효성 검사
            async authorize (credentials, req) {
                if (!credentials) throw new Error("잘못된 입력값으로 인한 오류가 발생했습니다.");
                const { id , password  } = credentials;
                const exUser = await prisma/* default.user.findUnique */.Z.user.findUnique({
                    where: {
                        id
                    }
                });
                if (!exUser) throw new Error("존재하지 않는 아이디입니다.");
                if (!exUser.password) throw new Error("잘못된 로그인 방식입니다.");
                const result = await external_bcrypt_default().compare(password, exUser.password);
                if (!result) throw new Error("비밀번호가 불일치합니다.");
                return exUser;
            }
        }),
        // 카카오 로그인
        kakao_default()({
            clientId: process.env.KAKAO_ID,
            clientSecret: process.env.KAKAO_SECRET
        }),
        // 구글 로그인
        google_default()({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }), 
    ],
    callbacks: {
        async jwt ({ token , account  }) {
            // 카카오 로그인일 경우
            if (account?.provider === "kakao") {
                const exUser = await prisma/* default.user.findFirst */.Z.user.findFirst({
                    where: {
                        provider: "KAKAO",
                        name: token.name,
                        email: token.email
                    }
                });
                // 등록된 유저가 아니라면 회원가입
                if (!exUser) {
                    await prisma/* default.user.create */.Z.user.create({
                        data: {
                            name: token.name,
                            email: token.email,
                            photo: token.picture,
                            provider: "KAKAO"
                        }
                    });
                }
            }
            // 구글 로그인일 경우
            if (account?.provider === "google") {
                const exUser1 = await prisma/* default.user.findFirst */.Z.user.findFirst({
                    where: {
                        provider: "GOOGLE",
                        name: token.name,
                        email: token.email
                    }
                });
                // 등록된 유저가 아니라면 회원가입
                if (!exUser1) {
                    await prisma/* default.user.create */.Z.user.create({
                        data: {
                            name: token.name,
                            email: token.email,
                            photo: token.picture,
                            provider: "GOOGLE"
                        }
                    });
                }
            }
            return token;
        },
        // 세션에 로그인한 유저 데이터 입력
        async session ({ session  }) {
            const exUser = await prisma/* default.user.findFirst */.Z.user.findFirst({
                where: {
                    email: session.user.email
                },
                select: {
                    idx: true,
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    role: true,
                    photo: true,
                    provider: true
                }
            });
            session.user = exUser;
            return session;
        }
    },
    secret: process.env.SECRET
}));


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
var __webpack_exports__ = (__webpack_exec__(6507));
module.exports = __webpack_exports__;

})();