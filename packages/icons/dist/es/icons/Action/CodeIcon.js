import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function l(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var c=function(e){return t("svg",l(l({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.2 12l-3.9 3.9a.984.984 0 0 0 0 1.4c.39.39 1.01.39 1.4 0l4.59-4.6a.996.996 0 0 0 0-1.41L16.7 6.7a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l3.9 3.9zM4.8 12l3.9 3.9c.39.39.39 1.01 0 1.4a.984.984 0 0 1-1.4 0l-4.59-4.6a.996.996 0 0 1 0-1.41L7.3 6.7a.984.984 0 0 1 1.4 0c.39.39.39 1.01 0 1.4L4.8 12z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,g=e.margin,h=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:g,fillOpacity:h},b),{children:t(c,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="CodeIcon";var f=Object.assign(a,{Style:i});export default f;
