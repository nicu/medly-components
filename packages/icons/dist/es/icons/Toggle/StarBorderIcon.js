import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c=function(r){return t("svg",l(l({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.809 8.875l4.84.42c.88.07 1.23 1.17.56 1.75l-3.67 3.18 1.1 4.73c.2.86-.73 1.54-1.49 1.08l-4.15-2.51-4.15 2.5c-.76.46-1.69-.22-1.49-1.08l1.1-4.72-3.67-3.18c-.67-.58-.31-1.68.57-1.75l4.83-.41 1.89-4.46c.34-.81 1.5-.81 1.84 0l1.89 4.45zm-6.57 9.05l3.76-2.27 3.77 2.28-1-4.28 3.32-2.88-4.38-.38-1.71-4.04-1.7 4.03-4.38.38 3.32 2.88-1 4.28z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,n=r.variant,a=r.iconColor,f=r.bgColor,p=r.hoverBgColor,s=r.hoverIconColor,v=r.withHoverEffect,g=r.margin,h=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:g,fillOpacity:h},b),{children:t(c,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="StarBorderIcon";var f=Object.assign(a,{Style:i});export default f;
