(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5075)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(s){o=!0,a=s}finally{try{t||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),l=r(387),s=r(7190);var c={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var n=t(i.resolveHref(o,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?i.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,x=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,w=t(s.useIntersection({rootMargin:"200px"}),2),b=w[0],m=w[1],_=a.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);a.default.useEffect((function(){var e=m&&r&&i.isLocalURL(d),n="undefined"!==typeof j?j:o&&o.locale,t=c[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(o,d,p,{locale:n})}),[p,d,m,j,r,o]);var C={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:s,scroll:l}))}(e,o,d,p,v,y,x,j)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof j?j:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);C.href=M||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(n,C)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(s){o=!0,a=s}finally{try{t||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,s=o.useRef(),c=t(o.useState(!1),2),u=c[0],f=c[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||u||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},5075:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=(r(7294),r(1664));function a(){return(0,t.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34 26h-2v-1c0-6.627-5.373-12-12-12S8 18.374 8 25v1H6a1 1 0 01-1-1c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15a1 1 0 01-1 1z",fill:"url(#paint0_linear)"}),(0,t.jsx)("path",{d:"M27 25a7 7 0 00-14 0v1h2a1 1 0 001-1 4 4 0 018 0 1 1 0 001 1h2v-1z",fill:"url(#paint1_linear)"}),(0,t.jsx)("path",{d:"M30.999 25C30.999 18.925 26.075 14 20 14S9.001 18.926 9.001 25H9v1h3v-1a8 8 0 0116 0v1h3v-1h-.001z",fill:"url(#paint2_linear)"}),(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"paint0_linear",x1:5,y1:26,x2:35,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#1877F2"}),(0,t.jsx)("stop",{offset:1,stopColor:"#04A4F4"})]}),(0,t.jsxs)("linearGradient",{id:"paint1_linear",x1:13,y1:26,x2:27,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#F02849"}),(0,t.jsx)("stop",{offset:1,stopColor:"#F5533D"})]}),(0,t.jsxs)("linearGradient",{id:"paint2_linear",x1:9,y1:26,x2:31,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#45BD62"}),(0,t.jsx)("stop",{offset:1,stopColor:"#2ABBA7"})]})]})]})}n.default=function(){return(0,t.jsx)("div",{style:{width:"100%",padding:"100px",alignContent:"center"},children:(0,t.jsxs)("header",{children:[(0,t.jsx)(a,{}),(0,t.jsx)("h1",{style:{margin:0},children:"Welcome to Plasmic!"}),(0,t.jsx)("h4",{children:(0,t.jsx)("a",{style:{color:"blue"},href:"https://www.plasmic.app/learn/",target:"_blank",rel:"noopener noreferrer",children:"Learn Plasmic"})}),(0,t.jsx)("h3",{children:"Your pages:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(o.default,{href:"/dashboard",children:(0,t.jsx)("a",{style:{color:"blue"},children:"Homepage - /dashboard"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(o.default,{href:"/services",children:(0,t.jsx)("a",{style:{color:"blue"},children:"Services - /services"})})})]}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"Note: Remember to remove this file if you introduce a Page component at the '/' path."})})]})})}},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);