"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),c=require("../../SvgIcon/SvgIcon.styled.js");function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.835 5h3.17c1.1 0 2 .9 1.99 2v12c0 1.1-.9 2-2 2h-7v-2.09a6.02 6.02 0 0 0 4.89-4.75c.12-.61-.38-1.16-.99-1.16-.48 0-.88.35-.98.83a3.992 3.992 0 0 1-3.91 3.17c-1.93 0-3.53-1.36-3.92-3.17-.1-.48-.49-.83-.98-.83-.61 0-1.11.55-.99 1.16.48 2.43 2.44 4.33 4.89 4.75V21h-7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17l1.23-1.35c.38-.41.92-.65 1.48-.65h4.24c.56 0 1.1.24 1.47.65L16.835 5zm-4.83 10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,n=e.iconColor,s=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,h=e.margin,p=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(c.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:n,bgColor:s,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:h,fillOpacity:p},g),{children:i.jsx(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="PermCameraMicIcon";var v=Object.assign(s,{Style:c.SvgIconStyled});module.exports=v;
