import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c=function(r){return t("svg",l(l({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12zm10 3.45l3.22 1.94c.38.23.84-.11.74-.54l-.85-3.67 2.83-2.45a.5.5 0 0 0-.28-.88l-3.74-.32-1.46-3.44a.498.498 0 0 0-.92 0l-1.46 3.45-3.74.32c-.44.04-.62.59-.29.88l2.83 2.45-.85 3.66c-.1.43.37.77.75.54L12 15.45z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,n=r.variant,a=r.iconColor,f=r.bgColor,p=r.hoverBgColor,s=r.hoverIconColor,v=r.withHoverEffect,g=r.margin,h=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:g,fillOpacity:h},b),{children:t(c,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="StarsIcon";var f=Object.assign(a,{Style:i});export default f;
