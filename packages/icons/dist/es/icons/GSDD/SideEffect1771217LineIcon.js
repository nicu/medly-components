import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t,jsxs as c}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function l(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=function(r){return c("svg",n(n({},r),{},{children:[t("path",{d:"M60.5 38.1c.6 0 1.2-.3 1.6-.8.7-.9.5-2.1-.3-2.8l-2.1-1.7 1.9-.6c1.1-.3 1.7-1.4 1.3-2.5-.3-1.1-1.4-1.7-2.5-1.3l-9.2 2.8 8.1 6.4c.3.3.8.5 1.2.5zM39.2 28.4c-1.1-.3-2.2.3-2.5 1.3s.3 2.2 1.3 2.5l1.9.6-2.1 1.7c-.9.7-1 1.9-.3 2.8.4.5 1 .8 1.6.8.4 0 .9-.1 1.2-.4l8.1-6.4-9.2-2.9z"}),t("path",{d:"M90.9 79.4c-2.3-13.3-4.8-16.2-6.4-17.3-4.5-2.9-17.5-6.3-22-7.5v-.1c7-5.3 11.5-14.7 11.5-24.3C74 15.1 63.1 2.8 49.8 2.8c-13.3 0-24.2 12.3-24.2 27.5 0 9.6 4.5 19 11.5 24.4-4.4 1.1-17.6 4.6-22 7.5-1.7 1.1-4.2 4-6.6 17.3-1.3 7-1.9 13.4-2 13.7-.1 1.1.7 2.1 1.8 2.2h.2c1 0 1.9-.8 2-1.8 1.2-12.2 4.1-26.3 6.8-28 3.6-2.3 15.3-5.6 20.9-7 1.9 4.6 6.4 7.9 11.7 7.9 5.3 0 9.8-3.2 11.7-7.8 5.7 1.5 17.2 4.7 20.7 6.9 2.6 1.7 5.3 15.8 6.4 28 .1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2-.1-.4-.6-6.9-1.8-13.8zm-41-17.1c-4.8 0-8.7-3.9-8.7-8.7 0-.7-.3-1.3-.9-1.7-6.5-4.4-10.7-13-10.7-21.8 0-12.9 9.1-23.5 20.2-23.5C60.9 6.8 70 17.3 70 30.2c0 8.7-4.2 17.1-10.6 21.6-.5.4-.9 1-.9 1.6v.2c0 4.9-3.8 8.7-8.6 8.7z"}),t("path",{d:"M28.3 85.1l6.4-8.1c.5-.6.6-1.5.3-2.2-.4-1.3-1.8-2-3.2-1.5l-1.8.6 2.9-3.7c.7-.9.5-2.1-.3-2.8-.9-.7-2.1-.5-2.8.3l-6.3 7.9c-.9 1-.8 2.6.3 3.5.7.6 1.7.7 2.4.4l1.8-.7-2.9 3.7c-.7.9-.5 2.1.3 2.8.4.3.8.4 1.2.4.7.1 1.3-.1 1.7-.6zM77.5 70.6c0-.7-.2-1.5-.5-2.1-.7-1.5-2-2.6-3.7-3-.1-.1-.2-.3-.3-.4-1-1.5-2.7-2.3-4.5-2.3-1.1 0-2.2.3-3.2 1l-5.4 3.8c-1-.8-2.2-1.3-3.5-1.3-1.2 0-2.3.3-3.2 1L46.6 72c-.7.5-1.4 1.1-2.1 1.7-3 2.8-4.5 6.6-4.4 10.5L28 90.3c-1 .5-1.4 1.7-.9 2.7.4.7 1.1 1.1 1.8 1.1.3 0 .6-.1.9-.2L41 88.2c.3.8.6 1.6 1.1 2.4.4.7.8 1.3 1.2 1.9 4.1 5.7 12 7.1 17.7 3l15.3-10.8c2.1-1.5 2.9-4.3 1.8-6.6.5-.7.9-1.5 1-2.4.3-1.4-.1-2.9-.9-4.1-.2-.4-.4-.7-.7-1zM64 84.2c.1.2.3.3.5.3.1 0 .2 0 .4-.1l7.5-5.3c.3-.2.6-.3.9-.3.4 0 .7.1 1 .4.6.6.6 1.5.1 2.1-.1.1-.2.2-.3.2L58.7 92.2c-3.9 2.8-9.4 1.8-12.1-2.1-.3-.5-.7-1-1-1.6-2.3-4-1.5-9 1.9-12.1.5-.5 1.1-.9 1.7-1.3l6.6-4.7c.3-.2.6-.3.9-.3.4 0 .7.1 1 .4.6.6.6 1.5.1 2.1l-.2.2-3.6 2.6c-.3.2-.3.6-.1.8.1.2.3.2.5.2.1 0 .2 0 .3-.1L67.8 67c.3-.2.6-.3.9-.3.5 0 .9.2 1.2.6.5.6.4 1.6-.2 2.1l-10 7.1c-.3.2-.3.6-.2.8 0 .1.1.1.2.2s.2.1.4.1c.1 0 .3 0 .4-.1l11-7.9c.6-.4 1.5-.3 1.9.3.1.1.1.2.1.2.3.6.1 1.3-.5 1.7l-10.8 7.7c-.3.2-.3.6-.2.8.1.2.3.3.5.3.1 0 .3 0 .4-.1l10-7.1c.3-.2.6-.3.9-.3.5 0 1 .2 1.2.6.4.7.3 1.5-.4 2l-10.5 7.5c-.2.3-.3.7-.1 1zM56.6 46.7c-3.3-2.2-11.2-2.2-14.2.1-.9.7-1.1 1.9-.4 2.8.7.9 1.9 1.1 2.8.4 1.5-1.1 7.6-1.3 9.6.1.3.2.7.3 1.1.3.6 0 1.3-.3 1.7-.9.6-.9.3-2.2-.6-2.8z"})]}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var p=o((function(r){var o=r.size,c=r.variant,l=r.iconColor,p=r.bgColor,f=r.hoverBgColor,s=r.hoverIconColor,v=r.withHoverEffect,h=r.margin,b=r.fillOpacity,g=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:l,bgColor:p,hoverBgColor:f,hoverIconColor:s,withHoverEffect:v,margin:h,fillOpacity:b},g),{children:t(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));p.displayName="SideEffect1771217LineIcon";var f=Object.assign(p,{Style:i});export default f;
