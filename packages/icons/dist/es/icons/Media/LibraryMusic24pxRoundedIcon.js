import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",n(n({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 5h-2v5.37c0 1.27-.9 2.44-2.16 2.6a2.505 2.505 0 0 1-2.8-2.95c.2-1.1 1.18-1.95 2.3-2.02.63-.04 1.2.16 1.66.51V6c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zM2 7c0-.55.45-1 1-1s1 .45 1 1v12c0 .55.45 1 1 1h12c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V7z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,c=r.variant,a=r.iconColor,f=r.bgColor,p=r.hoverBgColor,s=r.hoverIconColor,v=r.withHoverEffect,h=r.margin,b=r.fillOpacity,g=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:b},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="LibraryMusic24pxRoundedIcon";var f=Object.assign(a,{Style:i});export default f;
