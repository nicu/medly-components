"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{d:"M21.5 14.66c0-.36-.19-.69-.49-.89L13.5 9.08v-5.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5l-7.51 4.69a1.05 1.05 0 0 0 .87 1.89l6.64-2.08v5.5l-1.8 1.35a.48.48 0 0 0-.2.4v.59c0 .33.32.57.64.48l2.86-.82 2.86.82c.32.09.64-.15.64-.48v-.59a.48.48 0 0 0-.2-.4l-1.8-1.35v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,s=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,p=e.margin,g=e.fillOpacity,b=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:s,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:p,fillOpacity:g},b),{children:i.jsx(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="LocalAirportIcon";var v=Object.assign(s,{Style:n.SvgIconStyled});module.exports=v;
