"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.537 6.155c.32.31.1.85-.35.85h-1.29v10h1.29a.5.5 0 0 1 .36.85l-2.29 2.29c-.2.2-.51.2-.71 0l-2.29-2.29c-.32-.31-.1-.85.35-.85h1.29v-10h-1.29a.5.5 0 0 1-.36-.85l2.29-2.3c.2-.2.51-.2.71 0l2.29 2.3zm13.36.85h-10c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0 10h-10c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm-10-6h10c.55 0 1 .45 1 1s-.45 1-1 1h-10c-.55 0-1-.45-1-1s.45-1 1-1z",fill:"#000",fillOpacity:".54"})}))};s.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,a=e.bgColor,h=e.hoverBgColor,v=e.hoverIconColor,f=e.withHoverEffect,u=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:a,hoverBgColor:h,hoverIconColor:v,withHoverEffect:f,margin:u,fillOpacity:p},g),{children:i.jsx(s,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="FormatLineSpacingIcon";var h=Object.assign(a,{Style:n.SvgIconStyled});module.exports=h;
