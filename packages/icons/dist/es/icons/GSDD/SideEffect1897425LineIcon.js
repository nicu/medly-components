import c from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as e}from"react";import{jsx as t,jsxs as o}from"react/jsx-runtime";import{SvgIconStyled as l}from"../../SvgIcon/SvgIcon.styled.js";function i(c,r){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable}))),e.push.apply(e,t)}return e}function n(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(t,c))}))}return r}var a=function(c){return o("svg",n(n({},c),{},{children:[t("path",{d:"M64.2 42.4c-.3-1.1-1.4-1.7-2.5-1.3l-9.9 3 8.7 6.9c.4.3.8.4 1.2.4.6 0 1.2-.3 1.6-.8.7-.9.5-2.1-.3-2.8l-2.7-2.2 2.6-.8c1-.2 1.6-1.4 1.3-2.4zM37.9 41c-1.1-.3-2.2.3-2.5 1.3-.3 1.1.3 2.2 1.3 2.5l2.6.8-2.7 2.2c-.9.7-1 1.9-.3 2.8.4.5 1 .8 1.6.8.4 0 .9-.1 1.2-.4l8.7-6.9-9.9-3.1z"}),t("path",{d:"M88.3 78.6c-4.9-3.1-19.7-7.1-24.6-8.3v-.4c7.8-5.9 12.8-16.4 12.8-27 0-16.8-12-30.4-26.8-30.4C35 12.4 23 26.1 23 42.9c0 10.8 5.1 21.3 13 27.2v.1c-4.5 1.2-19.8 5.2-24.9 8.4-1.8 1.2-4.5 4.4-7.2 19.1-1.4 7.8-2.2 15.2-2.2 15.3-.1 1.1.7 2.1 1.8 2.2h.2c1 0 1.9-.8 2-1.8 1.4-13.6 4.7-29.5 7.6-31.4 4.1-2.6 17.4-6.3 23.6-7.9.7 1.7 1.7 3.3 3 4.6h-.3c-1.2.3-2.2.9-3 1.8l-5.9 6.8c-.6.7-1.2 1.5-1.8 2.3-3.8 5.8-3.1 13.5 1.7 18.5.6.6 1.2 1.2 1.8 1.7 5.7 5 14.4 4.3 19.4-1.4 0 0 0-.1.1-.1l13.6-15.9c1.8-2.1 1.8-5.2 0-7.3.4-.9.6-1.9.6-2.9-.1-1.5-.8-2.9-1.9-3.9L63 79.6l1.1-1.3c-.4-.3-.8-.6-1.2-.8-.2-.7-.5-1.4-.9-2 .3-.5.5-1 .7-1.5 6.4 1.6 19.3 5.3 23.4 7.8 3 1.9 6.1 17.8 7.2 31.4.1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2 0-.1-.7-7.5-2-15.3-2.4-14.5-5.1-17.7-7-18.9zm-26.5 5.2l-9.4 10.9c-.3.3-.2.7 0 1 .2.1.4.2.6.2.1 0 .3-.1.4-.2L60 88c.2-.3.6-.5.9-.6.9-.2 1.8.3 2 1.1.1.5 0 1.1-.4 1.5l-13.7 15.9c-3.5 4.1-9.6 4.5-13.7 1-.5-.4-1-.9-1.5-1.4-3.5-3.7-4-9.3-1.2-13.6.4-.7.9-1.3 1.4-1.9l5.9-6.8c.2-.3.6-.5.9-.6.9-.2 1.7.3 2 1.2.1.5 0 1.1-.4 1.5l-3.1 3.6c-.2.3-.2.6 0 .9.2.2.4.2.6.2.1 0 .3-.1.3-.2l11.8-13.7c.2-.3.5-.4.9-.5.9-.2 1.8.4 2.1 1.3.1.5 0 1-.3 1.4l-9 10.4c-.2.3-.2.7.1 1l.1.1c.1.1.3.1.5 0 .2 0 .3-.1.4-.2l9.8-11.5c.2-.3.5-.4.8-.5.6-.2 1.2.1 1.6.5.4.6.4 1.4-.1 2l-9.5 11.3c-.3.3-.2.7.1 1 .2.1.4.2.6.1.1 0 .3-.1.3-.2l9-10.5c.2-.3.5-.5.9-.5.5-.1 1.1 0 1.5.4.7.4.8 1.4.2 2.1zm-1.2-16.6c-.5.4-.9 1-.9 1.6v.2c0 1.5-.4 3-1 4.4-.4-.1-.9-.1-1.4-.1l-.5-.5c-1.4-1.2-3.3-1.6-5.1-1.2-1.1.3-2.2.9-2.9 1.8l-3.6 4.3C42 76 40 72.7 40 69c0-.7-.3-1.3-.9-1.7C31.8 62.4 27 52.8 27 42.9c0-14.6 10.2-26.4 22.8-26.4 12.5 0 22.8 11.9 22.8 26.4-.1 9.7-4.8 19.3-12 24.3z"}),t("path",{d:"M50.1 56.3c-4.1 0-6.8 3.8-7.9 5.9-.2.3-.1.7.2.8.1.1.2.1.3.1h.2c.7-.2 1.3-.3 2-.2 1.6 0 3.5.3 5.2.3 1.7 0 3.7-.3 5.2-.3.7 0 1.3.1 2 .2.3.1.7-.1.8-.5v-.4c-1.2-2.1-3.9-5.9-8-5.9zm0 3.8c-.7 0-1.5-.1-2.2-.1.6-.5 1.4-.7 2.1-.8.8 0 1.6.3 2.3.7-.8.1-1.5.2-2.2.2zM76 59c.2.9 1 1.5 1.9 1.5.2 0 .4 0 .5-.1l6.8-1.8c1.1-.3 1.7-1.4 1.4-2.5s-1.4-1.7-2.5-1.4l-6.8 1.8c-.9.4-1.6 1.5-1.3 2.5zM87.5 66c.1-1.1-.7-2.1-1.8-2.2l-7-.6c-1.1-.1-2.1.7-2.2 1.8s.7 2.1 1.8 2.2l7 .6h.2c1.1 0 1.9-.8 2-1.8z"}),t("path",{d:"M87 50.2c.1 0 .3-.1.5-.1.7-.1 1.4.1 1.9.6.5.4.9 1.1.9 1.8v.6l-.2 1.6 1.5.6c1.2.4 2.2 1.3 2.8 2.4 1.6 2.6.7 6.1-1.9 7.7l-1.4.8.5 1.5c.1.2.1.4.1.6.1.7-.1 1.4-.6 1.9-.4.5-1.1.9-1.8.9h-.5c-1.1-.1-2.1.7-2.2 1.8s.7 2.1 1.8 2.2H89.7c1.7-.2 3.3-1 4.5-2.3s1.7-3.1 1.5-4.8v-.1c3.6-3 4.5-8.2 2.1-12.3-.9-1.4-2.1-2.6-3.6-3.4-.2-1.7-1-3.3-2.3-4.5-1.3-1.1-3.1-1.7-4.8-1.5-.5 0-.9.1-1.3.3-1.1.3-1.6 1.5-1.3 2.5.4 1 1.5 1.6 2.5 1.2zM11.2 73.2c0 1.1.9 2 2 2s2-.9 2-2c0-3.3 2.7-6 6-6 1.1 0 2-.9 2-2s-.9-2-2-2c-5.5 0-10 4.5-10 10z"}),t("path",{d:"M5.9 74.1c1.1 0 2-.9 2-2 0-7.1 5.7-12.8 12.8-12.8 1.1 0 2-.9 2-2s-.9-2-2-2c-9.3 0-16.8 7.5-16.8 16.8 0 1.1.9 2 2 2z"})]}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var s=e((function(c){var e=c.size,o=c.variant,i=c.iconColor,s=c.bgColor,p=c.hoverBgColor,f=c.hoverIconColor,h=c.withHoverEffect,v=c.margin,m=c.fillOpacity,b=r(c,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(l,Object.assign({},n({size:e,variant:o,iconColor:i,bgColor:s,hoverBgColor:p,hoverIconColor:f,withHoverEffect:h,margin:v,fillOpacity:m},b),{children:t(a,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="SideEffect1897425LineIcon";var p=Object.assign(s,{Style:l});export default p;
