import c from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as e}from"react";import{jsx as t,jsxs as o}from"react/jsx-runtime";import{SvgIconStyled as l}from"../../SvgIcon/SvgIcon.styled.js";function i(c,r){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable}))),e.push.apply(e,t)}return e}function n(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(t,c))}))}return r}var a=function(c){return o("svg",n(n({},c),{},{children:[t("path",{d:"M61.7 40.6c.6 0 1.2-.3 1.6-.8.7-.9.5-2.1-.3-2.8l-2.7-2.2 2.6-.8c1.1-.3 1.7-1.4 1.3-2.5-.3-1.1-1.4-1.7-2.5-1.3l-9.9 3 8.7 6.9c.3.3.7.5 1.2.5zM37.8 30.2c-1.1-.3-2.2.3-2.5 1.3-.3 1.1.3 2.2 1.3 2.5l2.6.8-2.7 2.2c-.9.7-1 1.9-.3 2.8.4.5 1 .8 1.6.8.4 0 .9-.1 1.2-.4l8.7-6.9-9.9-3.1z"}),t("path",{d:"M88.2 67.8c-4.9-3.1-19.6-7.1-24.6-8.3v-.4c7.8-5.9 12.7-16.4 12.7-27 0-16.8-12-30.4-26.8-30.4S22.9 15.3 22.9 32.1c0 10.8 5.1 21.4 13 27.2v.1c-4.5 1.1-19.8 5.2-24.9 8.4-1.8 1.2-4.5 4.4-7.2 19.1-1.4 7.8-2.2 15.2-2.2 15.3-.1 1.1.7 2.1 1.8 2.2h.2c1 0 1.9-.8 2-1.8C7 89 10.3 73.1 13.2 71.2c4.1-2.6 17.4-6.3 23.7-7.9 2 5.2 7.1 8.9 13 8.9 3.7 0 7.2-1.4 9.8-4.1 1.4-1.4 2.4-3 3.1-4.7 6.4 1.6 19.3 5.3 23.3 7.8 2.9 1.9 6.1 17.8 7.3 31.4.1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2 0-.1-.7-7.5-2-15.3C92.8 72.2 90 69 88.2 67.8zm-38.4.3c-5.5 0-9.9-4.4-9.9-9.9 0-.7-.3-1.3-.9-1.7-7.4-5-12.1-14.6-12.1-24.5 0-14.6 10.2-26.4 22.8-26.4 12.5 0 22.8 11.9 22.8 26.4 0 9.7-4.6 19.3-11.8 24.3-.5.4-.9 1-.9 1.6v.2c0 2.6-1 5.1-2.9 7-2 2-4.4 3-7.1 3z"}),t("path",{d:"M80.1 77.4c0-.8-.1-1.6-.5-2.4-.7-1.6-2.2-2.8-4-3.2-.1-.2-.2-.4-.4-.6-1.1-1.5-2.8-2.4-4.6-2.4l.2-.1c-1.2 0-2.3.3-3.3 1l-6.3 4.5-.1-.1c-1-1-2.4-1.5-3.8-1.5-1.2 0-2.4.4-3.3 1.1L46.6 79c-.8.6-1.5 1.2-2.3 1.8-3.3 3-4.9 7.2-4.8 11.3l-13.9 7c-1 .5-1.4 1.7-.9 2.7.4.7 1.1 1.1 1.8 1.1.3 0 .6-.1.9-.2l12.8-6.4c.3 1 .7 2 1.3 2.9.4.7.9 1.4 1.3 2.1 4.4 6.2 12.9 7.7 19.1 3.3 0 0 .1 0 .1-.1l17.1-12.1c2.3-1.6 3-4.6 1.8-7.1.6-.8 1.1-1.7 1.2-2.7.2-1.5-.1-3-1-4.2-.3-.4-.6-.7-1-1zM77.5 83l-11.8 8.3c-.3.2-.4.6-.2 1 .1.2.3.3.6.3.1 0 .3 0 .4-.1l8.3-5.9c.3-.2.6-.3 1-.3s.8.1 1.1.4c.7.6.7 1.7.1 2.3-.1.1-.2.1-.2.2l-17.1 12.1c-1.6 1.2-3.6 1.8-5.6 1.8-3.1 0-6.1-1.5-7.9-4.1-.4-.5-.8-1.1-1.1-1.8-2.6-4.4-1.7-10 2-13.5.6-.5 1.2-1 1.9-1.5l7.4-5.2c.3-.2.6-.3 1-.3s.8.1 1.1.4c.7.6.7 1.6.1 2.3-.1.1-.2.2-.3.2l-3.9 2.8c-.3.2-.4.6-.2.9.1.2.3.3.6.3.1 0 .3 0 .4-.1l14.7-10.4c.3-.2.6-.3 1-.3.5 0 1 .3 1.3.7.6.7.4 1.7-.3 2.3l-11.2 7.9c-.3.2-.4.7-.1 1l.1.1c.1.1.3.2.4.2.2 0 .3-.1.4-.1L73.7 76c.7-.5 1.6-.4 2.2.3.1.1.1.2.2.3.3.7 0 1.5-.6 1.9l-12 8.6c-.3.2-.4.6-.2 1 .2.3.7.4 1 .2l11.2-8c.8-.5 1.8-.4 2.4.4.5.8.3 1.8-.4 2.3zM50 45.4c-4.1 0-6.7 3.9-7.9 6-.2.3-.1.7.2.8.1.1.2.1.3.1h.2c.7-.2 1.3-.3 2-.2 1.6 0 3.5.3 5.2.3 1.7 0 3.6-.3 5.2-.3.7 0 1.3.1 2 .2h.2c.3 0 .6-.3.6-.6 0-.1 0-.2-.1-.3-1.1-2.2-3.8-6-7.9-6zm0 3.9c-.7 0-1.5-.1-2.2-.1.6-.5 1.4-.7 2.2-.7.8 0 1.6.3 2.3.7-.9 0-1.6.1-2.3.1zM78.5 47.8h.3l6.9-1.2c1.1-.2 1.8-1.2 1.6-2.3-.2-1.1-1.2-1.8-2.3-1.6l-6.9 1.2c-1.1.1-1.8 1.1-1.6 2.2.2 1 1 1.7 2 1.7zM78.1 54.5l6.9 1.2h.4c1 0 1.8-.7 2-1.7.2-1.1-.5-2.1-1.6-2.3l-6.9-1.2c-1.1-.2-2.1.5-2.3 1.6-.3 1.2.4 2.2 1.5 2.4z"}),t("path",{d:"M88.3 38.4h.5c.2 0 .5 0 .7.1 1.3.4 2.1 1.7 1.8 3.1l-.4 1.6 1.5.7c1.2.6 2.1 1.5 2.7 2.7 1.3 2.8.1 6.1-2.7 7.5l-1.5.7.4 1.6c.1.2.1.4.1.6 0 1.4-1.2 2.6-2.6 2.6h-.6c-1.1-.2-2.1.5-2.3 1.6-.2 1.1.5 2.1 1.6 2.3.4.1.8.1 1.2.1 3.6 0 6.6-2.9 6.6-6.6 3.8-2.6 5.3-7.7 3.3-12-.7-1.5-1.9-2.9-3.3-3.8 0-2.9-1.9-5.6-4.8-6.4-.6-.2-1.2-.2-1.7-.2-.4 0-.9 0-1.3.1-1.1.2-1.8 1.3-1.6 2.4.3.8 1.3 1.5 2.4 1.3zM43.1 13.6c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4zM48.2 19.2c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4zM48.6 14.3c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4zM42.8 22c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4 0 .7.6 1.4 1.4 1.4zM37.7 18.3c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4-.1.8.6 1.5 1.4 1.4zM42.8 11.5c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4 0 .7.6 1.4 1.4 1.4z"})]}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var p=e((function(c){var e=c.size,o=c.variant,i=c.iconColor,p=c.bgColor,h=c.hoverBgColor,f=c.hoverIconColor,s=c.withHoverEffect,v=c.margin,b=c.fillOpacity,g=r(c,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(l,Object.assign({},n({size:e,variant:o,iconColor:i,bgColor:p,hoverBgColor:h,hoverIconColor:f,withHoverEffect:s,margin:v,fillOpacity:b},g),{children:t(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));p.displayName="SideEffect1856220LineIcon";var h=Object.assign(p,{Style:l});export default h;
