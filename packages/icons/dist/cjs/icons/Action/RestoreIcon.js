"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.144 12.002c0-5.06 4.17-9.14 9.26-9 4.69.13 8.61 4.05 8.74 8.74.14 5.09-3.95 9.26-9 9.26-2.08 0-4-.71-5.52-1.9-.47-.37-.5-1.07-.08-1.5.36-.36.92-.39 1.32-.08 1.18.93 2.67 1.48 4.28 1.48 3.9 0 7.05-3.19 7-7.1-.05-3.72-3.18-6.85-6.9-6.9-3.92-.05-7.1 3.1-7.1 7h1.8c.44 0 .67.54.35.85l-2.79 2.8c-.2.2-.51.2-.71 0l-2.79-2.8c-.32-.31-.1-.85.35-.85h1.79zm8-3.25c0-.41.34-.75.75-.75.42 0 .75.34.75.74v3.4l2.88 1.71c.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26l-3.12-1.85c-.3-.18-.49-.51-.49-.86v-3.68z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,s=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,p=e.margin,g=e.fillOpacity,h=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:s,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:p,fillOpacity:g},h),{children:i.jsx(a,Object.assign({},h,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="RestoreIcon";var v=Object.assign(s,{Style:n.SvgIconStyled});module.exports=v;
