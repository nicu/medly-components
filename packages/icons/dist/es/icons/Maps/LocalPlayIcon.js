import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.06 10.24c-.63.34-1.06 1-1.06 1.76s.43 1.42 1.06 1.76c.6.33.94 1.01.94 1.7V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2.29v-2.25c0-.69.34-1.37.94-1.7.63-.33 1.06-1 1.06-1.76s-.42-1.42-1.05-1.77c-.61-.32-.94-1-.94-1.69V5.99C2.01 4.89 2.9 4 4 4h16c1.1 0 2 .9 2 2v2.54c0 .69-.34 1.37-.94 1.7zM12 14.5l2.5 1.6c.38.25.87-.1.75-.55l-.76-2.86 2.3-1.88c.35-.29.16-.86-.29-.89l-2.96-.17-1.08-2.76c-.16-.42-.76-.42-.93 0l-1.08 2.75-2.96.17c-.46.03-.64.6-.29.89l2.3 1.88-.75 2.88c-.12.44.37.79.75.55L12 14.5z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,c=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,g=e.fillOpacity,b=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="LocalPlayIcon";var f=Object.assign(a,{Style:i});export default f;
