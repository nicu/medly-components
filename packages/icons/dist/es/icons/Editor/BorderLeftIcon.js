import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function v(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var h=function(e){return t("svg",v(v({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 20c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v16zm8-15h-2V3h2v2zm-2 12h2v-2h-2v2zm0 4h2v-2h-2v2zm0-12h2V7h-2v2zm2 4h-2v-2h2v2zm-6 8h2v-2H7v2zM9 5H7V3h2v2zm-2 8h2v-2H7v2zm12-4h2V7h-2v2zm-2 12h-2v-2h2v2zm2-4h2v-2h-2v2zm0-12V3h2v2h-2zm0 8h2v-2h-2v2zm2 8h-2v-2h2v2zm-6-8h2v-2h-2v2zm2-8h-2V3h2v2z",fill:"#000",fillOpacity:".54"})}))};h.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var c=o((function(e){var o=e.size,n=e.variant,c=e.iconColor,l=e.bgColor,m=e.hoverBgColor,a=e.hoverIconColor,f=e.withHoverEffect,p=e.margin,s=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},v({size:o,variant:n,iconColor:c,bgColor:l,hoverBgColor:m,hoverIconColor:a,withHoverEffect:f,margin:p,fillOpacity:s},g),{children:t(h,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));c.displayName="BorderLeftIcon";var l=Object.assign(c,{Style:i});export default l;
