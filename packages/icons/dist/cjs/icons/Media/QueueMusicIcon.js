"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),c=require("../../SvgIcon/SvgIcon.styled.js");function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 5.001h10c.55 0 1 .45 1 1s-.45 1-1 1h-10c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h10c.55 0 1 .45 1 1s-.45 1-1 1h-10c-.55 0-1-.45-1-1s.45-1 1-1zm0 6h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zm13-8c0-1.1.9-2 2-2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v9c0 1.84-1.64 3.28-3.54 2.95-1.21-.21-2.2-1.2-2.41-2.41a2.995 2.995 0 0 1 2.95-3.54c.35 0 .69.07 1 .18v-6.18z",fill:"#000",fillOpacity:".54"})}))};s.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o.memo((function(e){var r=e.size,o=e.variant,n=e.iconColor,a=e.bgColor,u=e.hoverBgColor,h=e.hoverIconColor,v=e.withHoverEffect,f=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(c.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:n,bgColor:a,hoverBgColor:u,hoverIconColor:h,withHoverEffect:v,margin:f,fillOpacity:p},g),{children:i.jsx(s,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="QueueMusicIcon";var u=Object.assign(a,{Style:c.SvgIconStyled});module.exports=u;
