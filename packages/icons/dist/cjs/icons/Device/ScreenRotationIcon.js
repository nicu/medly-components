"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.61 1.391c-1.57-.83-3.55-1.43-5.8-1.38-.18 0-.26.22-.14.35l3.48 3.48 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74zm-9.5.35c.58-.59 1.53-.59 2.12 0L22.25 13.76c.59.58.59 1.53 0 2.12l-6.36 6.359c-.58.59-1.53.59-2.12 0L1.75 10.22a1.49 1.49 0 0 1 0-2.12l6.36-6.359zm-4.59 8.13l10.6 10.598c.39.39 1.03.39 1.42.01l4.95-4.95a.996.996 0 0 0 0-1.41L9.88 3.512a.996.996 0 0 0-1.41 0l-4.95 4.95a.996.996 0 0 0 0 1.41zm4 11.608l1.33-1.33 3.48 3.49c.12.13.04.35-.14.35-2.25.05-4.23-.55-5.8-1.38a12.01 12.01 0 0 1-6.24-8.75c-.07-.41.21-.8.62-.86.42-.07.8.21.86.62.55 3.49 2.8 6.4 5.89 7.86z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,s=e.bgColor,f=e.hoverBgColor,u=e.hoverIconColor,v=e.withHoverEffect,p=e.margin,g=e.fillOpacity,b=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:s,hoverBgColor:f,hoverIconColor:u,withHoverEffect:v,margin:p,fillOpacity:g},b),{children:i.jsx(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="ScreenRotationIcon";var f=Object.assign(s,{Style:n.SvgIconStyled});module.exports=f;
