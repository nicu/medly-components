import c from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as e}from"react";import{jsx as t,jsxs as o}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(c,r){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable}))),e.push.apply(e,t)}return e}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){c(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(t,c))}))}return r}var s=function(c){return o("svg",l(l({},c),{},{children:[t("path",{d:"M16.2 22.7c-.9 0-1.6.7-1.6 1.5v.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-.2-.1c0-.8-.7-1.5-1.6-1.4zM17 10.4h-1.6-.1c-.4.1-.7.5-.6.9l.8 9c0 .4.4.8.8.8s.8-.3.8-.8l.8-9v-.1c-.1-.5-.5-.8-.9-.8zM63.5 59.6c.1-.1.2-.2.2-.3.1-.2.3-.4.4-.6.1-.1.2-.3.3-.4l.3-.6c.1-.2.2-.3.2-.5.1-.2.2-.3.2-.5.1-.2.2-.4.2-.6.1-.2.1-.3.2-.5s.1-.5.2-.7c0-.1.1-.3.1-.4.1-.3.1-.7.2-1v-.1c0-.4.1-.8.1-1.2v-.9c0-.6-.1-1.2-.2-1.8-.7-3.6-2.6-6-5.8-7.1-2.4-.8-5.5-.9-9.5-.1s-6.9 2-8.8 3.7c-2.5 2.2-3.4 5.1-2.7 8.7.2 1 .5 1.9.9 2.8v.1c.1.2.2.3.3.5 0 .1.1.1.1.2 1.9 3.6 5.2 5.8 9.3 6.4H50c.6.1 1.2.1 1.9.1 1 0 2.1-.1 3.1-.3.4-.1.7-.2 1-.3h.2c.2-.1.5-.1.7-.2.2-.1.4-.1.6-.2.2-.1.4-.2.6-.2l.6-.3.6-.3c.2-.1.4-.2.5-.3l.6-.3c.1-.1.3-.2.4-.3.2-.1.4-.3.6-.4.1-.1.2-.1.3-.2.6-.5 1.2-1.2 1.8-1.9zM43.6 48.3c1.5-1.3 4-2.3 7.5-3 1.8-.3 3.3-.5 4.7-.5 1.3 0 2.4.2 3.4.5 2.1.7 3.4 2.3 3.9 4.9.1.4.1.8.2 1.1-1.3.7-4.5 2.2-10.4 0-5.6-2.1-9.5.9-11 2.3-.4-2.3.2-4 1.7-5.3z"}),t("path",{d:"M89.5 77.4c-4.5-2.9-17.8-6.5-22.8-7.7.2-1 .2-2 .1-3.1 6.4-6.6 9.5-17.1 8.1-27C72.6 24 59.4 13 45.7 15c-6.2.9-11.6 4.3-15.5 9.6L19.5 6.1c-.3-.6-.8-1-1.4-1.4-.9-.5-1.9-.6-2.8-.4-1 .3-1.7.9-2.2 1.7l-5.4 9.4-5.5 9.4c-.3.6-.5 1.2-.5 1.9 0 2 1.7 3.7 3.7 3.7H27c-2.2 5.1-2.9 10.9-2 16.8 1.4 9.4 7 18 14.4 22.6-3.1.7-8 1.9-12.7 3.3l.7-7.7V65c0-2.4-2-4.4-4.4-4.4H8.7c-2.4.2-4.2 2.4-4 4.8l2.5 27.3c.2 2.3 2.1 4 4.4 4h9c2.3 0 4.1-1.8 4.3-4l1.4-15.3c5.4-1.6 11.7-3.2 15.5-4 2.2 4.5 6.8 7.5 11.9 7.5.6 0 1.3 0 1.9-.1 4.4-.7 8-3.5 9.9-7.2 6 1.5 18.1 4.9 21.8 7.3 4.3 2.8 5.3 10.4 5.3 10.6.1 1 1 1.8 2 1.8h.2c1.1-.1 1.9-1.1 1.8-2.2 0-.7-1.1-9.9-7.1-13.7zM9.2 64.5h13.9c.2 0 .4.2.4.5l-.7 7.7H9.5L8.8 65c0-.3.1-.5.4-.5zM5.4 27.4c-.4 0-.7-.3-.7-.7 0-.1 0-.2.1-.3l5.5-9.4 5.4-9.4c.1-.2.4-.3.6-.3.1 0 .2 0 .3.1.1.1.2.1.3.3l10.8 18.8c.1.2.1.4.1.5 0 .1-.1.3-.3.4-.1.1-.2.1-.3.1H5.4zm49.7 49.3c-5 .8-9.7-2.7-10.4-7.7-.1-.7-.5-1.2-1.1-1.5-7.5-3.6-13.2-11.8-14.6-20.9-1-6.6.3-13.1 3.6-18.3 3.3-5.2 8.1-8.5 13.7-9.3.9-.1 1.8-.2 2.7-.2 10.5 0 20.1 9.1 22 21.4 1.3 9-1.7 18.5-7.6 24.2-.4.4-.6.9-.6 1.4v.5c.4 2.4-.2 4.8-1.7 6.8-1.4 2-3.6 3.3-6 3.6z"}),t("path",{d:"M78.1 65.4c-.5 1-.2 2.2.8 2.7l7.6 4.1 3.7-7.4c.5-1 .1-2.2-.9-2.7s-2.2-.1-2.7.9l-.6 1.3c-.9-2.8-2.8-6.3-6.7-9.5-.9-.7-2.1-.6-2.8.3-.7.9-.6 2.1.3 2.8 3 2.5 4.5 5.3 5.3 7.4l-1.4-.7c-.9-.5-2.1-.2-2.6.8zM84.6 31.7c7.4 0 13.3-6 13.3-13.3C98 11 92 5 84.6 5s-13.3 6-13.3 13.3c0 7.4 6 13.4 13.3 13.4zm0-23.7C90.3 8 95 12.7 95 18.4s-4.6 10.3-10.3 10.3c-5.7 0-10.3-4.6-10.3-10.3C74.3 12.7 78.9 8 84.6 8z"}),t("path",{d:"M84.5 15.3L82.4 17c-.3.2-.4.5-.4.8 0 .5.4.8.9.8h3.9c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-2.5l1.2-.9c1.3-1 1.9-1.6 1.9-2.8 0-1.4-1-2.2-2.5-2.2-1.1 0-1.8.4-2.4 1.1-.1.1-.2.3-.2.5 0 .4.3.7.7.7.2 0 .4-.1.5-.2.4-.4.7-.6 1.2-.6.6 0 1 .3 1 .9.1.4-.3.8-1.2 1.6zM79.3 23.5c0-.7-.6-.9-1.1-1-.5-.1-.9-.3-.9-.6s.3-.5.7-.5c.3 0 .6.1.9.3h.1c.1 0 .2-.1.2-.2s-.1-.2-.1-.2c-.3-.2-.8-.3-1.1-.3-.7 0-1.2.4-1.2 1 0 .7.6.8 1.2 1 .5.1.9.3.9.6s-.3.6-.7.6c-.4 0-.8-.1-1.1-.4H77c-.1 0-.2.1-.2.2s0 .2.1.2c.4.3.9.4 1.4.4.5-.1 1-.5 1-1.1zM79.8 21.4h.3v2.1c0 .7.4 1 1 1 .2 0 .4 0 .5-.1.1 0 .2-.1.2-.2s-.1-.2-.2-.2h-.3c-.4 0-.6-.2-.6-.6v-2.1h.9c.1 0 .2-.1.2-.2s-.1-.2-.2-.2h-.9v-.8c0-.1-.1-.3-.3-.3-.2 0-.3.1-.3.3v.8h-.3c-.1 0-.2.1-.2.2 0 .2.1.3.2.3zM83.8 24.6c.6 0 1-.2 1.3-.5.1 0 .1-.1.1-.2s-.1-.2-.2-.2-.1 0-.2.1c-.3.2-.6.4-1 .4-.6 0-1.2-.4-1.3-1.2h2.6c.1 0 .2-.1.2-.2 0-.9-.6-1.8-1.7-1.8-1 0-1.7.8-1.7 1.9.1.9.9 1.7 1.9 1.7zm-.1-3.3c.7 0 1.1.6 1.1 1.2h-2.3c.1-.7.6-1.2 1.2-1.2zM86.5 21.6v-.5c0-.2-.1-.3-.3-.3-.1 0-.3.1-.3.3v4.2c0 .2.1.3.3.3s.3-.1.3-.3v-1.5c.3.4.7.8 1.4.8.9 0 1.7-.7 1.7-1.9s-.8-1.8-1.7-1.8c-.7-.1-1.1.3-1.4.7zm1.3-.3c.7 0 1.3.5 1.3 1.4 0 .9-.6 1.4-1.3 1.4-.7 0-1.3-.5-1.3-1.4 0-.8.6-1.4 1.3-1.4zM91.4 24.5c.7 0 1.3-.4 1.3-1.1 0-.6-.6-.9-1.1-1-.5-.1-.9-.3-.9-.6s.3-.5.7-.5c.3 0 .6.1.9.3h.1c.1 0 .2-.1.2-.2s-.1-.2-.1-.2c-.3-.2-.8-.3-1.1-.3-.7 0-1.2.4-1.2 1 0 .7.6.8 1.2 1 .5.1.9.3.9.6s-.3.6-.7.6c-.4 0-.8-.1-1.1-.4h-.1c-.1 0-.2.1-.2.2s0 .2.1.2c.1.3.6.4 1.1.4z"})]}))};s.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var h=e((function(c){var e=c.size,o=c.variant,n=c.iconColor,h=c.bgColor,v=c.hoverBgColor,a=c.hoverIconColor,p=c.withHoverEffect,f=c.margin,m=c.fillOpacity,b=r(c,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},l({size:e,variant:o,iconColor:n,bgColor:h,hoverBgColor:v,hoverIconColor:a,withHoverEffect:p,margin:f,fillOpacity:m},b),{children:t(s,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));h.displayName="Administration189LineIcon";var v=Object.assign(h,{Style:i});export default v;
