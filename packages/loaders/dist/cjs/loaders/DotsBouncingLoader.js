"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("@babel/runtime/helpers/defineProperty")),t=require("react"),n=(e(t),require("react/jsx-runtime")),i=require("../SvgLoader/SvgLoader.styled.js");function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var o=function(e){return n.jsxs("svg",s(s({},e),{},{children:[n.jsx("circle",{cx:"-.2em",cy:"50",r:".25em",children:n.jsx("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 15 ; 0 -15; 0 15",repeatCount:"indefinite",begin:".1"})}),n.jsx("circle",{cx:".5em",cy:"50",r:".25em",children:n.jsx("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 10 ; 0 -10; 0 10",repeatCount:"indefinite",begin:".2"})}),n.jsx("circle",{cx:"1.2em",cy:"50",r:".25em",children:n.jsx("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:".3"})})]}))};o.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var c=t.memo((function(e){return n.jsx(i.SvgLoaderStyled,Object.assign({},e,{children:n.jsx(o,Object.assign({},e,{width:"1em",height:"0.5em"}),void 0)}),void 0)}));c.displayName="DotsBouncingLoader";var u=Object.assign(c,{Style:i.SvgLoaderStyled});exports.DotsBouncingLoader=u;
