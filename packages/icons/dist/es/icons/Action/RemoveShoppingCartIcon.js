import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function l(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var c=function(e){return t("svg",l(l({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.275 2.68a.996.996 0 1 1 1.41-1.41l20.04 20.05a.996.996 0 1 1-1.41 1.41l-2.13-2.13c-.36.51-.95.84-1.62.84a1.997 1.997 0 0 1-1.16-3.62l-1.38-1.38h-7.33c-1.06 0-2.02-.76-2.12-1.82-.04-.42.05-.82.24-1.15l1.35-2.45-2.21-4.66-3.68-3.68zm7.39 9.76l-1.1 2h5.46l-2-2h-2.36zm7.95-.06c.54-.14.99-.49 1.25-.97l3.58-6.49c.37-.66-.12-1.48-.88-1.48H7.685l8.93 8.94zm-11.04 7.06c0-1.1.89-2 1.99-2s2 .9 2 2-.9 2-2 2-1.99-.9-1.99-2z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,p=e.bgColor,f=e.hoverBgColor,s=e.hoverIconColor,h=e.withHoverEffect,v=e.margin,g=e.fillOpacity,m=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:n,iconColor:a,bgColor:p,hoverBgColor:f,hoverIconColor:s,withHoverEffect:h,margin:v,fillOpacity:g},m),{children:t(c,Object.assign({},m,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="RemoveShoppingCartIcon";var p=Object.assign(a,{Style:i});export default p;
