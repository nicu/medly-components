import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function l(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var c=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.373 15.454c.69 0 1.15-.69.9-1.32l-4.25-10.81a1.363 1.363 0 0 0-2.54 0l-4.25 10.81c-.25.63.22 1.32.9 1.32.4 0 .76-.25.91-.63l.88-2.37h5.64l.9 2.38c.15.37.51.62.91.62zm-6.69-5l2.07-5.52 2.07 5.52h-4.14zm7.07 8.68l7.39-7.39a.993.993 0 0 1 1.4.01c.39.39.39 1.02 0 1.41l-8.08 8.09a.996.996 0 0 1-1.41 0l-3.68-3.68a.996.996 0 1 1 1.41-1.41l2.97 2.97z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,l=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,h=e.withHoverEffect,v=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:l,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:h,margin:v,fillOpacity:g},b),{children:t(c,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="SpellcheckIcon";var f=Object.assign(a,{Style:i});export default f;
