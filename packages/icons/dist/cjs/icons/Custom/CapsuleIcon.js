"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{d:"M19.645 4.355a3.365 3.365 0 0 0-.345-.293A4.564 4.564 0 0 0 16.352 3c-.479 0-.93.08-1.355.186-.425.133-.85.319-1.222.584-.24.16-.478.372-.717.585L9.339 8.073l-3.984 3.985C4.478 12.96 4 14.103 4 15.352c0 1.248.478 2.417 1.355 3.293A4.619 4.619 0 0 0 8.648 20a4.619 4.619 0 0 0 3.294-1.355l3.985-3.984 3.718-3.719A4.619 4.619 0 0 0 21 7.648a4.619 4.619 0 0 0-1.355-3.293zm-8.287 13.732a3.82 3.82 0 0 1-2.71 1.116 3.82 3.82 0 0 1-2.709-1.116 3.832 3.832 0 0 1 0-5.445l3.427-3.426 5.445 5.445-3.453 3.426zM18.13 6.241a.287.287 0 0 1-.186.08.241.241 0 0 1-.186-.08 1.99 1.99 0 0 0-2.815 0 .257.257 0 0 1-.372 0 .257.257 0 0 1 0-.372 2.514 2.514 0 0 1 1.78-.744c.664 0 1.301.266 1.78.744a.257.257 0 0 1 0 .372z",fill:"#000"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,s=e.bgColor,u=e.hoverBgColor,f=e.hoverIconColor,v=e.withHoverEffect,p=e.margin,g=e.fillOpacity,b=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:s,hoverBgColor:u,hoverIconColor:f,withHoverEffect:v,margin:p,fillOpacity:g},b),{children:i.jsx(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="CapsuleIcon";var u=Object.assign(s,{Style:n.SvgIconStyled});module.exports=u;
