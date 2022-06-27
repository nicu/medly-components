import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t,jsxs as c}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=function(r){return c("svg",l(l({},r),{},{children:[t("path",{d:"M76.2 48.6h.3l7.6-1.4c1.1-.2 1.8-1.2 1.6-2.3-.2-1.1-1.2-1.8-2.3-1.6l-7.6 1.4c-1.1.2-1.8 1.2-1.6 2.3.2.9 1 1.6 2 1.6zM75.8 56.1l7.6 1.4h.3c1 0 1.8-.7 2-1.7.2-1.1-.5-2.1-1.6-2.3l-7.6-1.4c-1.1-.2-2.1.5-2.3 1.6-.2 1.2.5 2.2 1.6 2.4z"}),t("path",{d:"M98.4 45.6c-.8-1.7-2.1-3.2-3.6-4.2.1-3.2-2-6.1-5.2-7-.6-.2-1.3-.2-1.9-.2-.5 0-1 0-1.4.1-1.1.2-1.8 1.3-1.5 2.4.2 1.1 1.3 1.8 2.4 1.5.2 0 .4-.1.6-.1.3 0 .6 0 .8.1 1.6.4 2.5 2.1 2.1 3.7l-.4 1.6 1.5.7c1.3.6 2.4 1.7 3 3 1.5 3.2.2 7.1-3 8.6l-1.5.7.4 1.6c.1.2.1.5.1.7 0 1.7-1.4 3.1-3.1 3.1-.2 0-.4 0-.6-.1-1.1-.2-2.1.5-2.3 1.6-.2 1.1.5 2.1 1.6 2.3.5.1.9.1 1.4.1 3.9 0 7.1-3.2 7.1-7.1v-.1c4.1-2.7 5.7-8.3 3.5-13zM80 79.6c-4.4-2.8-17.6-6.4-22.2-7.5 7.1-3.8 11.2-8.7 12.4-14.6.1-.6 0-1.2-.4-1.6-.4-.5-.9-.7-1.5-.8-7.8-.5-9.5-2.2-9.5-2.5 0 0 .5-2.4 11.8-7.6.8-.4 1.3-1.2 1.1-2.1-.3-2-.9-4-1.6-5.8l2.3-3c1.2-1.6.9-3.9-.7-5.1-.4-.3-1-.6-1.5-.7l-7.1-1.4c-4.8-4.4-11-7-17.7-7.3h-.3c-4.6 0-8.9 1.4-12.7 3.9.3-1.1.4-2.3.4-3.5.2-8.9-6.9-16-15.6-16S1.4 11.1 1.4 19.8c0 8.7 7.1 15.8 15.8 15.8 2.1 0 4.1-.4 6-1.2-1.8 3.9-2.8 8.3-2.8 12.9 0 9.9 4.6 19.5 11.9 24.8v.2c-4.3 1.1-17.2 4.4-21.7 7.3-5.8 3.7-6.9 12.7-6.9 13.1-.1 1.1.7 2.1 1.8 2.2h.2c1 0 1.9-.8 2-1.8 0-.1.9-7.4 5.1-10.1 3.7-2.3 15.2-5.5 20.7-6.8.7 1.4 1.6 2.8 2.8 3.9 2.4 2.3 5.5 3.5 8.8 3.5h.4c5.1-.2 9.4-3.2 11.3-7.6 5.8 1.5 17.6 4.8 21.2 7.1 4.2 2.7 5.1 10.1 5.1 10.1.1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2-.3-.5-1.3-9.5-7.1-13.2zM29 19.8c0 2.5-.8 4.8-2.1 6.7L10.5 10.1C12.4 8.8 14.7 8 17.2 8 23.7 8 29 13.3 29 19.8zm-23.6 0c0-2.5.8-4.8 2.1-6.7l16.4 16.4c-1.9 1.3-4.2 2.1-6.7 2.1-6.5-.1-11.8-5.4-11.8-11.8zm39.8 59.7c-2.4.1-4.6-.8-6.3-2.4-1.7-1.6-2.7-3.8-2.8-6.2 0-.6-.3-1.2-.9-1.6-6.6-4.5-10.9-13.2-10.9-22.1 0-12.9 9.6-23.9 20.9-23.9h.2c5.8.2 11.3 2.6 15.4 6.6.3.3.6.4 1 .5l7.2 1.4-2.7 3.5c-.4.6-.5 1.4-.2 2 .7 1.4 1.2 2.9 1.5 4.5-11.5 5.4-12.9 8.6-12.7 10.8.1 3.4 3.7 5.4 10.7 6.2-1.5 3.8-5 7.2-10.3 10-.4.2-.6.3-.7.4-.5.4-.9 1-.9 1.6v.1c-.1 4.7-3.8 8.5-8.5 8.6z"})]}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var p=o((function(r){var o=r.size,c=r.variant,n=r.iconColor,p=r.bgColor,f=r.hoverBgColor,h=r.hoverIconColor,s=r.withHoverEffect,v=r.margin,g=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:c,iconColor:n,bgColor:p,hoverBgColor:f,hoverIconColor:h,withHoverEffect:s,margin:v,fillOpacity:g},b),{children:t(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));p.displayName="Warning373LineIcon";var f=Object.assign(p,{Style:i});export default f;
