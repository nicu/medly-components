"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),c=require("../../SvgIcon/SvgIcon.styled.js");function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.17 3.88L4.1 6.44c-.42.35-1.05.3-1.4-.13a1 1 0 0 1 .12-1.41L5.9 2.34a.988.988 0 0 1 1.4.13c.36.42.3 1.05-.13 1.41zM21.18 4.9L18.1 2.34c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13a1 1 0 0 0-.12-1.41zm-5.31 10.24l-3.37-2V8.61c0-.4-.32-.72-.72-.72h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l3.65 2.19c.34.2.78.1.98-.24.21-.35.1-.8-.25-1zM12 3.89a9 9 0 1 0 .001 18.002A9 9 0 0 0 12 3.891zm-7 9c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7-7 3.14-7 7z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,n=e.iconColor,s=e.bgColor,f=e.hoverBgColor,u=e.hoverIconColor,v=e.withHoverEffect,p=e.margin,g=e.fillOpacity,h=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(c.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:n,bgColor:s,hoverBgColor:f,hoverIconColor:u,withHoverEffect:v,margin:p,fillOpacity:g},h),{children:i.jsx(a,Object.assign({},h,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="AccessAlarmIcon";var f=Object.assign(s,{Style:c.SvgIconStyled});module.exports=f;
