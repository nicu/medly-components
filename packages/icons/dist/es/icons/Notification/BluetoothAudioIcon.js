import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function l(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var c=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.781 8.415l-3.59 3.58 3.6 3.58c.39.4.39 1.03 0 1.42l-4.3 4.3c-.63.63-1.71.18-1.71-.71v-6.18l-3.89 3.89a.996.996 0 1 1-1.41-1.41l4.89-4.89-4.89-4.89a.996.996 0 1 1 1.41-1.41l3.89 3.9v-6.18c0-.89 1.08-1.34 1.71-.71l4.29 4.29c.39.4.39 1.03 0 1.42zm5.12-.64a.863.863 0 0 0-1.4-.24c-.26.26-.31.64-.17.98.46 1.07.72 2.24.72 3.47 0 1.24-.26 2.42-.73 3.49a.84.84 0 0 0 .16.94.84.84 0 0 0 1.35-.23c.63-1.3.98-2.76.98-4.3a9.995 9.995 0 0 0-.91-4.11zm-4.12 2.5l-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23.11-.5.17-1 .17-1.52a6 6 0 0 0-.18-1.48.5.5 0 0 0-.84-.24zm-5-4.45l1.88 1.88-1.88 1.88v-3.76zm1.88 10.46l-1.88-1.88v3.76l1.88-1.88z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,l=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,v=e.hoverIconColor,s=e.withHoverEffect,h=e.margin,m=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:l,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:v,withHoverEffect:s,margin:h,fillOpacity:m},g),{children:t(c,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="BluetoothAudioIcon";var f=Object.assign(a,{Style:i});export default f;
