"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Main_Benner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/Carousel.tsx
var Carousel = __webpack_require__(5129);
// EXTERNAL MODULE: ./src/components/common/Photo.tsx
var Photo = __webpack_require__(1304);
;// CONCATENATED MODULE: ./src/dummy/index.ts
const keywords = (/* unused pure expression or super */ null && ([
    "블루투스",
    "라면",
    "닌텐도스위치",
    "스포츠",
    "리액트",
    "프론트엔드",
    "데이터베이스",
    "아마존",
    "윌라오디오북",
    "그리스로마신화", 
]));
const filters = (/* unused pure expression or super */ null && ([
    "빨강",
    "주황",
    "노랑",
    "초록",
    "파랑",
    "남색",
    "보라",
    "분홍",
    "검정",
    "흰색", 
]));
const categories = (/* unused pure expression or super */ null && ([
    "패션의류",
    "뷰티",
    "식품",
    "인테리어",
    "스포츠",
    "취미",
    "문구",
    "가전",
    "생활용품",
    "여행", 
]));
const photos = [
    `photos/${"production"}/benner/barcelona.jpg`,
    `photos/${"production"}/benner/big-ben.jpg`,
    `photos/${"production"}/benner/germany.jpg`,
    `photos/${"production"}/benner/Iceland-waterfall.jpg`,
    `photos/${"production"}/benner/venice.jpg`, 
];
/**
 * 2022/08/22 - 관리자 유저 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */ const getAdminUser = ()=>({
        idx: 1,
        name: "관리자",
        id: "a",
        password: "$2b$06$2dZH5QkrdzeLKo4eWkFC/.wd/iuO87L5CsF6FXvs1C0UzvcZpRYjq",
        email: "a@naver.com",
        phone: "01012123434",
        photo: null,
        role: "ADMIN",
        provider: "Credentials"
    });
/**
 * 2022/08/22 - 가짜 상품들의 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */ const getDummyProducts = (number)=>Array(number).fill(null).map(()=>({
            name: "테스트 상품" + Math.floor(Math.random() * 100),
            color: "빨강, 파랑, 노랑, 초록, 보라",
            size: "S,M,L,XL",
            description: "대충 상품 설명\n✍️\uD83D\uDD12❌\uD83D\uDE25➖\uD83E\uDD14\uD83D\uDCC3\uD83D\uDCD1\uD83D\uDE2E\n(\uD83D\uDC49ﾟヮﾟ)\uD83D\uDC49\uD83D\uDC48(ﾟヮﾟ\uD83D\uDC48)",
            brand: "브랜드",
            company: "제조사",
            period: String(new Date()),
            price: 5000 * Math.floor(Math.random() * 100),
            photo: photos[Math.floor(Math.random() * 5)],
            userIdx: 1,
            updatedAt: new Date()
        }));
/**
 * 2022/08/28 - 가짜 카테고리들 가져오는 함수 - by 1-blue
 * @returns
 */ const getDummyCategories = (number)=>[
        ...new Set(Array(number).fill(null).map(()=>categories[Math.floor(Math.random() * 10)])), 
    ];
/**
 * 2022/08/28 - 가짜 키워드들 가져오는 함수 - by 1-blue
 */ const getDummyKeywords = (number)=>[
        ...new Set(Array(number).fill(null).map(()=>keywords[Math.floor(Math.random() * 10)])), 
    ];
/**
 * 2022/08/28 - 가짜 키워드들 가져오는 함수 - by 1-blue
 */ const getDummyFilters = (number)=>[
        ...new Set(Array(number).fill(null).map(()=>filters[Math.floor(Math.random() * 10)])), 
    ];
/**
 * 2022/08/22 - 배너의 가짜 이미지들 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */ const getBennerPhotos = ()=>[
        ...photos
    ];

;// CONCATENATED MODULE: ./src/components/Main/Benner.tsx


// component


// >>> dummy data

const Benner = ()=>{
    // 2022/08/22 - 현재 보여지는 광고 번호  - by 1-blue
    const { 0: currentDot , 1: setCurrentDot  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ jsx_runtime_.jsx(Carousel["default"], {
        currentDot: currentDot,
        setCurrentDot: setCurrentDot,
        autoPlay: true,
        children: getBennerPhotos().map((photoURL)=>/*#__PURE__*/ jsx_runtime_.jsx(Photo["default"], {
                path: photoURL,
                className: "w-full h-[200px] xs:h-[350px] md:h-[500px]",
                alt: "상품 이미지",
                cover: true
            }, photoURL))
    });
};
/* harmony default export */ const Main_Benner = (Benner);


/***/ })

};
;