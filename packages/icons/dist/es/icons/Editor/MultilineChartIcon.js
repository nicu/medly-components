import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as t}from"react";import{jsx as o}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var l=function(r){return o("svg",c(c({},r),{},{children:o("path",{d:"M21.337 6.731l-.06-.06a.955.955 0 0 0-1.39.04l-2.18 2.45c-2.05-2.31-4.9-3.71-8.12-3.71-2.5 0-4.83.87-6.75 2.3a.965.965 0 0 0-.11 1.45l.06.06c.33.33.86.39 1.23.11 1.59-1.2 3.5-1.92 5.57-1.92 2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-3.29-3.29a.996.996 0 0 0-1.41 0l-6.12 6.13a.96.96 0 0 0 0 1.35l.15.15c.37.37.98.37 1.35 0l5.32-5.33 3.25 3.25c.41.41 1.07.39 1.45-.04l3.35-3.76c.62 1.12 1.08 2.39 1.32 3.73.08.47.47.82.95.82h.09c.6 0 1.05-.55.94-1.14a13.93 13.93 0 0 0-1.89-5l2.44-2.75c.34-.38.32-.96-.04-1.32z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=t((function(r){var t=r.size,n=r.variant,a=r.iconColor,f=r.bgColor,p=r.hoverBgColor,s=r.hoverIconColor,h=r.withHoverEffect,v=r.margin,g=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return o(i,Object.assign({},c({size:t,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:h,margin:v,fillOpacity:g},b),{children:o(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="MultilineChartIcon";var f=Object.assign(a,{Style:i});export default f;
