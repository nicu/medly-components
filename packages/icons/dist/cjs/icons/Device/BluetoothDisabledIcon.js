"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",c(c({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.414 9.176l1.47-1.47-1.88-1.88v2.94l-2-2v-3.36c0-.89 1.08-1.33 1.71-.7l4.29 4.29c.39.4.39 1.03 0 1.42l-2.18 2.17-1.41-1.41zm5.88 8.71L6.114 4.696a.996.996 0 1 0-1.41 1.41l5.89 5.89-4.89 4.89a.996.996 0 1 0 1.41 1.41l3.89-3.89v6.18c0 .89 1.08 1.34 1.71.71l3.59-3.59 1.59 1.59c.39.39 1.02.39 1.41 0 .38-.39.38-1.03-.01-1.41zm-6.29-3.48l1.88 1.88-1.88 1.88v-3.76z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,l=e.iconColor,s=e.bgColor,v=e.hoverBgColor,u=e.hoverIconColor,f=e.withHoverEffect,p=e.margin,g=e.fillOpacity,b=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},c({size:r,variant:o,iconColor:l,bgColor:s,hoverBgColor:v,hoverIconColor:u,withHoverEffect:f,margin:p,fillOpacity:g},b),{children:i.jsx(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="BluetoothDisabledIcon";var v=Object.assign(s,{Style:n.SvgIconStyled});module.exports=v;
