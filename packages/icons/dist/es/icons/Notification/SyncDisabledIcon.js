import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function l(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var n=function(e){return t("svg",l(l({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.361 11.534c0-2.21-.91-4.2-2.36-5.64l1.51-1.51a.5.5 0 0 0-.36-.85h-4.79v4.79c0 .45.54.67.85.35l1.39-1.39c1.08 1.1 1.76 2.59 1.76 4.25 0 .85-.18 1.66-.5 2.39l1.48 1.48a7.92 7.92 0 0 0 1.02-3.87zm-10-6.26v-.19c0-.68-.71-1.11-1.32-.82-.126.06-.244.129-.362.198a9.197 9.197 0 0 1-.178.102l1.46 1.46c.24-.18.4-.45.4-.75zm-6.43.37a.996.996 0 1 1 1.41-1.41l14.52 14.53a.996.996 0 1 1-1.41 1.41l-1.87-1.87c-.29.18-.59.35-.9.49-.61.29-1.32-.14-1.32-.82v-.18c0-.43.32-.79.75-.91l.001-.02a.099.099 0 0 1 .01-.02l-8.07-8.07a5.97 5.97 0 0 0-.69 2.76c0 1.66.68 3.15 1.76 4.25l1.39-1.39c.31-.32.85-.1.85.35v4.29c0 .28-.22.5-.5.5h-4.29a.5.5 0 0 1-.36-.85l1.51-1.51a7.925 7.925 0 0 1-2.36-5.64c0-1.56.45-3 1.22-4.24l-1.65-1.65z",fill:"#000",fillOpacity:".54"})}))};n.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,c=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,v=e.hoverIconColor,s=e.withHoverEffect,h=e.margin,b=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:v,withHoverEffect:s,margin:h,fillOpacity:b},g),{children:t(n,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="SyncDisabledIcon";var f=Object.assign(a,{Style:i});export default f;
