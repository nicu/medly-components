"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.003 8.092c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-1.6l3.55 3.55 4.95-4.95a.996.996 0 1 1 1.41 1.41l-5.66 5.66a.996.996 0 0 1-1.41 0l-4.24-4.24v1.57zm-6.09 8.2c6.32-5.59 15.85-5.59 22.18 0 .83.74.84 2.05.04 2.84l-1.2 1.2c-.71.71-1.83.77-2.62.15l-1.96-1.56c-.47-.38-.75-.95-.75-1.55v-2.58c-2.99-.98-6.22-.97-9.2 0v2.57c0 .61-.28 1.18-.75 1.55l-1.97 1.57c-.78.62-1.91.56-2.62-.15l-1.2-1.2c-.79-.79-.79-2.1.05-2.84z",fill:"#000",fillOpacity:".54"})}))};s.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,a=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,p=e.margin,h=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:a,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:p,fillOpacity:h},g),{children:i.jsx(s,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="PhoneMissedIcon";var v=Object.assign(a,{Style:n.SvgIconStyled});module.exports=v;
