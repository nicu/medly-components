"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),c=require("../../SvgIcon/SvgIcon.styled.js");function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.052 5h3.9c.59 0 1.05.51.99 1.1l-1.54 15.43c-.1.82-.79 1.47-1.63 1.47h-1.7l-.02-8c0-4.23-3.1-6.84-6.78-7.69l-.12-1.21c-.05-.59.41-1.1 1-1.1h3.9V2c0-.55.45-1 1-1s1 .45 1 1v3zm-3 16c.55 0 1 .45 1 1s-.45 1-1 1h-13c-.55 0-1-.45-1-1s.45-1 1-1h13zm-.1-6c.62 0 1.11-.56.99-1.16-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16h12.8zm-13.9 3c0-.55.45-1 1-1h13c.55 0 1 .45 1 1s-.45 1-1 1h-13c-.55 0-1-.45-1-1z",fill:"#000",fillOpacity:".54"})}))};s.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o.memo((function(e){var r=e.size,o=e.variant,n=e.iconColor,a=e.bgColor,f=e.hoverBgColor,h=e.hoverIconColor,u=e.withHoverEffect,v=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(c.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:n,bgColor:a,hoverBgColor:f,hoverIconColor:h,withHoverEffect:u,margin:v,fillOpacity:p},g),{children:i.jsx(s,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="FastfoodIcon";var f=Object.assign(a,{Style:c.SvgIconStyled});module.exports=f;
