"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",c(c({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.37 3.291l2.34 2.34a.99.99 0 0 1-.02 1.42l-3.12 3.12 1.22 1.22a.996.996 0 1 1-1.41 1.41l-.72-.72-8.77 8.77a.47.47 0 0 1-.35.15H3.5c-.28 0-.5-.22-.5-.5v-4.04c0-.14.05-.26.15-.36l8.77-8.77-.72-.72a.996.996 0 0 1 0-1.41c.39-.38 1.02-.39 1.41 0l1.23 1.21 3.12-3.12a.996.996 0 0 1 1.41 0zM5 17.081l1.92 1.92 8.06-8.06-1.92-1.92L5 17.081z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,l=e.iconColor,s=e.bgColor,f=e.hoverBgColor,u=e.hoverIconColor,v=e.withHoverEffect,p=e.margin,g=e.fillOpacity,b=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},c({size:r,variant:o,iconColor:l,bgColor:s,hoverBgColor:f,hoverIconColor:u,withHoverEffect:v,margin:p,fillOpacity:g},b),{children:i.jsx(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="ColorizeIcon";var f=Object.assign(s,{Style:n.SvgIconStyled});module.exports=f;
