"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),c=require("../../SvgIcon/SvgIcon.styled.js");function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.75 7c0 1.24-1.01 2.25-2.25 2.25S9.75 11.24 9.75 10 10.76 7.75 12 7.75s2.25 1.01 2.25 2.25zM12 14c1.5 0 4.5.75 4.5 2.25V17h-9v-.75c0-1.5 3-2.25 4.5-2.25zm-6 5h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,n=e.iconColor,s=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,p=e.margin,h=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(c.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:n,bgColor:s,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:p,fillOpacity:h},g),{children:i.jsx(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="PortraitIcon";var v=Object.assign(s,{Style:c.SvgIconStyled});module.exports=v;
