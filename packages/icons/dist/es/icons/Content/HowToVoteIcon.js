import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function l(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var c=function(e){return t("svg",l(l({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.34 15.02c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95zm2.12-10.61L17 7.95l-4.95 4.95-3.54-3.54 4.95-4.95zm4.83 8.88l2.12 2.12c.38.38.59.89.59 1.42V20a2 2 0 0 1-2 2H5c-1.1 0-2-.9-2-2v-3.17c0-.53.21-1.04.58-1.42l2.12-2.12c.19-.18.44-.29.71-.29h.42l2 2H6.78L5 17h14l-1.77-2h-1.91l2-2h.27c.26 0 .52.11.7.29z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,h=e.withHoverEffect,v=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:h,margin:v,fillOpacity:g},b),{children:t(c,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="HowToVoteIcon";var f=Object.assign(a,{Style:i});export default f;
