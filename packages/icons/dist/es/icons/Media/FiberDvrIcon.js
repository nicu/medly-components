import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",n(n({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 3H3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zM6.5 10.5h-2v3h2v-3zm13 0h-2v1h2v-1zM6.5 15c.83 0 1.5-.67 1.5-1.5v-3C8 9.67 7.33 9 6.5 9h-3c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5h3zm7.6-5.08l-1.27 4.36c-.12.43-.52.72-.96.72-.44 0-.84-.29-.96-.72L9.64 9.92c-.14-.46.21-.92.69-.92.32 0 .6.21.69.52l.85 2.91.85-2.91c.09-.31.37-.52.69-.52.48 0 .83.46.69.92zm6 2.98c.5-.25.9-.8.9-1.4v-1c0-.83-.67-1.5-1.5-1.5h-2.86c-.35 0-.64.29-.64.64v4.67c0 .38.31.69.69.69h.12c.38 0 .69-.31.69-.69V13h1.15l.82 1.92c.1.26.35.42.63.42.49 0 .82-.51.63-.96l-.63-1.48z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,c=r.variant,a=r.iconColor,v=r.bgColor,h=r.hoverBgColor,f=r.hoverIconColor,p=r.withHoverEffect,s=r.margin,b=r.fillOpacity,g=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:v,hoverBgColor:h,hoverIconColor:f,withHoverEffect:p,margin:s,fillOpacity:b},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="FiberDvrIcon";var v=Object.assign(a,{Style:i});export default v;
