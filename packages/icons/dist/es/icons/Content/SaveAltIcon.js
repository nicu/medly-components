import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",c(c({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.88 10.79L13 12.67V4c0-.55-.45-1-1-1s-1 .45-1 1v8.67l-1.89-1.88A.996.996 0 1 0 7.7 12.2l3.59 3.59c.39.39 1.02.39 1.41 0l3.59-3.59a.996.996 0 1 0-1.41-1.41zM19 18v-5c0-.55.45-1 1-1s1 .45 1 1v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6c0-.55.45-1 1-1s1 .45 1 1v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,f=e.bgColor,v=e.hoverBgColor,p=e.hoverIconColor,s=e.withHoverEffect,h=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:v,hoverIconColor:p,withHoverEffect:s,margin:h,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="SaveAltIcon";var f=Object.assign(a,{Style:i});export default f;
