"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),o=require("react"),i=(e(o),require("react/jsx-runtime")),c=require("../../SvgIcon/SvgIcon.styled.js");function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){return i.jsx("svg",l(l({},e),{},{children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.81 2.14c.39-.39 1.03-.39 1.42 0l18.31 18.31a.996.996 0 1 1-1.41 1.41l-2-2H1c-.55 0-1-.45-1-1s.45-1 1-1h2.98c-1.09-.01-1.97-.9-1.97-1.99L2 15.86s0-9.08-.01-9.98c0-.9.66-1.47.66-1.47l-.84-.86a.996.996 0 0 1 0-1.41zM21.8 17.86H23c.55 0 1 .45 1 1 0 .33-.17.61-.41.79l-1.79-1.79zm-14.8-3c.31-1.48.94-2.93 2.08-4.05l1.59 1.59c-1.54.38-2.71 1.17-3.67 2.46zm6-6.85v.98c-.02 0-.04.01-.06.02L7.8 3.88h12.22c1.09 0 1.98.89 1.98 1.98v10c0 .61-.27 1.14-.7 1.51l-5.58-5.58.89-.83c.21-.2.21-.53 0-.73L15 8.73l-1.16-1.09a.502.502 0 0 0-.84.37z",fill:"#000",fillOpacity:".54"})}))};a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o.memo((function(e){var r=e.size,o=e.variant,n=e.iconColor,s=e.bgColor,v=e.hoverBgColor,f=e.hoverIconColor,u=e.withHoverEffect,p=e.margin,h=e.fillOpacity,g=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return i.jsx(c.SvgIconStyled,Object.assign({},l({size:r,variant:o,iconColor:n,bgColor:s,hoverBgColor:v,hoverIconColor:f,withHoverEffect:u,margin:p,fillOpacity:h},g),{children:i.jsx(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="StopScreenShareIcon";var v=Object.assign(s,{Style:c.SvgIconStyled});module.exports=v;
