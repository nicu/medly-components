import c from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as e}from"react";import{jsx as o}from"react/jsx-runtime";import{SvgIconStyled as t}from"../../SvgIcon/SvgIcon.styled.js";function l(c,r){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable}))),e.push.apply(e,o)}return e}function i(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){c(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(o,c))}))}return r}var n=function(c){return o("svg",i(i({},c),{},{children:o("path",{d:"M88.2 58l4.4-4.5c2.6-2.6 2.6-6.9 0-9.5-.2-.2-.5-.5-.8-.7l.2-.2c2.6-2.6 2.6-6.9 0-9.5v-.1c-.7-.7-1.6-1.3-2.6-1.6.1-1.4-.3-2.8-1.1-4-1.2-1.8-3.3-2.9-5.5-2.9-.4 0-.7 0-1.1.1-.3-.7-.8-1.3-1.3-1.8-1.3-1.3-3-2-4.8-2h-.1c-1.8 0-3.5.7-4.8 2l-6 6.1-1.3-1.3c-4.7-4.7-12.4-4.7-17.1 0l-8.6 8.6c-1.9 1.9-3.1 4.4-3.5 7.1-1.8 0-3.6.7-4.9 2L18.6 56.4c-1.1 1.1-2.1 2.2-3 3.4-6.5 8.3-6.3 19.9.5 28 .8 1 1.7 2 2.6 2.9 8 8 20.9 8 28.8 0l3.5-3.5c.2.2.4.4.6.5 1.7 1 3.7 1.6 5.8 1.6 2.5 0 5-.7 7.2-2 2 1.4 4.4 2.2 6.8 2.2 6.3 0 11.5-5.1 11.6-11.4 4.6-1.7 7.6-6 7.6-10.9 0-3.2-2-5.8-4.3-7.7 0-.1.1-.2.1-.4.7-.3 1.3-.6 1.8-1.1zm1.9-7.7c-.1.2-.2.3-.3.4L86.5 54c-.4-1.9-1.2-3.7-2.5-5.3l1.8-1.8c.6-.5 1.3-.9 2.1-.9.5 0 1 .1 1.5.4 1.2.9 1.5 2.6.7 3.9zm-18.4 5.1l.3-.2c1.9-1.9 2.4-4.6 1.6-6.9.2.2.4.4.7.5l6.2 7c-.5-.2-1-.3-1.5-.4-1.1 0-2.1.4-2.8 1.2l-2.1 2.1c-.4-1.3-1.3-2.5-2.4-3.3zm-1.1-10.8l-1.2-.6v-.8l1.2 1.4zM79 59.5s1.1.5 2.4 1.3c-.3.5-.7.9-1.1 1.3l-8.6 8.6c-1.7 1.7-4 2.5-6.4 2.3L79 59.5zm8.2-24c.8 0 1.5.3 2 .8l.1.1c1.1 1.1 1.1 2.8 0 3.9L82.4 47l-4-4 6.7-6.7c.5-.5 1.3-.8 2.1-.8zm-6.3-5.8c1-1 2.7-1.1 3.7-.1l.4.4c.7 1.1.5 2.5-.4 3.3l-7.8 8-3.8-3.7 7.9-7.9zM73.6 26c.5-.5 1.2-.8 2-.8.7 0 1.5.3 2 .8 1.1 1 1.2 2.8.2 3.9l-6.2 6.2-4-4 6-6.1zM49 30.8c3.2-3.2 8.3-3.2 11.5 0l1.8 1.8c-.3 1.2 0 2.5.9 3.6l.9 1.1c-.4-.1-.9-.1-1.4-.1h-1.1c-.3-.7-.8-1.3-1.3-1.8-2.7-2.7-7-2.7-9.6 0L39.6 46.3c-.4-.6-.9-1-1.5-1.4 0-2.1.9-4.1 2.4-5.6l8.5-8.5zM38 44.9c0-.1 0-.1 0 0 0-.1 0-.1 0 0zm6.7 42.9L43.5 89c-.4.3-.9.7-1.3 1-2.7 1.7-5.8 2.7-9 2.7-.6 0-1.2 0-1.8-.1-2.6-.3-5.1-1.2-7.3-2.6-.9-.6-1.8-1.3-2.6-2.1l-.5-.5c-.7-.7-1.3-1.4-2-2.2-5.5-6.6-5.7-16.2-.4-23 .8-1.1 1.7-2.1 2.7-3l3.7-3.6 7.2-7.2c.1-.1.3-.2.4-.3l.1-.1.3-.2.2-.1c.1 0 .2-.1.3-.1h1.3l.3.1h.1c.1.1.3.1.4.2.2.1.3.3.5.4 1 1.1 1 2.8-.1 3.8L30.5 58c-.1.1-.2.2-.2.3-.2.4-.1.8.2 1.2.1.1.2.2.4.3h.1c.1 0 .2.1.3.1.1 0 .2 0 .3-.1h.2c.1-.1.3-.1.4-.2l14.3-14.3 7.2-7.2.2-.2c.2-.1.4-.3.6-.4.4-.2.8-.3 1.2-.3.2 0 .4 0 .5.1.3.1.5.2.8.3.1 0 .2.1.3.2.1.1.3.2.4.3.4.4.7.9.8 1.5.2.7 0 1.4-.3 2-.1.2-.2.3-.3.4L41.2 58.3c-.3.3-.4.6-.3 1 0 .4.2.7.6.9.1.1.2.1.3.1H42.1c.1 0 .2 0 .3-.1h.1c.1-.1.3-.1.4-.2l.5-.5 2.8-2.8 14.6-14.8.4-.4.2-.1c.1-.1.2-.1.3-.2l.2-.1.3-.1h1c.1 0 .2.1.3.1l.2.1c.1.1.2.2.3.2l.2.1c.2.2.3.3.4.5.1.1.2.3.2.4.4 1 .2 2.2-.6 2.9L49.9 60.2 47.1 63l-.1.2c-.2.2-.3.5-.3.8 0 .3.1.6.3.8.1.1.2.2.4.3h.1c.1 0 .2.1.3.1.1 0 .2 0 .3-.1h.1c.1-.1.3-.2.4-.3l.1-.1 2.8-2.8L65 48.5v-.1c.4-.4.9-.7 1.5-.8h1.1l.3.1.2.1c.1.1.3.1.4.2h.1c.2.1.3.2.5.4l.1.1c.5.5.8 1.3.8 2s-.3 1.4-.8 1.9L51.9 69.5c-.5.4-.5 1.2 0 1.6.5.5 1.2.5 1.6 0l.8-.8 2.8-2.8.4-.4 8.1-8.1c.1-.1.3-.2.4-.3l.1-.1c.1-.1.2-.1.3-.2l.2-.1c.1 0 .2-.1.3-.1H68.4c.1 0 .2 0 .3.1h.1c.1.1.3.1.4.2.2.1.3.3.5.4l.1.1c.2.3.4.6.5.9.1.2.1.4.1.6.1.7-.2 1.4-.6 1.9-.1.1-.1.2-.2.3l-8.5 8.5-2.8 2.8-1.1 1.1-4.4 4.4-1.8 2-.1.1-6.2 6.2zm41.9-20.7c0 4.2-3.4 7.6-7.6 7.6h-.7c1.6 3.9-.2 8.3-4.1 10-3.4 1.4-7.3.2-9.3-2.9-1.9 2.2-4.6 3.5-7.5 3.5-1.3 0-2.5-.3-3.6-.9l1.5-1.5 6.6-6.6a12 12 0 0 0 12.6-2.8l8.6-8.6c.5-.5 1-1.1 1.4-1.7 1.2 1.1 2.1 2.4 2.1 3.9zM44.6 21.3c5.2 0 9.5-4.2 9.5-9.5 0-5.2-4.2-9.5-9.5-9.5-5.2 0-9.5 4.2-9.5 9.5s4.3 9.5 9.5 9.5zm0-15c3.1 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5 2.5-5.4 5.5-5.5zM67.2 21.1c3.5 0 6.4-2.9 6.4-6.4 0-3.6-2.9-6.4-6.4-6.4-3.6 0-6.4 2.9-6.4 6.4 0 3.5 2.9 6.4 6.4 6.4zm0-9.4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM26.4 36.9c3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9zm0-10.6c2 0 3.7 1.6 3.7 3.7 0 2-1.7 3.7-3.7 3.7s-3.7-1.6-3.7-3.7c0-2 1.7-3.7 3.7-3.7z"})}))};n.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var a=e((function(c){var e=c.size,l=c.variant,a=c.iconColor,s=c.bgColor,h=c.hoverBgColor,m=c.hoverIconColor,f=c.withHoverEffect,p=c.margin,v=c.fillOpacity,b=r(c,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return o(t,Object.assign({},i({size:e,variant:l,iconColor:a,bgColor:s,hoverBgColor:h,hoverIconColor:m,withHoverEffect:f,margin:p,fillOpacity:v},b),{children:o(n,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="GeneralInformation270LineIcon";var s=Object.assign(a,{Style:t});export default s;
