"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 17c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-1.1.9-2 2-2s2 .9 2 2v10zm4 0V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 1.1-.9 2-2 2s-2-.9-2-2z",fill:"#000",fillOpacity:".54"})}))};s.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,a=e.bgColor,u=e.hoverBgColor,v=e.hoverIconColor,f=e.withHoverEffect,p=e.margin,g=e.fillOpacity,b=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:a,hoverBgColor:u,hoverIconColor:v,withHoverEffect:f,margin:p,fillOpacity:g},b),{children:i.jsx(s,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="PauseIcon";var u=Object.assign(a,{Style:n.SvgIconStyled});module.exports=u;
