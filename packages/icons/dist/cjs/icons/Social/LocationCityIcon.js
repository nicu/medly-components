"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var v=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 6.121v5.17h4c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h4v-1.17c0-.53.21-1.04.59-1.42l1.7-1.7a.996.996 0 0 1 1.41 0l1.71 1.71c.38.37.59.88.59 1.41zM5 19.291h2v-2H5v2zm2-4H5v-2h2v2zm-2-4h2v-2H5v2zm8 8h-2v-2h2v2zm-2-4h2v-2h-2v2zm2-4h-2v-2h2v2zm-2-4h2v-2h-2v2zm8 12h-2v-2h2v2zm-2-4h2v-2h-2v2z",fill:"#000",fillOpacity:".54"})}))};v.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var h=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,h=e.bgColor,a=e.hoverBgColor,s=e.hoverIconColor,f=e.withHoverEffect,u=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:h,hoverBgColor:a,hoverIconColor:s,withHoverEffect:f,margin:u,fillOpacity:p},g),{children:i.jsx(v,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));h.displayName="LocationCityIcon";var a=Object.assign(h,{Style:n.SvgIconStyled});module.exports=a;
