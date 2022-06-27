import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",c(c({},r),{},{children:t("path",{d:"M19.645 4.355a3.365 3.365 0 0 0-.345-.293A4.564 4.564 0 0 0 16.352 3c-.479 0-.93.08-1.355.186-.425.133-.85.319-1.222.584-.24.16-.478.372-.717.585L9.339 8.073l-3.984 3.985C4.478 12.96 4 14.103 4 15.352c0 1.248.478 2.417 1.355 3.293A4.619 4.619 0 0 0 8.648 20a4.619 4.619 0 0 0 3.294-1.355l3.985-3.984 3.718-3.719A4.619 4.619 0 0 0 21 7.648a4.619 4.619 0 0 0-1.355-3.293zm-8.287 13.732a3.82 3.82 0 0 1-2.71 1.116 3.82 3.82 0 0 1-2.709-1.116 3.832 3.832 0 0 1 0-5.445l3.427-3.426 5.445 5.445-3.453 3.426zM18.13 6.241a.287.287 0 0 1-.186.08.241.241 0 0 1-.186-.08 1.99 1.99 0 0 0-2.815 0 .257.257 0 0 1-.372 0 .257.257 0 0 1 0-.372 2.514 2.514 0 0 1 1.78-.744c.664 0 1.301.266 1.78.744a.257.257 0 0 1 0 .372z",fill:"#000"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,n=r.variant,a=r.iconColor,f=r.bgColor,p=r.hoverBgColor,s=r.hoverIconColor,v=r.withHoverEffect,g=r.margin,h=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:v,margin:g,fillOpacity:h},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="CapsuleIcon";var f=Object.assign(a,{Style:i});export default f;
