import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 8c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v1h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1zM4 7c-.55 0-1-.45-1-1s.45-1 1-1h9v2H4zm0 12c-.55 0-1-.45-1-1s.45-1 1-1h5v2H4zm9 1v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zm-6-9v-1c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h3zm14 1c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var s=o((function(e){var o=e.size,c=e.variant,s=e.iconColor,v=e.bgColor,a=e.hoverBgColor,f=e.hoverIconColor,h=e.withHoverEffect,p=e.margin,m=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:s,bgColor:v,hoverBgColor:a,hoverIconColor:f,withHoverEffect:h,margin:p,fillOpacity:m},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="TuneIcon";var v=Object.assign(s,{Style:i});export default v;
