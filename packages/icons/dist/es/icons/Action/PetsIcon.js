import e from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){e(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var l=function(e){return t("svg",c(c({},e),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2.498a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-4.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm8-1.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm7 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-3.056 6.805l.896 1.055.236.235c1.259 1.25 2.666 2.646 2.374 4.565-.29 1.01-1.02 2.03-2.33 2.32-.336.064-1.01-.024-1.883-.138-1.023-.133-2.318-.302-3.657-.302h-.18c-1.327 0-2.612.169-3.63.303-.886.116-1.57.206-1.91.137-1.31-.29-2.04-1.3-2.33-2.32-.282-1.909 1.124-3.304 2.382-4.553l.238-.237c.564-.654 1.067-1.246 1.584-1.856l.896-1.054c.47-.54 1.05-1.08 1.75-1.32.11-.04.22-.07.33-.09.26-.05.53-.05.79-.05s.53 0 .78.04c.11.02.22.05.33.09.7.24 1.29.78 1.75 1.32a284.15 284.15 0 0 1 1.584 1.855z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(e){var o=e.size,n=e.variant,a=e.iconColor,f=e.bgColor,p=e.hoverBgColor,s=e.hoverIconColor,v=e.withHoverEffect,h=e.margin,m=e.fillOpacity,g=r(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:m},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="PetsIcon";var f=Object.assign(a,{Style:i});export default f;
