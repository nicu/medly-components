import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",c(c({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.6 12.71l-2.6 2.6V19c0 .55-.45 1-1 1h-3.7l-2.6 2.6a.996.996 0 0 1-1.41 0L8.69 20H5c-.55 0-1-.45-1-1v-3.7l-2.6-2.6a.996.996 0 0 1 0-1.41L4 8.69V5c0-.55.45-1 1-1h3.69l2.61-2.6a.996.996 0 0 1 1.41 0l2.6 2.6H19c.55 0 1 .45 1 1v3.69l2.6 2.61c.39.39.39 1.02 0 1.41zM6 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="Brightness5Icon";var f=Object.assign(a,{Style:i});export default f;
