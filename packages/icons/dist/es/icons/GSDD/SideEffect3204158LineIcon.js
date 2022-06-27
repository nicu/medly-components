import r from"@babel/runtime/helpers/defineProperty";import c from"@babel/runtime/helpers/objectWithoutProperties";import{memo as e}from"react";import{jsx as t,jsxs as o}from"react/jsx-runtime";import{SvgIconStyled as l}from"../../SvgIcon/SvgIcon.styled.js";function i(r,c){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);c&&(t=t.filter((function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),e.push.apply(e,t)}return e}function n(c){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(c,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(t,r))}))}return c}var a=function(r){return o("svg",n(n({},r),{},{children:[t("path",{d:"M62 51.3c.6 0 1.2-.3 1.6-.8.7-.9.5-2.1-.3-2.8l-2.7-2.2 2.6-.8c1.1-.3 1.7-1.4 1.3-2.5-.3-1.1-1.4-1.7-2.5-1.3l-9.9 3 8.7 6.9c.3.4.8.5 1.2.5zM38.2 41c-1.1-.3-2.2.3-2.5 1.3-.3 1.1.3 2.2 1.3 2.5l2.6.8-2.7 2.2c-.9.7-1 1.9-.3 2.8.4.5 1 .8 1.6.8.4 0 .9-.1 1.2-.4l8.7-6.9-9.9-3.1z"}),t("path",{d:"M88.6 78.5c-4.9-3.2-19.8-7.1-24.6-8.3v-.3c7.8-5.9 12.8-16.4 12.8-27 0-16.8-12-30.4-26.8-30.4-14.7 0-26.7 13.6-26.7 30.4 0 10.8 5.1 21.4 13.1 27.2v.1c-4.4 1.1-19.8 5.2-24.9 8.4-1.8 1.2-4.6 4.4-7.3 19.1C2.8 105.5 2 112.9 2 113c-.1 1.1.7 2.1 1.8 2.2H4c1 0 1.9-.8 2-1.8 1.4-13.6 4.7-29.5 7.6-31.4 4.1-2.6 17.8-6.4 23.9-8 .8 1.7 1.9 3.3 3.2 4.7-.3 0-.5.1-.8.1-1.2.3-2.2.9-3 1.8L31 87.4c-.6.7-1.2 1.5-1.8 2.3-3.8 5.8-3.1 13.5 1.7 18.5.6.6 1.2 1.2 1.8 1.7 3.4 2.9 8 4 12.3 2.9 2.8-.7 5.2-2.2 7.1-4.4l13.7-16c1.8-2.1 1.8-5.2 0-7.3.4-.9.6-1.9.6-2.9-.1-1.5-.8-2.9-2-3.9-.4-.3-.8-.6-1.2-.8-.2-.7-.5-1.4-.9-2 .3-.5.5-1 .7-1.5 6.4 1.6 19.4 5.3 23.4 7.8 3 1.9 6.1 17.8 7.2 31.4.1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2 0-.1-.7-7.5-2-15.3-2.5-14.5-5.2-17.8-7-19zM39.4 67.3c-7.4-5-12.1-14.6-12.1-24.5 0-14.6 10.2-26.4 22.7-26.4 12.6 0 22.8 11.8 22.8 26.4 0 9.8-4.7 19.3-11.9 24.4-.5.4-.9 1-.9 1.6v.2c0 1.5-.4 3.1-1 4.4-.4-.1-.9-.1-1.3-.1l-.5-.5c-1.4-1.2-3.3-1.7-5.1-1.2-1.1.3-2.2.9-2.9 1.8l-3.6 4.2c-2.7-1.9-5.2-5.3-5.2-8.6-.1-.7-.5-1.3-1-1.7zm13.2 28.3c.1 0 .1 0 0 0 .2.2.4.2.7.2.1 0 .3-.1.4-.2l6.6-7.7c.2-.3.5-.5.9-.6.4-.1.8-.1 1.2.1.8.4 1.1 1.4.6 2.2-.1.1-.1.2-.2.3l-13.7 15.9c-3.5 4.1-9.6 4.5-13.7 1-.5-.4-1-.9-1.5-1.4-3.5-3.7-4-9.3-1.2-13.6.4-.7.9-1.3 1.4-1.9l5.9-6.8c.2-.3.5-.5.9-.6.4-.1.8-.1 1.2.1.8.4 1.1 1.4.6 2.2-.1.1-.1.2-.2.3l-3.1 3.6c-.2.3-.2.7.1.9.2.1.4.2.6.1.1 0 .3-.1.3-.2L52.1 76c.2-.3.5-.4.9-.5.9-.2 1.8.3 2.1 1.2.1.5 0 1-.3 1.4l-9 10.4c-.2.3-.2.7.1 1l.1.1h.5c.2 0 .3-.1.4-.2l9.8-11.6c.6-.7 1.5-.7 2.2-.2l.2.2c.5.6.4 1.4-.1 2l-9.6 11.3c-.3.3-.2.7 0 1 .3.3.7.2 1-.1l8.9-10.5c.2-.3.5-.5.8-.6.5-.1 1.1 0 1.5.4.7.6.8 1.6.3 2.3 0 0 0 .1-.1.1l-9.4 10.9c0 .3 0 .8.2 1z"}),t("path",{d:"M50.4 63c1.7 0 3.7-.3 5.2-.3.7 0 1.3.1 2 .2h.2c.3 0 .6-.3.6-.6 0-.1 0-.2-.1-.3-1.2-2.1-3.9-5.9-8-5.9h-.1c-4 0-6.7 3.8-7.9 5.9-.2.3-.1.7.2.8.1 0 .2.1.3.1h.2c.7-.2 1.3-.3 2-.2 1.7.1 3.7.3 5.4.3zm-.2-3.8c.8 0 1.6.3 2.3.8h-2.2c-.7 0-1.5 0-2.2-.1.6-.5 1.4-.7 2.1-.7zM79.2 60.4c.2 0 .4 0 .5-.1l6.8-1.8c1.1-.3 1.7-1.4 1.4-2.5-.3-1.1-1.4-1.7-2.5-1.4l-6.8 1.8c-1.1.3-1.7 1.4-1.4 2.5.3 1 1.1 1.5 2 1.5zM80 63.2c-1.1-.1-2.1.7-2.2 1.8s.7 2.1 1.8 2.2l7 .6h.2c1 0 1.9-.8 2-1.8.1-1.1-.7-2.1-1.8-2.2l-7-.6z"}),t("path",{d:"M99.1 55.5c-.9-1.5-2.1-2.7-3.6-3.5-.3-3.6-3.5-6.3-7.2-5.9-.4 0-.8.1-1.2.2-1.1.3-1.7 1.4-1.4 2.5.3 1.1 1.4 1.7 2.5 1.4.2 0 .3-.1.5-.1 1.4-.1 2.7.9 2.8 2.4v.6l-.2 1.6 1.5.6c1.2.4 2.2 1.3 2.9 2.4 1.6 2.7.7 6.1-2 7.7l-1.4.9.6 1.6c.1.2.1.4.1.5.1 1.4-.9 2.7-2.4 2.8h-.4c-1.1-.1-2.1.7-2.2 1.8-.1 1.1.7 2.1 1.8 2.2H91.1c3.6-.3 6.3-3.5 5.9-7.1 3.6-3.2 4.6-8.4 2.1-12.6zM11.5 73.2c0 1.1.9 2 2 2s2-.9 2-2c0-3.3 2.7-5.9 5.9-5.9 1.1 0 2-.9 2-2s-.9-2-2-2c-5.4-.1-9.9 4.3-9.9 9.9z"}),t("path",{d:"M6.1 74c1.1 0 2-.9 2-2 0-7.1 5.7-12.8 12.8-12.8 1.1 0 2-.9 2-2s-.9-2-2-2c-9.3 0-16.8 7.5-16.8 16.8 0 1.1.9 2 2 2z"})]}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var p=e((function(r){var e=r.size,o=r.variant,i=r.iconColor,p=r.bgColor,h=r.hoverBgColor,s=r.hoverIconColor,f=r.withHoverEffect,v=r.margin,b=r.fillOpacity,g=c(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(l,Object.assign({},n({size:e,variant:o,iconColor:i,bgColor:p,hoverBgColor:h,hoverIconColor:s,withHoverEffect:f,margin:v,fillOpacity:b},g),{children:t(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));p.displayName="SideEffect3204158LineIcon";var h=Object.assign(p,{Style:l});export default h;
