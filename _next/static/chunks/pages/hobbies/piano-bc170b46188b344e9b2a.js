_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{JjkU:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),i=(n("q1tI"),n("soUV"));t.default=function(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Piano"}),Object(r.jsx)("p",{children:"Growing up my parents forced me to play piano. Later I was extremely grateful for this and continued to pursue import PropTypes from 'prop-types' despite mouting life complexities. Eventually other things in life took priority unfortunately there are only so many hours in the day and so much will power inside me. That being said I still have a handful of songs prepared at a performance level. Here are two of them."}),Object(r.jsx)("iframe",{width:"650",height:"325",src:"https://www.youtube.com/embed/Kuq9BnbHOTQ?start=8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(r.jsx)("iframe",{width:"650",height:"325",src:"https://www.youtube.com/embed/QekGlFAYakI?start=8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})}},M5wo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hobbies/piano",function(){return n("JjkU")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),i=n("7KCV");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),s=n("elyg"),c=n("nOHt"),l=n("vNVm"),a={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),i=n&&n.pathname||"/",d=o.default.useMemo((function(){var t=(0,s.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,s.resolveHref)(i,e.as):c||o}}),[i,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var k=o.Children.only(h),O=k&&"object"===typeof k&&k.ref,x=(0,l.useIntersection)({rootMargin:"200px"}),w=r(x,2),g=w[0],y=w[1],L=o.default.useCallback((function(e){g(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,g]);(0,o.useEffect)((function(){var e=y&&t&&(0,s.isLocalURL)(f),r="undefined"!==typeof m?m:n&&n.locale,i=a[f+"%"+p+(r?"%"+r:"")];e&&!i&&u(n,f,p,{locale:r})}),[p,f,y,m,t,n]);var E={ref:L,onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,p,j,b,v,m)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===k.type&&!("href"in k.props)){var M="undefined"!==typeof m?m:n&&n.locale,N=(0,s.getDomainLocale)(p,M,n&&n.locales,n&&n.domainLocales);E.href=N||(0,s.addBasePath)((0,s.addLocale)(p,M,n&&n.defaultLocale))}return o.default.cloneElement(k,E)};t.default=d},soUV:function(e,t,n){"use strict";var r=n("nKUr"),i=n("q1tI"),o=n("YFqc"),s=n.n(o);function c(e){var t=Object(i.useState)(!1),n=t[0],o=t[1];return Object(r.jsxs)("div",{onMouseLeave:function(){return o(!1)},children:[Object(r.jsx)("div",{onMouseEnter:function(){return o(!0)},className:"navbar-menu-title",children:e.title}),Object(r.jsx)("ul",{className:"navbar-dropdown-ul ".concat(n?"visible":"invisible"),children:e.subLinks.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/"+e.folderName+"/"+t.link,children:Object(r.jsx)("a",{children:t.title})})})}))})]})}var l=function(){return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("div",{className:"navbar-name",children:"Aaron Didner"}),Object(r.jsxs)("ul",{className:"navbar-main-ul",children:[Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/professionalprojects",children:Object(r.jsx)("a",{children:"Professional Projects"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/personalprojects",children:Object(r.jsx)("a",{children:"Personal Projects"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(c,{title:"Interesting Asides",folderName:"interestingasides",subLinks:[{link:"cute",title:"Cute"},{link:"funfacts",title:"Fun Facts"},{link:"lessons",title:"Lessons Learned"},{link:"memes",title:"Best Memes"},{link:"tiktoks",title:"Best TikToks"}]})}),Object(r.jsx)("li",{children:Object(r.jsx)(c,{title:"Favorites",folderName:"favorites",subLinks:[{link:"books",title:"Books"},{link:"movies",title:"Movies"},{link:"shows",title:"Shows"},{link:"songs",title:"Songs"},{link:"videogames",title:"Games"}]})}),Object(r.jsx)("li",{children:Object(r.jsx)(c,{title:"Hobbies",folderName:"hobbies",subLinks:[{link:"coding",title:"Coding"},{link:"cooking",title:"Cooking"},{link:"dance",title:"Dance"},{link:"dungeonsanddragons",title:"D&D"},{link:"exercise",title:"Exercise"},{link:"piano",title:"Piano"},{link:"reading",title:"Reading"},{link:"tv",title:"TV"}]})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.a,{href:"/selfimprovement",children:Object(r.jsx)("a",{children:"Self Improvement"})})})]})]})};t.a=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),e.children]})}},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),i=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,o.useRef)(),a=(0,o.useState)(!1),u=r(a,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){c||d||(0,s.default)((function(){return f(!0)}))}),[d]),[p,d]};var o=n("q1tI"),s=i(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var l=new Map}},[["M5wo",0,2,1]]]);