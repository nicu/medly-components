import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm8 10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v2h-2c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-3v-2h2z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,c=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,h=e.withHoverEffect,v=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:h,margin:v,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="LooksTwoIcon";var f=Object.assign(a,{Style:i});export default f;
