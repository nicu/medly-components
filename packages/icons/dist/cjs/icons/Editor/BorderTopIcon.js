"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var h=function(e){return i.jsx("svg",c(c({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm2 5V7H3v2h2zm2 4h2v-2H7v2zm0 8h2v-2H7v2zm6-8h-2v-2h2v2zm-2 8h2v-2h-2v2zm-8-4v-2h2v2H3zm2 4v-2H3v2h2zm-2-8v-2h2v2H3zm10 4h-2v-2h2v2zm8-8V7h-2v2h2zm-2 4v-2h2v2h-2zm2 2v2h-2v-2h2zm-6 6h2v-2h-2v2zM13 9h-2V7h2v2zm8 12v-2h-2v2h2zm-4-8h-2v-2h2v2z",fill:"#000",fillOpacity:".54"})}))};h.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var l=o.memo((function(e){var r=e.size,o=e.variant,v=e.iconColor,l=e.bgColor,a=e.hoverBgColor,s=e.hoverIconColor,f=e.withHoverEffect,u=e.margin,m=e.fillOpacity,p=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},c({size:r,variant:o,iconColor:v,bgColor:l,hoverBgColor:a,hoverIconColor:s,withHoverEffect:f,margin:u,fillOpacity:m},p),{children:i.jsx(h,Object.assign({},p,{width:"1em",height:"1em"}),void 0)}),void 0)}));l.displayName="BorderTopIcon";var a=Object.assign(l,{Style:n.SvgIconStyled});module.exports=a;
