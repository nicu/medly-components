import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",c(c({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 18h10V5H7v14zm4-3h2v2h-2v-2zm-1.35-5.81h-.13c-.59 0-1.02-.58-.82-1.14.52-1.52 2.04-2.53 3.81-2.3 1.55.2 2.79 1.49 2.98 3.04.18 1.433-.603 2.13-1.354 2.799-.466.415-.92.819-1.126 1.381-.08.2-.12.42-.12.67h-1.76c0-.42.06-.77.16-1.08 0-.01 0-.03.01-.05 0-.015.005-.024.012-.036l.008-.014c.06-.16.12-.31.2-.45h.01c.31-.531.75-.88 1.16-1.204.566-.45 1.07-.848 1.07-1.616 0-.93-.82-1.75-1.75-1.75-.75 0-1.42.52-1.66 1.21-.11.31-.37.54-.7.54z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,v=e.hoverIconColor,h=e.withHoverEffect,s=e.margin,g=e.fillOpacity,m=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:v,withHoverEffect:h,margin:s,fillOpacity:g},m),{children:t(l,Object.assign({},m,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="DeviceUnknownIcon";var f=Object.assign(a,{Style:i});export default f;
