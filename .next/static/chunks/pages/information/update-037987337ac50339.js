(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8680],{8821:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/information/update",function(){return c(1559)}])},638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(6856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=g.default,f={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?f.loader=function(){return a}:"function"==typeof a?f.loader=a:"object"==typeof a&&(f=e({},f,a)),(f=e({},f,b)).loadableGenerated&&delete(f=e({},f,f.loadableGenerated)).loadableGenerated,"boolean"==typeof f.ssr&&!f.suspense){if(!f.ssr)return delete f.ssr,h(c,f);delete f.ssr}return c(f)},b.noSSR=h;var e=c(6495).Z,f=c(2648).Z,g=(f(c(7294)),f(c(4302)));function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d=(0,c(2648).Z)(c(7294)).default.createContext(null);b.LoadableContext=d},4302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9658).Z,e=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=c(6495).Z,g=(0,c(2648).Z)(c(7294)),h=c(6319),i=c(7294).useSyncExternalStore,j=[],k=[],l=!1;function m(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var n=function(){function a(b,c){d(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return e(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function o(a){return function(a,b){var c=function(){if(!o){var b=new n(a,m);o={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return o.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(m.modules)&&m.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=i(o.subscribe,o.getCurrentValue,o.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:o.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(m.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},j=function(a,b){return d(),g.default.createElement(m.lazy,f({},a,{ref:b}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);m.suspense&&(m.lazy=g.default.lazy(m.loader));var o=null;if(!l){var p=m.webpack?m.webpack():m.modules;p&&k.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=m.suspense?j:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(m,a)}function p(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return p(a,b)})}o.preloadAll=function(){return new Promise(function(a,b){p(j).then(a,b)})},o.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return l=!0,b()};p(k,a).then(c,c)})},window.__NEXT_PRELOADREADY=o.preloadReady,b.default=o},1559:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(2670),f=c(1799),g=c(9396),h=c(9534),i=c(4051),j=c.n(i),k=c(5893),l=c(7294),m=c(3299),n=c(7536),o=c(2920),p=c(1664),q=c.n(p),r=c(5152),s=c.n(r),t=c(2483),u=c(9923),v=c(4629),w=c(9669),x=s()(function(){return c.e(565).then(c.bind(c,565))},{loadableGenerated:{webpack:function(){return[565]}},suspense:!0}),y=s()(function(){return c.e(7340).then(c.bind(c,7340))},{loadableGenerated:{webpack:function(){return[7340]}},suspense:!0}),z=s()(function(){return Promise.resolve().then(c.bind(c,6193))},{loadableGenerated:{webpack:function(){return[6193]}},suspense:!0}),A=s()(function(){return Promise.all([c.e(5675),c.e(1304)]).then(c.bind(c,1304))},{loadableGenerated:{webpack:function(){return[1304]}},suspense:!0}),B=s()(function(){return c.e(3989).then(c.bind(c,3989))},{loadableGenerated:{webpack:function(){return[3989]}},suspense:!0}),C=function(){var a,b,c,i,p,r=(0,m.useSession)().data,s=(0,n.cI)(),C=s.handleSubmit,D=s.register,E=s.setValue,F=s.formState.errors,G=s.watch,H=(0,l.useState)(null),I=H[0],J=H[1];(0,l.useEffect)(function(){(0,d.Z)(j().mark(function a(){var b,c;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.Z.addressService.apiGetAddress();case 2:J(c=(b=a.sent).data.address);case 5:case"end":return a.stop()}},a)}))()},[]);var K,L=(0,l.useState)(!0),M=L[0],N=L[1],O=D("name",{required:"이름를 입력해주세요",maxLength:{value:20,message:"20자 이내로 입력해주세요."}}),P=O.ref,Q=(0,h.Z)(O,["ref"]),R=(0,l.useRef)(null),S=(0,l.useCallback)(function(){(null==r?void 0:r.user)&&(E("name",r.user.name),E("email",r.user.email),E("phone",(0,u.lM)(r.user.phone||"")))},[r,E]);(0,l.useEffect)(function(){return S()},[S]);var T=(0,l.useCallback)((K=(0,d.Z)(j().mark(function a(b){var c,d,h,i;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=o.Am.loading("정보를 수정하고 있습니다."),a.prev=1,a.next=4,t.Z.userService.apiEditUser((0,g.Z)((0,f.Z)({},b),{phone:(0,u.Zy)(b.phone||"")}));case 4:h=(d=a.sent).data.message,o.Am.update(c,{render:h,type:"success",isLoading:!1,autoClose:1500}),(0,m.signOut)({redirect:!0,callbackUrl:"/login"}),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.error("error >> ",a.t0),(0,e.Z)(a.t0,w.AxiosError)?o.Am.update(c,{render:null===(i=a.t0.response)|| void 0===i?void 0:i.data.message,type:"error",isLoading:!1,autoClose:1500}):o.Am.update(c,{render:"알 수 없는 에러가 발생했습니다.",type:"error",isLoading:!1,autoClose:1500});case 14:case"end":return a.stop()}},a,null,[[1,10]])})),function(a){return K.apply(this,arguments)}),[]),U=(0,l.useCallback)(function(){N(!1),setTimeout(function(){var a;return null===(a=R.current)|| void 0===a?void 0:a.select()},0),(null==r?void 0:r.user)&&E("phone",(0,u.Zy)(r.user.phone||""))},[E,r,R]),V=(0,l.useCallback)(function(){S(),N(!0),(null==r?void 0:r.user)&&E("phone",(0,u.lM)(r.user.phone||""))},[S,N,r,E]),W=(0,l.useState)(!1),X=W[0],Y=W[1],Z=(0,l.useCallback)((0,d.Z)(j().mark(function a(){var b,c,d,f;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(null==r?void 0:null===(b=r.user)|| void 0===b?void 0:b.idx){a.next=3;break}return a.abrupt("return",o.Am.error("로그인후에 접근해주세요"));case 3:return c=o.Am.loading("프로필 이미지를 제거하는 중입니다."),a.prev=4,a.next=7,t.Z.photoService.apiDeleteUserPhoto();case 7:d=a.sent.message,o.Am.update(c,{render:d,type:"success",isLoading:!1,autoClose:1500}),Y(!1),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(4),console.error("error >> ",a.t0),(0,e.Z)(a.t0,w.AxiosError)?o.Am.update(c,{render:null===(f=a.t0.response)|| void 0===f?void 0:f.data.message,type:"error",isLoading:!1,autoClose:1500}):o.Am.update(c,{render:"알 수 없는 에러가 발생했습니다.",type:"error",isLoading:!1,autoClose:1500});case 16:case"end":return a.stop()}},a,null,[[4,12]])})),[r]),$=G("photo");(0,l.useEffect)(function(){(0,d.Z)(j().mark(function a(){var b,c,d,f,g;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if($){a.next=2;break}return a.abrupt("return");case 2:if(0!==$.length){a.next=4;break}return a.abrupt("return");case 4:return b=o.Am.loading("프로필 이미지를 등록하는 중입니다."),a.prev=5,a.next=8,t.Z.photoService.apiEditUserPhoto({file:$[0]});case 8:if(c=a.sent.photoURL){a.next=11;break}return a.abrupt("return");case 11:return a.next=13,t.Z.userService.apiUpdateUserPhoto({path:c});case 13:f=(d=a.sent).data.message,o.Am.update(b,{render:f,type:"success",isLoading:!1,autoClose:1500}),Y(!1),a.next=23;break;case 19:a.prev=19,a.t0=a.catch(5),console.error("error >> ",a.t0),(0,e.Z)(a.t0,w.AxiosError)?o.Am.update(b,{render:null===(g=a.t0.response)|| void 0===g?void 0:g.data.message,type:"error",isLoading:!1,autoClose:1500}):o.Am.update(b,{render:"알 수 없는 에러가 발생했습니다.",type:"error",isLoading:!1,autoClose:1500});case 23:return a.prev=23,E("photo",null),a.finish(23);case 26:case"end":return a.stop()}},a,null,[[5,19,23,26]])}))()},[$,E]);var _=D("photo"),aa=_.ref,ab=(0,h.Z)(_,["ref"]),ac=(0,l.useRef)(null);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v.Z,{title:"BleShop - 회원 정보 수정",description:"BleShop의 회원 정보 수정 페이지입니다."}),(0,k.jsxs)("article",{className:"pt-4 space-y-4",children:[(0,k.jsx)(y,{title:"내 정보"}),(0,k.jsxs)(x,{className:"flex items-center space-x-2 xs:space-x-4",hasPadding:!0,children:[(0,k.jsx)(A,{path:null==r?void 0:null===(a=r.user)|| void 0===a?void 0:a.photo,alt:"유저 이미지",avatar:!0,cover:!0,isFocus:!0,className:"w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 cursor-pointer",onClick:function(){return Y(!0)}}),(0,k.jsx)("span",{className:"text-sm xs:text-base md:text-lg font-bold",children:null==r?void 0:null===(b=r.user)|| void 0===b?void 0:b.name}),(0,k.jsx)("div",{className:"flex-1"}),(0,k.jsx)("button",{type:"button",className:"text-sm xs:text-base md:text-lg font-bold text-blue-700 decoration-2 decoration-blue-600 underline-offset-4 hover:underline focus:outline-none focus:underline ",onClick:function(){return(0,m.signOut)({callbackUrl:"/login",redirect:!0})},children:"로그아웃"})]}),X&&(0,k.jsx)(B,{title:"프로필 이미지 설정",onCloseModal:function(){return Y(!1)},className:"max-w-[500px] min-w-[250px]",children:(0,k.jsxs)(x,{className:"flex flex-col divide-y",children:[(0,k.jsx)("button",{type:"button",className:"text-xs xs:text-sm md:text-base py-2 transition-colors hover:bg-gray-200 focus:outline-none focus:bg-gray-200",onClick:Z,children:"기본 이미지로 변경하기"}),(0,k.jsx)("label",{htmlFor:"photo",className:"text-xs xs:text-sm md:text-base inline-block py-2 text-center cursor-pointer transition-colors hover:bg-gray-200 focus:outline-none focus:bg-gray-200",tabIndex:0,onKeyDown:function(a){var b;return"Enter"===a.key?null===(b=ac.current)|| void 0===b?void 0:b.click():null},children:"사진올리기"}),(0,k.jsx)("input",(0,g.Z)((0,f.Z)({id:"photo",type:"file",accept:"image/*"},ab),{hidden:!0,ref:function(a){aa(a),ac.current=a}})),(0,k.jsx)("button",{type:"button",className:"text-xs xs:text-sm md:text-base py-2 transition-colors hover:bg-gray-200 focus:outline-none focus:bg-gray-200",onClick:function(){return Y(!1)},children:"취소"})]})}),(0,k.jsx)(x,{className:"overflow-hidden",children:(0,k.jsx)("form",{onSubmit:C(T),children:(0,k.jsxs)("ul",{className:"divide-y-2",children:[(0,k.jsxs)("li",{className:"flex",children:[(0,k.jsxs)("div",{className:"px-4 py-2 flex items-center space-x-1",children:[(0,k.jsx)(z,{shape:"arrowRight",className:"w-5 h-5 xs:w-6 xs:h-6"}),(0,k.jsx)("span",{className:"text-sm xs:text-base md:text-lg font-bold",children:"회원정보"})]}),(0,k.jsx)("div",{className:"flex-1"}),M?(0,k.jsx)("button",{type:"button",className:"px-4 py-2 text-[8px] xs:text-xs md:text-sm text-blue-600 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white",onClick:U,children:"회원정보 수정"}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("button",{type:"submit",className:"px-2 py-2 text-xs xs:text-sm text-blue-600 hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white",children:"수정완료"}),(0,k.jsx)("button",{type:"button",className:"px-2 py-2 text-xs xs:text-sm text-blue-600 hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white",onClick:V,children:"수정취소"})]})]}),(0,k.jsxs)("li",{className:"space-x-2 px-4 py-2 flex items-center",children:[(0,k.jsx)("label",{htmlFor:"name",className:"text-gray-400 text-sm xs:text-base",children:"고객명"}),(0,k.jsx)("input",(0,g.Z)((0,f.Z)({id:"name",type:"text",className:"flex-1 text-xs xs:text-sm bg-blue-100 px-2 py-1 rounded-sm focus:outline-none disabled:bg-transparent"},Q),{disabled:M,ref:function(a){P(a),R.current=a}})),(0,k.jsx)("span",{className:"text-red-600 font-semibold text-xs xs:text-sm",children:null===(c=F.name)|| void 0===c?void 0:c.message})]}),(0,k.jsxs)("li",{className:"space-x-2 px-4 py-2 flex items-center",children:[(0,k.jsx)("label",{htmlFor:"email",className:"text-gray-400 text-sm xs:text-base",children:"이메일"}),(0,k.jsx)("input",(0,g.Z)((0,f.Z)({id:"email",type:"email",className:"flex-1 text-xs xs:text-sm bg-blue-100 px-2 py-1 rounded-sm focus:outline-none disabled:bg-transparent"},D("email",{required:"이메일을 입력해주세요",pattern:{value:(0,u.Nu)("email"),message:"이메일 형식에 맞게 입력해 주세요."}})),{disabled:M})),(0,k.jsx)("span",{className:"text-red-600 font-semibold text-xs xs:text-sm",children:null===(i=F.email)|| void 0===i?void 0:i.message})]}),(0,k.jsxs)("li",{className:"space-x-2 px-4 py-2 flex items-center",children:[(0,k.jsx)("label",{htmlFor:"phone",className:"text-gray-400 text-sm xs:text-base",children:"연락처"}),(0,k.jsx)("input",(0,g.Z)((0,f.Z)({id:"phone",type:"text",className:"flex-1 text-xs xs:text-sm bg-blue-100 px-2 py-1 rounded-sm focus:outline-none disabled:bg-transparent"},D("phone",{required:"휴대폰 번호를 입력해주세요",pattern:{value:(0,u.Nu)("phone"),message:"숫자만 11자리 입력해 주세요."},maxLength:{value:11,message:"숫자만 11자리 입력해 주세요."},minLength:{value:11,message:"숫자만 11자리 입력해 주세요."}})),{disabled:M})),(0,k.jsx)("span",{className:"text-red-600 font-semibold text-xs xs:text-sm",children:null===(p=F.phone)|| void 0===p?void 0:p.message})]})]})})}),(0,k.jsx)(x,{className:"space-y-4 overflow-hidden",children:I?(0,k.jsxs)("ul",{className:"divide-y-2",children:[(0,k.jsxs)("li",{className:"flex items-center",children:[(0,k.jsxs)("div",{className:"px-4 py-2 flex items-center space-x-1",children:[(0,k.jsx)(z,{shape:"arrowRight",className:"w-5 h-5 xs:w-6 xs:h-6"}),(0,k.jsx)("span",{className:"text-sm xs:text-base md:text-lg font-bold",children:"주소록"})]}),I.isDefault&&(0,k.jsx)("span",{className:"text-[8px] xs:text-xs p-1 xs:p-[6px] font-bold border xs:border-2 border-blue-600 text-blue-600 rounded-full",children:"기본 배송지"}),(0,k.jsx)("div",{className:"flex-1"}),(0,k.jsx)(q(),{href:"/information/address",children:(0,k.jsx)("a",{className:"px-4 py-4 text-[8px] xs:text-xs md:text-sm text-blue-600 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white",children:"주소록 관리"})})]}),(0,k.jsxs)("li",{className:"space-x-2 px-4 py-2 flex items-center",children:[(0,k.jsx)("span",{className:"text-gray-400 text-sm xs:text-base",children:"수령인"}),(0,k.jsx)("span",{className:"flex-1 text-xs xs:text-sm px-2 py-1",children:I.name})]}),(0,k.jsxs)("li",{className:"space-x-2 px-4 py-2 flex items-center",children:[(0,k.jsx)("span",{className:"text-gray-400 text-sm xs:text-base",children:"주소지"}),(0,k.jsxs)("div",{className:"flex flex-col",children:[(0,k.jsx)("span",{className:"flex-1 text-xs xs:text-sm px-2 py-1",children:I.address}),(0,k.jsx)("span",{className:"flex-1 text-xs xs:text-sm px-2 py-1",children:I.residence})]})]}),(0,k.jsxs)("li",{className:"space-x-2 px-4 py-2 flex items-center",children:[(0,k.jsx)("span",{className:"text-gray-400 text-sm xs:text-base",children:"수령인"}),(0,k.jsx)("span",{className:"flex-1 text-xs xs:text-sm px-2 py-1",children:(0,u.lM)(I.phone)})]})]}):(0,k.jsxs)("ul",{className:"divide-y-2",children:[(0,k.jsxs)("li",{className:"flex items-center",children:[(0,k.jsxs)("div",{className:"px-4 py-2 flex items-center space-x-1",children:[(0,k.jsx)(z,{shape:"arrowRight",className:"w-5 h-5 xs:w-6 xs:h-6"}),(0,k.jsx)("span",{className:"xs:text-lg font-bold",children:"주소록"})]}),(0,k.jsx)("div",{className:"flex-1"}),(0,k.jsx)(q(),{href:"/information/address",children:(0,k.jsx)("a",{className:"px-4 py-4 text-xs xs:text-sm text-blue-600 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white",children:"배송지 관리"})})]}),(0,k.jsx)("li",{children:(0,k.jsx)("span",{className:"inline-block text-center w-full py-4 font-bold",children:"등록된 배송지가 없습니다."})})]})})]})]})};b.default=C},5152:function(a,b,c){a.exports=c(638)},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})},9534:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})},9815:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(943),e=c(3375),f=c(1566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[6819,7536,2483,9774,2888,179],function(){var b;return a(a.s=8821)}),_N_E=a.O()}])