"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.69 1.926c.9.86 1.7 1.82 2.4 2.85 1.83 2.71 2.91 5.95 2.91 9.44 0 4.42-3.58 8-8 8s-8-3.58-8-8c0-2.54.68-4.92 1.87-6.96.16-.29.33-.56.51-.83.24-.37.79-.24.9.18.06.22.1.34.2.54.55 1.33 1.81 2.26 3.35 2.26 2.06 0 3.41-1.67 3.41-3.73 0-1.11-.2-2.35-.39-3.29-.1-.48.49-.8.84-.46zm-6.2 14.15c0 1.74 1.44 3.14 3.22 3.14 2.65 0 4.8-2.15 4.79-4.8 0-1.07-.12-2.13-.35-3.15-.08-.37-.54-.49-.82-.23-1.05.99-2.56 1.62-4.03 1.92-1.76.36-2.81 1.5-2.81 3.12z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,s=e.bgColor,f=e.hoverBgColor,u=e.hoverIconColor,v=e.withHoverEffect,p=e.margin,g=e.fillOpacity,h=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:s,hoverBgColor:f,hoverIconColor:u,withHoverEffect:v,margin:p,fillOpacity:g},h),{children:i.jsx(a,Object.assign({},h,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="WhatshotIcon";var f=Object.assign(s,{Style:n.SvgIconStyled});module.exports=f;
