"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var v=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 3H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3 9h2V7H3v2zm0 4h2v-2H3v2zm0 4h2v-2H3v2zm2 2v2a2 2 0 0 1-2-2h2zm12 2h-2v-2h2v2zm-7-6h8c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm1 6h2v-2h-2v2zm-2 0H7v-2h2v2z",fill:"#000",fillOpacity:".54"})}))};v.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,a=e.bgColor,h=e.hoverBgColor,s=e.hoverIconColor,f=e.withHoverEffect,u=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:a,hoverBgColor:h,hoverIconColor:s,withHoverEffect:f,margin:u,fillOpacity:p},g),{children:i.jsx(v,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="FlipToFrontIcon";var h=Object.assign(a,{Style:n.SvgIconStyled});module.exports=h;
