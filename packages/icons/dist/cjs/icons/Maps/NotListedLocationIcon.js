"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),n=require("../../SvgIcon/SvgIcon.styled.js");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.265c-3.86 0-7 3.14-7 7 0 4.17 4.42 9.92 6.23 12.11.4.48 1.13.48 1.53 0 1.82-2.19 6.24-7.94 6.24-12.11 0-3.86-3.14-7-7-7zm.88 13.75h-1.75v-1.75h1.75v1.75zm.29-3.9c.03-.05.06-.1.09-.14.237-.33.556-.608.878-.89.75-.655 1.52-1.328 1.332-2.72-.2-1.52-1.4-2.82-2.92-3.05-1.8-.28-3.39.82-3.89 2.4-.17.52.21 1.05.76 1.05h.16c.36 0 .65-.25.76-.58.29-.79 1.12-1.32 2.03-1.12.83.18 1.43 1 1.36 1.85-.06.68-.538 1.049-1.07 1.459-.547.422-1.151.888-1.41 1.781v.06h-.02c-.07.27-.11.57-.11.93h1.76c0-.23.04-.44.1-.63.01-.05.03-.09.05-.13.02-.05.04-.1.07-.15.01-.02.023-.04.035-.06a.745.745 0 0 0 .035-.06z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,c=e.iconColor,s=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,h=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(n.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:c,bgColor:s,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:h,fillOpacity:p},g),{children:i.jsx(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="NotListedLocationIcon";var v=Object.assign(s,{Style:n.SvgIconStyled});module.exports=v;
