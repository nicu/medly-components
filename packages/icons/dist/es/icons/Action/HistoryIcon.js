import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",c(c({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.144 12.002c0-5.05 4.17-9.14 9.26-9 4.69.13 8.61 4.05 8.74 8.74.14 5.09-3.95 9.26-9 9.26-2.09 0-4-.71-5.52-1.91-.47-.36-.5-1.07-.08-1.49.36-.36.92-.39 1.32-.08 1.18.93 2.67 1.48 4.28 1.48 3.9 0 7.05-3.19 7-7.1-.05-3.72-3.18-6.85-6.9-6.9-3.92-.05-7.1 3.1-7.1 7h1.79a.5.5 0 0 1 .36.85l-2.79 2.8c-.2.2-.51.2-.71 0l-2.79-2.8c-.32-.31-.1-.85.35-.85h1.79zm8-3.25c0-.41.34-.75.75-.75s.75.34.75.74v3.4l2.88 1.71c.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26l-3.12-1.85c-.3-.18-.49-.51-.49-.86v-3.68z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,n=r.variant,a=r.iconColor,f=r.bgColor,p=r.hoverBgColor,s=r.hoverIconColor,v=r.withHoverEffect,h=r.margin,g=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="HistoryIcon";var f=Object.assign(a,{Style:i});export default f;
