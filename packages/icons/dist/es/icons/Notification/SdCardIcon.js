import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",n(n({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.83 2H18c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8.82c0-.52.23-1.03.6-1.4l4.81-4.83c.38-.38.89-.59 1.42-.59zM10 7c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2zm4 1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm2-1c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,c=r.variant,a=r.iconColor,s=r.bgColor,f=r.hoverBgColor,p=r.hoverIconColor,v=r.withHoverEffect,g=r.margin,h=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:s,hoverBgColor:f,hoverIconColor:p,withHoverEffect:v,margin:g,fillOpacity:h},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="SdCardIcon";var s=Object.assign(a,{Style:i});export default s;
