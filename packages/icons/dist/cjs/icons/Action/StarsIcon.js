"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",c(c({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12zm10 3.45l3.22 1.94c.38.23.84-.11.74-.54l-.85-3.67 2.83-2.45a.5.5 0 0 0-.28-.88l-3.74-.32-1.46-3.44a.498.498 0 0 0-.92 0l-1.46 3.45-3.74.32c-.44.04-.62.59-.29.88l2.83 2.45-.85 3.66c-.1.43.37.77.75.54L12 15.45z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,l=e.iconColor,s=e.bgColor,f=e.hoverBgColor,u=e.hoverIconColor,v=e.withHoverEffect,p=e.margin,g=e.fillOpacity,b=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},c({size:r,variant:o,iconColor:l,bgColor:s,hoverBgColor:f,hoverIconColor:u,withHoverEffect:v,margin:p,fillOpacity:g},b),{children:i.jsx(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="StarsIcon";var f=Object.assign(s,{Style:n.SvgIconStyled});module.exports=f;
