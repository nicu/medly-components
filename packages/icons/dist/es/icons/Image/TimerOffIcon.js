import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.416 3.209h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm2 5c-.51 0-.92.39-.98.89l1.98 1.97v-1.86c0-.55-.45-1-1-1zm7 5c0-3.87-3.13-7-7-7-1.12 0-2.18.27-3.12.74l-1.45-1.45c1.35-.81 2.91-1.29 4.57-1.29 2.12 0 4.07.74 5.62 1.98l.75-.75a.993.993 0 0 1 1.4 0l.01.01c.39.39.38 1.02 0 1.4l-.75.75a8.963 8.963 0 0 1 1.97 5.61c0 1.68-.47 3.25-1.27 4.59l-1.47-1.47c.47-.94.74-2 .74-3.12zm1.19 7.88L4.286 4.769a.996.996 0 1 0-1.41 1.41l2.07 2.07c-.92 1.38-1.48 2.99-1.53 4.72a8.998 8.998 0 0 0 9 9.24c1.84 0 3.55-.55 4.98-1.5l1.79 1.79c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zm-15.19-7.88c0 3.87 3.13 7 7 7 1.29 0 2.49-.35 3.53-.95l-9.57-9.57a6.876 6.876 0 0 0-.96 3.52z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,c=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,m=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:m},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="TimerOffIcon";var f=Object.assign(a,{Style:i});export default f;
