(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7616],{7805:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return c(9641)}])},638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(6856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=g.default,f={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?f.loader=function(){return a}:"function"==typeof a?f.loader=a:"object"==typeof a&&(f=e({},f,a)),(f=e({},f,b)).loadableGenerated&&delete(f=e({},f,f.loadableGenerated)).loadableGenerated,"boolean"==typeof f.ssr&&!f.suspense){if(!f.ssr)return delete f.ssr,h(c,f);delete f.ssr}return c(f)},b.noSSR=h;var e=c(6495).Z,f=c(2648).Z,g=(f(c(7294)),f(c(4302)));function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d=(0,c(2648).Z)(c(7294)).default.createContext(null);b.LoadableContext=d},4302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9658).Z,e=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=c(6495).Z,g=(0,c(2648).Z)(c(7294)),h=c(6319),i=c(7294).useSyncExternalStore,j=[],k=[],l=!1;function m(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var n=function(){function a(b,c){d(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return e(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function o(a){return function(a,b){var c=function(){if(!o){var b=new n(a,m);o={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return o.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(m.modules)&&m.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=i(o.subscribe,o.getCurrentValue,o.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:o.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(m.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},j=function(a,b){return d(),g.default.createElement(m.lazy,f({},a,{ref:b}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);m.suspense&&(m.lazy=g.default.lazy(m.loader));var o=null;if(!l){var p=m.webpack?m.webpack():m.modules;p&&k.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=m.suspense?j:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(m,a)}function p(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return p(a,b)})}o.preloadAll=function(){return new Promise(function(a,b){p(j).then(a,b)})},o.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return l=!0,b()};p(k,a).then(c,c)})},window.__NEXT_PRELOADREADY=o.preloadReady,b.default=o},9641:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(2670),f=c(4051),g=c.n(f),h=c(5893),i=c(7294),j=c(7536),k=c(2920),l=c(1163),m=c(5152),n=c.n(m),o=c(9923),p=c(2483),q=c(4629),r=c(9669),s=n()(function(){return c.e(1887).then(c.bind(c,1887))},{loadableGenerated:{webpack:function(){return[1887]}},suspense:!0}),t=n()(function(){return c.e(104).then(c.bind(c,1432))},{loadableGenerated:{webpack:function(){return[1432]}},suspense:!0}),u=n()(function(){return c.e(2249).then(c.bind(c,2249))},{loadableGenerated:{webpack:function(){return[2249]}},suspense:!0}),v=n()(function(){return Promise.all([c.e(5675),c.e(862)]).then(c.bind(c,862))},{loadableGenerated:{webpack:function(){return[862]}},suspense:!0}),w=n()(function(){return c.e(6987).then(c.bind(c,6987))},{loadableGenerated:{webpack:function(){return[6987]}},suspense:!0}),x=function(){var a,b,c,f,m,n,x,y=(0,l.useRouter)(),z=(0,j.cI)(),A=z.register,B=z.handleSubmit,C=z.formState.errors,D=z.watch,E=(0,i.useState)(""),F=E[0],G=E[1],H=(0,i.useCallback)((x=(0,d.Z)(g().mark(function a(b){var c,d,f,h,i,j,l,m,n,o;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=k.Am.loading("회원가입중입니다."),a.prev=1,d=b.id,f=b.email,h=b.name,i=b.password,j=b.phone,l=b.role,a.next=5,p.Z.authService.apiSignUp({id:d,email:f,name:h,password:i,phone:j,photo:F,role:l?"SELLER":"USER"});case 5:n=(m=a.sent).data.message,k.Am.update(c,{render:n,type:"success",isLoading:!1,autoClose:1500}),y.push("/login"),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),console.error(a.t0),(0,e.Z)(a.t0,r.AxiosError)?k.Am.update(c,{render:null===(o=a.t0.response)|| void 0===o?void 0:o.data.message,type:"error",isLoading:!1,autoClose:1500}):k.Am.update(c,{render:"알 수 없는 에러가 발생했습니다.",type:"error",isLoading:!1,autoClose:1500});case 15:case"end":return a.stop()}},a,null,[[1,11]])})),function(a){return x.apply(this,arguments)}),[F,y]),I=(0,i.useRef)(null);I.current=D("password","");var J=(0,i.useState)(!1),K=J[0],L=J[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(q.Z,{title:"BleShop - 회원가입",description:"BleShop의 회원가입 페이지입니다."}),(0,h.jsx)("h1",{className:"pt-8 pb-4 text-center text-5xl font-bold font-special",children:"bleshop"}),(0,h.jsxs)(s,{onSubmit:B(H),children:[K&&(0,h.jsx)("div",{className:"fixed top-2 left-2",children:(0,h.jsx)(u,{name:"판매자",register:A("role")})}),(0,h.jsx)("button",{type:"button",className:"fixed top-2 right-2 bg-transparent p-1 cursor-auto",onClick:function(){return L(function(a){return!a})}}),(0,h.jsx)(t,{type:"text",name:"아이디",placeholder:"아이디를 입력해주세요.",register:A("id",{required:"아이디를 입력해주세요!",pattern:{value:(0,o.Nu)("id"),message:"숫자와 영어가 최소 한 글자 이상 포함되고, 최소 6자리여야 합니다."}}),errorMessage:null===(a=C.id)|| void 0===a?void 0:a.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,h.jsx)(t,{type:"password",name:"비밀번호",placeholder:"비밀번호를 입력해주세요.",register:A("password",{required:"비밀번호를 입력해주세요",pattern:{value:(0,o.Nu)("password"),message:"숫자와 영어가 최소 한 글자 이상 포함되고, 최소 8자리여야 합니다."}}),errorMessage:null===(b=C.password)|| void 0===b?void 0:b.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,h.jsx)(t,{type:"password",name:"비밀번호 확인",placeholder:"비밀번호를 다시 입력해주세요.",register:A("passwordConfirm",{required:"비밀번호를 다시 입력해주세요.",validate:function(a){return a===I.current||"비밀번호가 일치하지 않습니다."}}),errorMessage:null===(c=C.passwordConfirm)|| void 0===c?void 0:c.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,h.jsx)(t,{type:"text",name:"이름",placeholder:"이름를 입력해주세요.",register:A("name",{required:"이름를 입력해주세요",maxLength:{value:20,message:"20자 이내로 입력해주세요."}}),errorMessage:null===(f=C.name)|| void 0===f?void 0:f.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,h.jsx)(t,{type:"text",name:"이메일",placeholder:"이메일을 입력해주세요. ex)email@naver.com",register:A("email",{required:"이메일을 입력해주세요",pattern:{value:(0,o.Nu)("email"),message:"이메일 형식에 맞게 입력해 주세요."}}),errorMessage:null===(m=C.email)|| void 0===m?void 0:m.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,h.jsx)(t,{type:"text",name:"휴대폰 번호",placeholder:"휴대폰 번호를 숫자만 입력해주세요. ex) 01021038259",register:A("phone",{required:"휴대폰 번호를 입력해주세요",pattern:{value:(0,o.Nu)("phone"),message:"숫자만 11자리 입력해 주세요."},maxLength:{value:11,message:"숫자만 11자리 입력해 주세요."},minLength:{value:11,message:"숫자만 11자리 입력해 주세요."}}),errorMessage:null===(n=C.phone)|| void 0===n?void 0:n.message,className:"min-w-[200px] max-w-[600px] w-full"}),(0,h.jsx)(v,{photoURL:F,setPhotoURL:G,name:"프로필 이미지",register:A("photo"),kinds:"user"}),(0,h.jsx)(w,{type:"submit",text:"회원가입",className:"min-w-[200px] max-w-[600px] w-full mb-4",primary:!0}),(0,h.jsx)(w,{type:"button",text:"로그인하러 가기",className:"min-w-[200px] max-w-[600px] w-full mb-4 bg-gray-400 hover:bg-gray-500 focus:ring-gray-400",onClick:function(){return y.push("/login")},primary:!0})]})]})};b.default=x},5152:function(a,b,c){a.exports=c(638)},9815:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(943),e=c(3375),f=c(1566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[6819,7536,2483,9774,2888,179],function(){var b;return a(a.s=7805)}),_N_E=a.O()}])