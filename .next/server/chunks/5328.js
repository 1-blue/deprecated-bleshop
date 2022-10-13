"use strict";
exports.id = 5328;
exports.ids = [5328];
exports.modules = {

/***/ 5328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2483);
/* harmony import */ var _src_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9800);
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9923);
/* harmony import */ var _src_components_common_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3989);
/* harmony import */ var _src_components_common_Support__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(695);






// api

// state

// util

// component


const SelectAddressModal = ({ products , singleData , onCloseModal  })=>{
    const { data  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // 2022/09/04 - 구매 관련 데이터 저장 함수 - by 1-blue
    const setProductToPayment = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState)(_src_states__WEBPACK_IMPORTED_MODULE_6__/* ["default"].paymentService.productToPayment */ .Z.paymentService.productToPayment);
    // 2022/09/04 - 로그인한 유저의 배송지들 - by 1-blue
    const { 0: addresses , 1: setAddresses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const { data: { addresses  } ,  } = await _src_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].addressService.apiGetAllAddress */ .Z.addressService.apiGetAllAddress();
            setAddresses(addresses);
        })();
    }, []);
    // 2022/09/04 - 주소 선택 및 결제 페이지로 이동 - by 1-blue
    const onSelectAddress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((selectedAddress)=>()=>{
            if (!data?.user) return;
            onCloseModal();
            const postcode = selectedAddress.address.slice(selectedAddress.address.indexOf("[") + 1, selectedAddress.address.lastIndexOf("]"));
            // 단일 상품 주문
            if (products.length === 1) {
                const product = products[0];
                setProductToPayment({
                    escrow: false,
                    merchant_uid: `mid_${Date.now()}`,
                    name: product.name,
                    amount: product.price * singleData[0].quantity,
                    custom_data: {
                        residence: selectedAddress.residence,
                        message: selectedAddress.message,
                        singleData: [
                            {
                                ...singleData[0],
                                productIdx: product.idx
                            }, 
                        ]
                    },
                    language: "ko",
                    buyer_name: selectedAddress.name,
                    buyer_tel: selectedAddress.phone,
                    buyer_email: data.user.email,
                    buyer_addr: selectedAddress.address,
                    buyer_postcode: postcode,
                    m_redirect_url: "https://bleshop.shop" + "/api/payment/complete/mobile"
                });
            } else {
                setProductToPayment({
                    escrow: false,
                    merchant_uid: `mid_${Date.now()}`,
                    name: products[0].name + `외 ${products.length - 1}개`,
                    amount: singleData.map((data, i)=>data.quantity * products[i].price).reduce((curr, prev)=>curr + prev),
                    custom_data: {
                        residence: selectedAddress.residence,
                        message: selectedAddress.message,
                        singleData: singleData.map((v, i)=>({
                                ...v,
                                productIdx: products[i].idx
                            }))
                    },
                    language: "ko",
                    buyer_name: selectedAddress.name,
                    buyer_tel: selectedAddress.phone,
                    buyer_email: data.user.email,
                    buyer_addr: selectedAddress.address,
                    buyer_postcode: postcode,
                    m_redirect_url: "https://bleshop.shop" + "/api/payment/complete/mobile"
                });
            }
            router.push("/payment");
        }, [
        data,
        products,
        onCloseModal,
        setProductToPayment,
        singleData,
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_common_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onCloseModal: onCloseModal,
        className: "space-y-2 max-w-[500px] min-w-[250px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "text-base sm:text-xl md:text-2xl font-bolder text-center bg-indigo-400 py-2 text-white",
                children: "배송지 선택"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "space-y-3 flex flex-col px-4 py-2",
                children: [
                    addresses.map((address)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: "flex flex-col w-full bg-gray-200 p-2 rounded-md space-y-0.5 hover:bg-indigo-300 hover:text-white focus:outline-none focus:bg-indigo-400 focus:text-white transition-colors",
                                onClick: onSelectAddress(address),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "font-bold",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "md:text-lg",
                                                children: address.name
                                            }),
                                            address.isDefault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block text-[8px] p-1 ml-1 text-blue-400 bg-white border-blue-400 border rounded-full",
                                                children: "기본배송지"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs md:text-sm",
                                        children: address.address
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs md:text-sm",
                                        children: address.residence
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs md:text-sm",
                                        children: (0,_src_libs__WEBPACK_IMPORTED_MODULE_9__/* .addSeparatorToPhone */ .lM)(address.phone)
                                    })
                                ]
                            })
                        }, address.idx)),
                    addresses.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Support__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Error */ .Z.Error, {
                        text: "** 등록된 배송지가 없습니다. **",
                        className: "py-4 text-sm md:text-base"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/information/address",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-[8px] md:text-xs self-end hover:text-blue-400 hover:underline hover:underline-offset-2 focus:outline-none focus:text-blue-400 focus:underline focus:underline-offset-2",
                            children: "배송지 등록"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectAddressModal);


/***/ })

};
;