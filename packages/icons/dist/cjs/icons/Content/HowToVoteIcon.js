"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",c(c({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.34 15.02c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95zm2.12-10.61L17 7.95l-4.95 4.95-3.54-3.54 4.95-4.95zm4.83 8.88l2.12 2.12c.38.38.59.89.59 1.42V20a2 2 0 0 1-2 2H5c-1.1 0-2-.9-2-2v-3.17c0-.53.21-1.04.58-1.42l2.12-2.12c.19-.18.44-.29.71-.29h.42l2 2H6.78L5 17h14l-1.77-2h-1.91l2-2h.27c.26 0 .52.11.7.29z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,l=e.iconColor,s=e.bgColor,f=e.hoverBgColor,u=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},c({size:r,variant:o,iconColor:l,bgColor:s,hoverBgColor:f,hoverIconColor:u,withHoverEffect:v,margin:h,fillOpacity:p},g),{children:i.jsx(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="HowToVoteIcon";var f=Object.assign(s,{Style:n.SvgIconStyled});module.exports=f;
