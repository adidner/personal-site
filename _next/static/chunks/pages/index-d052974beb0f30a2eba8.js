_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},QeBL:function(e,n,t){"use strict";t.r(n);var i=t("nKUr"),r=(t("q1tI"),t("soUV"));n.default=function(){return Object(i.jsxs)(r.a,{children:[Object(i.jsx)("h4",{children:"Hi, my name is"}),Object(i.jsx)("h1",{children:"Aaron Didner"}),Object(i.jsx)("h2",{children:"I build Web and Mobile apps"}),Object(i.jsx)("p",{children:"By day I work as a software engineer at Alion Science and Technology, where I work in a React, Typescript, C++ world."}),Object(i.jsx)("p",{children:"By night I work on all sorts of random projects in React Native (Mobile Apps), React, Python and more."}),Object(i.jsx)("a",{href:"mailto:adidner@gmail.com",className:"email-link",children:"Get In Touch"}),Object(i.jsx)("div",{children:"test"})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var i=t("zoAU"),r=t("7KCV");n.__esModule=!0,n.default=void 0;var o=r(t("q1tI")),s=t("elyg"),c=t("nOHt"),l=t("vNVm"),a={};function u(e,n,t,i){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;a[n+"%"+t+(r?"%"+r:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),r=t&&t.pathname||"/",d=o.default.useMemo((function(){var n=(0,s.resolveHref)(r,e.href,!0),t=i(n,2),o=t[0],c=t[1];return{href:o,as:e.as?(0,s.resolveHref)(r,e.as):c||o}}),[r,e.href,e.as]),f=d.href,j=d.as,h=e.children,b=e.replace,v=e.shallow,p=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var O=o.Children.only(h),k=O&&"object"===typeof O&&O.ref,x=(0,l.useIntersection)({rootMargin:"200px"}),g=i(x,2),y=g[0],w=g[1],L=o.default.useCallback((function(e){y(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,y]);(0,o.useEffect)((function(){var e=w&&n&&(0,s.isLocalURL)(f),i="undefined"!==typeof m?m:t&&t.locale,r=a[f+"%"+j+(i?"%"+i:"")];e&&!r&&u(t,f,j,{locale:i})}),[j,f,w,m,n,t]);var E={ref:L,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,i,r,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=i.indexOf("#")<0),n[r?"replace":"push"](t,i,{shallow:o,locale:l,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,t,f,j,b,v,p,m)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(t,f,j,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var N="undefined"!==typeof m?m:t&&t.locale,M=(0,s.getDomainLocale)(j,N,t&&t.locales,t&&t.domainLocales);E.href=M||(0,s.addBasePath)((0,s.addLocale)(j,N,t&&t.defaultLocale))}return o.default.cloneElement(O,E)};n.default=d},soUV:function(e,n,t){"use strict";var i=t("nKUr"),r=t("q1tI"),o=t("YFqc"),s=t.n(o);function c(e){var n=Object(r.useState)(!1),t=n[0],o=n[1];return Object(i.jsxs)("div",{onMouseLeave:function(){return o(!1)},children:[Object(i.jsx)("div",{onMouseEnter:function(){return o(!0)},className:"navbar-menu-title",children:e.title}),Object(i.jsx)("ul",{className:"navbar-dropdown-ul ".concat(t?"visible":"invisible"),children:e.subLinks.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(s.a,{href:"/"+e.folderName+"/"+n.link,children:Object(i.jsx)("a",{children:n.title})})})}))})]})}var l=function(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("div",{className:"navbar-name",children:"Aaron Didner"}),Object(i.jsxs)("ul",{className:"navbar-main-ul",children:[Object(i.jsx)("li",{children:Object(i.jsx)(s.a,{href:"/",children:Object(i.jsx)("a",{children:"Home"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.a,{href:"/professionalprojects",children:Object(i.jsx)("a",{children:"Professional Projects"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.a,{href:"/personalprojects",children:Object(i.jsx)("a",{children:"Personal Projects"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(c,{title:"Interesting Asides",folderName:"interestingasides",subLinks:[{link:"cute",title:"Cute"},{link:"funfacts",title:"Fun Facts"},{link:"lessons",title:"Lessons Learned"},{link:"memes",title:"Best Memes"},{link:"tiktoks",title:"Best TikToks"}]})}),Object(i.jsx)("li",{children:Object(i.jsx)(c,{title:"Favorites",folderName:"favorites",subLinks:[{link:"books",title:"Books"},{link:"movies",title:"Movies"},{link:"shows",title:"Shows"},{link:"songs",title:"Songs"},{link:"videogames",title:"Games"}]})}),Object(i.jsx)("li",{children:Object(i.jsx)(c,{title:"Hobbies",folderName:"hobbies",subLinks:[{link:"coding",title:"Coding"},{link:"cooking",title:"Cooking"},{link:"dance",title:"Dance"},{link:"dungeonsanddragons",title:"D&D"},{link:"exercise",title:"Exercise"},{link:"piano",title:"Piano"},{link:"reading",title:"Reading"},{link:"tv",title:"TV"}]})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.a,{href:"/selfimprovement",children:Object(i.jsx)("a",{children:"Self Improvement"})})})]})]})};n.a=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),e.children]})}},vNVm:function(e,n,t){"use strict";var i=t("zoAU"),r=t("AroE");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,r=(0,o.useRef)(),a=(0,o.useState)(!1),u=i(a,2),d=u[0],f=u[1],j=(0,o.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),t||d||e&&e.tagName&&(r.current=function(e,n,t){var i=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:r,elements:i}),t}(t),r=i.id,o=i.observer,s=i.elements;return s.set(e,n),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),l.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,o.useEffect)((function(){c||d||(0,s.default)((function(){return f(!0)}))}),[d]),[j,d]};var o=t("q1tI"),s=r(t("0G5g")),c="undefined"!==typeof IntersectionObserver;var l=new Map}},[["/EDR",0,2,1]]]);