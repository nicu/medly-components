import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-6c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.1.9-2 2-2zM1 15.09c0-.61.54-1.1 1.14-1 2.95.48 5.29 2.81 5.77 5.77.09.6-.39 1.14-1 1.14-.49 0-.9-.36-.98-.85-.36-2.08-2-3.72-4.08-4.08a.998.998 0 0 1-.85-.98zM1 18v3h3c0-1.66-1.34-3-3-3zm0-6.95c0-.59.51-1.05 1.1-1 5.19.52 9.32 4.64 9.85 9.83.06.59-.4 1.11-1 1.11a.98.98 0 0 1-.99-.87 8.997 8.997 0 0 0-8.08-8.08.988.988 0 0 1-.88-.99z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,c=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="CastIcon";var f=Object.assign(a,{Style:i});export default f;
