import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",c(c({},r),{},{children:t("path",{d:"M74 87.2c3.5-1 6.7-2.9 9.4-5.6 8.2-8.4 8-21.9-.4-30L46 15.4c-4.1-4-9.4-6.1-15.1-6-5.7.1-11 2.3-14.9 6.4-4 4.1-6.1 9.4-6 15.1.1 5.7 2.3 11 6.4 14.9l21.2 20.6L53.5 82c4 4 9.3 6 14.6 6 1.5 0 3.1-.2 4.6-.5.1 0 .2-.1.3-.1.3 0 .6-.1 1-.2zM13.9 30.9c-.1-4.6 1.7-9 4.9-12.3 3.2-3.3 7.5-5.1 12.1-5.2h.2c4.5 0 8.8 1.7 12 4.9l37 36.1C86 60.1 87 68.8 83 75.5c.8-6.3-1.4-12.9-6.2-17.5L58.3 40 37.7 61.1 19.1 43c-3.3-3.2-5.1-7.5-5.2-12.1z"})}))};l.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var a=o((function(r){var o=r.size,n=r.variant,a=r.iconColor,p=r.bgColor,f=r.hoverBgColor,s=r.hoverIconColor,v=r.withHoverEffect,b=r.margin,g=r.fillOpacity,h=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},c({size:o,variant:n,iconColor:a,bgColor:p,hoverBgColor:f,hoverIconColor:s,withHoverEffect:v,margin:b,fillOpacity:g},h),{children:t(l,Object.assign({},h,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="Generic84LineIcon";var p=Object.assign(a,{Style:i});export default p;
