import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.005 3h13.99c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5.005c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm8.5 9c.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2h-3.01c-.55 0-.99.45-.99 1s.44 1 .99 1h3.01l-.01 2h-1c-.55 0-1 .45-1 1s.45 1 1 1h1l.01 2h-3.01c-.55 0-1 .45-1 1s.45 1 1 1h3.01a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,c=e.variant,a=e.iconColor,f=e.bgColor,s=e.hoverBgColor,p=e.hoverIconColor,h=e.withHoverEffect,v=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:s,hoverIconColor:p,withHoverEffect:h,margin:v,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="Looks3Icon";var f=Object.assign(a,{Style:i});export default f;
