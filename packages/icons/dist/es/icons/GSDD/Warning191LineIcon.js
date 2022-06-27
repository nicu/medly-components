import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t,jsxs as c}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=function(r){return c("svg",l(l({},r),{},{children:[t("path",{d:"M24.7 40.6c8.7 0 15.8-7.1 15.8-15.8S33.4 9.1 24.7 9.1 8.9 16.2 8.9 24.9 16 40.6 24.7 40.6zm11.8-15.7c0 2.5-.8 4.8-2.1 6.7L18 15.2c1.9-1.3 4.2-2.1 6.7-2.1 6.5 0 11.8 5.3 11.8 11.8zm-21.4-6.8l16.4 16.4c-1.9 1.3-4.2 2.1-6.7 2.1-6.5 0-11.8-5.3-11.8-11.8-.1-2.5.7-4.8 2.1-6.7zM28.6 53.1v-3.9c0-1-.8-1.8-1.8-1.8h-13c-1 0-1.8.8-1.8 1.7V53l-1.2 3.1c-.2.6-.3 1.2-.3 1.8v15.3c0 1 .8 1.8 1.8 1.8h16.3c1 0 1.7-.8 1.8-1.8V58.1c0-.7-.1-1.3-.4-2l-1.4-3zM26 70.8H14.7c-1 0-1.8-.8-1.8-1.7v-8.5c0-1 .8-1.7 1.8-1.8H26c1 0 1.8.8 1.8 1.8v8.5c0 .9-.8 1.7-1.8 1.7z"}),t("path",{d:"M22.3 60.8h-3.9v2h-2v3.9h2v2h3.9v-2h2v-3.9h-2zM47.3 49.8h.2c1 0 1.9-.8 2-1.8.1-.9.7-3.5 2.1-4.4 1.4-.9 6.1-2.3 9.5-3.2 1.1 3.3 3.5 6.8 6.8 6.8s5.7-3.4 6.8-6.7c3.4.9 7.9 2.3 9.3 3.2 1.4.9 2 3.6 2.1 4.4.1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2-.1-.5-.7-5.3-4-7.3-2-1.2-6.9-2.7-9.9-3.5 3.2-3.2 5-7.5 5-12 0-8.3-6-15.1-13.4-15.1s-13.4 6.8-13.4 15.1c0 4.5 1.8 8.9 5 12-3 .8-8 2.3-9.9 3.5-3.3 2.1-3.9 6.8-4 7.3-.1 1 .7 2 1.8 2.1zM68 43.2c-.8 0-1.8-1.3-2.5-2.9.8.2 1.6.3 2.4.3.9 0 1.8-.1 2.7-.4-.8 1.6-1.8 3-2.6 3zm-9.5-18.5c0-6.1 4.2-11.1 9.4-11.1s9.4 5 9.4 11.1c0 4-1.8 7.9-5.1 10.3-.2.1-.3.3-.4.5l-.1-.2c-2.8 1.7-4.9 1.7-7.7 0v.1l-.3-.3c-3.3-2.4-5.3-6.3-5.2-10.4zM86.2 81.2c-2-1.3-6.8-2.7-9.9-3.5 3.2-3.2 5-7.5 5-12.1 0-8.3-6-15.1-13.4-15.1s-13.4 6.8-13.4 15.1c-.1 4.6 1.8 8.9 5 12.1-3 .8-7.9 2.2-9.9 3.5-3.3 2.1-3.9 6.8-4 7.4-.1 1.1.7 2.1 1.8 2.2h.2c1 0 1.9-.8 2-1.8.1-.9.7-3.5 2.1-4.4 1.4-.9 6.1-2.3 9.5-3.2 1.1 3.3 3.5 6.8 6.8 6.8s5.7-3.4 6.8-6.8c3.4.9 7.9 2.3 9.3 3.2 1.4.9 2 3.6 2.1 4.4.1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2-.1-.6-.7-5.3-4-7.4zM58.5 65.6c0-6.1 4.2-11.1 9.4-11.1s9.4 5 9.4 11.1c.1 4-1.8 7.9-5.1 10.3-.2.1-.3.3-.5.5v-.1c-2.8 1.7-4.9 1.7-7.7 0-.1-.2-.2-.3-.4-.4-3.2-2.3-5.2-6.1-5.1-10.3zM68 84.2c-.7 0-1.7-1.2-2.4-2.7.8.2 1.6.3 2.3.3.9 0 1.7-.1 2.6-.4-.8 1.5-1.8 2.8-2.5 2.8zM44.3 49.4c-.8-.8-2-.8-2.8 0l-10.2 9.9 10.2 9.9c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.7-2.1 0-2.8l-7.3-7 7.3-7c.7-.9.8-2.2 0-3z"})]}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var v=o((function(r){var o=r.size,c=r.variant,n=r.iconColor,v=r.bgColor,s=r.hoverBgColor,h=r.hoverIconColor,p=r.withHoverEffect,f=r.margin,g=r.fillOpacity,m=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:o,variant:c,iconColor:n,bgColor:v,hoverBgColor:s,hoverIconColor:h,withHoverEffect:p,margin:f,fillOpacity:g},m),{children:t(a,Object.assign({},m,{width:"1em",height:"1em"}),void 0)}),void 0)}));v.displayName="Warning191LineIcon";var s=Object.assign(v,{Style:i});export default s;
