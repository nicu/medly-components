import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",c(c({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.99 3H19a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2H4.99C3.88 21 3 20.1 3 19l.01-14c0-1.11.87-2 1.98-2zm10.88 12H19V6c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v9h3.13c.47 0 .85.34.98.8.35 1.27 1.52 2.2 2.89 2.2s2.54-.93 2.89-2.2c.13-.46.51-.8.98-.8z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,b=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:b},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="InboxIcon";var f=Object.assign(a,{Style:i});export default f;
