import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as c}from"../../SvgIcon/SvgIcon.styled.js";function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm7.75 2c-.41 0-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V8l1.79 2.69c.13.19.35.31.59.31.57 0 .9-.63.59-1.1L15.2 8l1.27-1.9a.71.71 0 0 0-1.18-.79L13.5 8V5.75c0-.41-.34-.75-.75-.75zM7 8.25c0-.55.45-1 1-1h1.5V6.5H7.75c-.41 0-.75-.34-.75-.75S7.34 5 7.75 5H10c.55 0 1 .45 1 1v1.75c0 .55-.45 1-1 1H8.5v.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.55 0-1-.45-1-1V8.25zm6.71 10.04l5.03-5.03c.17-.17.26-.39.26-.63 0-.78-.95-1.18-1.51-.62L13 16.5l-3.3-3.28a.996.996 0 0 0-1.41 0l-3.03 3.03c-.17.16-.26.39-.26.62 0 .78.95 1.18 1.51.62L9 15l3.3 3.29c.39.39 1.02.39 1.41 0z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,i=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(c,Object.assign({},n({size:o,variant:i,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="ScoreIcon";var f=Object.assign(a,{Style:c});export default f;
