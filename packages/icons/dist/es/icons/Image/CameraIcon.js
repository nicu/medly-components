import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",n(n({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.46 2.115c.35.04.52.44.35.74l-4.03 6.99c-.2.33-.68.33-.87 0L5.9 4.625c-.13-.22-.07-.5.12-.65 2.14-1.58 4.82-2.23 7.44-1.86zm2.49.71c2.43 1.04 4.37 3.03 5.35 5.5.13.32-.12.67-.47.67h-8.08c-.39 0-.63-.42-.44-.74l3.01-5.21c.13-.22.4-.32.63-.22zm5.42 7.17h-6.2c-.38 0-.63.42-.43.75l4.26 7.39c.17.3.6.35.82.08 1.74-2.18 2.48-5.03 2.05-7.79a.498.498 0 0 0-.5-.43zm-19.24 3.58c-.43-2.77.32-5.6 2.05-7.79.21-.27.64-.22.82.08l4.26 7.38c.2.33-.05.75-.43.75h-6.2c-.25 0-.47-.18-.5-.42zm.57 2.09c.98 2.47 2.92 4.46 5.35 5.5.23.1.5 0 .63-.22l3.01-5.21a.502.502 0 0 0-.43-.75H3.17c-.35.01-.6.36-.47.68zm15.27 4.36a10.139 10.139 0 0 1-7.44 1.86c-.34-.05-.52-.45-.35-.75l4.04-6.99c.2-.33.68-.33.87 0l3.01 5.22c.13.22.07.51-.13.66z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,c=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,h=e.withHoverEffect,m=e.margin,v=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:h,margin:m,fillOpacity:v},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="CameraIcon";var f=Object.assign(a,{Style:i});export default f;
