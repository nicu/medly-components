"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5 2.27a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 14.46h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5zm1.14-3.5h1.86c1.1 0 2 .9 2 2v4.5c0 .55-.45 1-1 1s-1-.45-1-1v-4h-4.98c-1.46 0-2.45-1.57-1.85-2.9l1.83-4.1h-2.21l-.3.71c-.2.47-.71.72-1.2.58-.57-.16-.89-.77-.68-1.33l.28-.76c.33-.73 1.06-1.2 1.87-1.2h5.2c1.48 0 2.46 1.5 1.85 2.83l-1.67 3.67z",fill:"#000",fillOpacity:".54"})}))};s.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,a=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,h=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:a,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:h,fillOpacity:p},g),{children:i.jsx(s,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="AccessibleForwardIcon";var v=Object.assign(a,{Style:n.SvgIconStyled});module.exports=v;
