(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,n=o(7273).Z,l=r(o(7294)),a=o(1003),u=o(4465),c=o(2692),i=o(8245),f=o(9246),s=o(227),d=o(3468);let p={};function y(e,t,o,r){if(!e||!a.isLocalURL(t))return;Promise.resolve(e.prefetch(t,o,r)).catch(e=>{});let n=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+o+(n?"%"+n:"")]=!0}let v=l.default.forwardRef(function(e,t){let o,r;let{href:v,as:h,children:b,prefetch:m,passHref:g,replace:C,shallow:x,scroll:O,locale:_,onClick:j,onMouseEnter:E,onTouchStart:L,legacyBehavior:M=!0!==Boolean(!0)}=e,w=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,M&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let R=!1!==m,k=l.default.useContext(c.RouterContext),P=l.default.useContext(i.AppRouterContext);P&&(k=P);let{href:N,as:I}=l.default.useMemo(()=>{let[e,t]=a.resolveHref(k,v,!0);return{href:e,as:h?a.resolveHref(k,h):t||e}},[k,v,h]),S=l.default.useRef(N),T=l.default.useRef(I);M&&(r=l.default.Children.only(o));let U=M?r&&"object"==typeof r&&r.ref:t,[z,A,B]=f.useIntersection({rootMargin:"200px"}),D=l.default.useCallback(e=>{(T.current!==I||S.current!==N)&&(B(),T.current=I,S.current=N),z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[I,U,N,B,z]);l.default.useEffect(()=>{let e=A&&R&&a.isLocalURL(N),t=void 0!==_?_:k&&k.locale,o=p[N+"%"+I+(t?"%"+t:"")];e&&!o&&y(k,N,I,{locale:t})},[I,N,A,_,R,k]);let K={ref:D,onClick(e){M||"function"!=typeof j||j(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,r,n,u,c,i,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(o)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:u,locale:i,scroll:c}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!s})};f?l.default.startTransition(y):y()}(e,k,N,I,C,x,O,_,Boolean(P),R)},onMouseEnter(e){M||"function"!=typeof E||E(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!R&&P)&&a.isLocalURL(N)&&y(k,N,I,{priority:!0})},onTouchStart(e){M||"function"!=typeof L||L(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!R&&P)&&a.isLocalURL(N)&&y(k,N,I,{priority:!0})}};if(!M||g||"a"===r.type&&!("href"in r.props)){let H=void 0!==_?_:k&&k.locale,Z=k&&k.isLocaleDomain&&s.getDomainLocale(I,H,k.locales,k.domainLocales);K.href=Z||d.addBasePath(u.addLocale(I,H,k&&k.defaultLocale))}return M?l.default.cloneElement(r,K):l.default.createElement("a",Object.assign({},w,K),o)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:c}=e,i=c||!l,[f,s]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!i&&!f&&d&&d.tagName){let e=function(e,t,o){let{id:r,observer:n,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=a.get(r)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:n},u.push(o),a.set(o,t),t}(o);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(r);let t=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&u.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!f){let r=n.requestIdleCallback(()=>s(!0));return()=>n.cancelIdleCallback(r)}},[d,i,o,t,f]);let y=r.useCallback(()=>{s(!1)},[]);return[p,f,y]};var r=o(7294),n=o(4686);let l="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,o(2648).Z)(o(7294));let n=r.default.createContext(null);t.AppRouterContext=n;let l=r.default.createContext(null);t.LayoutRouterContext=l;let a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;let u=r.default.createContext(null);t.TemplateContext=u},1664:function(e,t,o){e.exports=o(1551)},8357:function(e,t,o){"use strict";o.d(t,{w_:function(){return c}});var r=o(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),a=function(){return(a=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},u=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};function c(e){return function(t){return r.createElement(i,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,o){return r.createElement(t.tag,a({key:o},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var o,n=e.attr,l=e.size,c=e.title,i=u(e,["attr","size","title"]),f=l||t.size||"1em";return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:o,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(n)}}}]);