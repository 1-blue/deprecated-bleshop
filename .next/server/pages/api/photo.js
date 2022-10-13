"use strict";
(() => {
var exports = {};
exports.id = 9971;
exports.ids = [9971];
exports.modules = {

/***/ 9336:
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ 6851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4995);
// util

async function handler(req, res) {
    const { query , method  } = req;
    // 이미지 업로드 url 받기
    if (method === "GET") {
        if (typeof query.name === "string") {
            const { name , kinds  } = query;
            const { photoURL , preSignedURL  } = (0,_src_libs__WEBPACK_IMPORTED_MODULE_0__/* .getSignedURL */ .qb)(name, kinds);
            return res.status(200).json({
                preSignedURL,
                photoURL,
                message: "이미지를 업로드중입니다. 잠시만 기다려주세요!"
            });
        }
    }
    if (method === "DELETE") {
        // 이미지들 제거
        if (typeof query.names === "object") {
            const { names  } = query;
            const photosPromise = names.map((name)=>(0,_src_libs__WEBPACK_IMPORTED_MODULE_0__/* .movePhoto */ .R8)(name, "remove"));
            await Promise.allSettled(photosPromise);
            return res.status(200).json({
                message: "임시 저장된 이미지들을 제거합니다."
            });
        } else if (typeof query.name === "string") {
            const { name: name1  } = query;
            await (0,_src_libs__WEBPACK_IMPORTED_MODULE_0__/* .movePhoto */ .R8)(name1, "remove");
            return res.status(200).json({
                message: "임시 저장된 이미지를 제거합니다."
            });
        }
    }
    return res.status(412).json({
        preSignedURL: null,
        photoURL: null,
        message: "잘못된 데이터를 전달받았습니다. 잠시후에 다시 시도해주세요!"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4995], () => (__webpack_exec__(6851)));
module.exports = __webpack_exports__;

})();