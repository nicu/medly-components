import c from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as e}from"react";import{jsx as t,jsxs as o}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(c,r){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable}))),e.push.apply(e,t)}return e}function s(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){c(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(t,c))}))}return r}var v=function(c){return o("svg",s(s({},c),{},{children:[t("path",{d:"M22.6 8.5c-8.7 0-15.8 7.1-15.8 15.8s7.1 15.8 15.8 15.8S38.4 33 38.4 24.3 31.3 8.5 22.6 8.5zM10.9 24.3c0-2.5.8-4.8 2.1-6.7L29.4 34c-1.9 1.3-4.2 2.1-6.7 2.1-6.6 0-11.8-5.3-11.8-11.8zM32.3 31L15.9 14.6c1.9-1.3 4.2-2.1 6.7-2.1 6.5 0 11.8 5.3 11.8 11.8 0 2.5-.8 4.8-2.1 6.7zM77.5 39.3c-8.4 0-15.3-6.9-15.3-15.3S69 8.7 77.5 8.7 92.8 15.6 92.8 24s-6.9 15.3-15.3 15.3zm0-27.6c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3S89.8 30.8 89.8 24s-5.5-12.3-12.3-12.3z"}),t("path",{d:"M77.8 22.3h-3.5c-.5 0-.9-.4-.9-.9 0-.4.2-.7.4-1l3.6-4.2c.3-.4.6-.6 1.2-.6.5 0 .9.4.9.9v4.3h.5c.4 0 .8.3.8.8s-.3.7-.8.7h-.4v1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-1zm0-1.5v-2.6l-2.2 2.6h2.2zM72.6 25.8c0-.3.3-.6.6-.6s.6.3.6.6v1.6c.3-.4.6-.7 1.3-.7.9 0 1.5.6 1.5 1.6v2.2c0 .3-.3.6-.6.6s-.6-.3-.6-.6v-1.8c0-.6-.3-.9-.7-.9s-.8.3-.8.9v1.8c0 .3-.3.6-.6.6s-.6-.3-.6-.6v-4.7zM77.1 27.4c0-.3.3-.6.6-.6s.6.3.6.6v.2c.2-.4.5-.8.8-.8.4 0 .6.2.6.6 0 .3-.2.5-.5.6-.6.1-1 .6-1 1.5v1.1c0 .3-.3.6-.6.6s-.6-.3-.6-.6v-3.2zM80 30.7c-.1-.1-.2-.2-.2-.4 0-.3.2-.5.5-.5.1 0 .2 0 .2.1.4.3.8.4 1.2.4.4 0 .5-.1.5-.3 0-.3-.4-.4-.9-.5-.6-.2-1.3-.5-1.3-1.3 0-.9.7-1.4 1.6-1.4.4 0 .9.1 1.3.3.2.1.3.2.3.5s-.2.5-.5.5c-.1 0-.1 0-.2-.1-.3-.2-.7-.3-.9-.3-.3 0-.4.1-.4.3 0 .2.4.4.9.5.6.2 1.3.5 1.3 1.3 0 1-.7 1.4-1.6 1.4-.7 0-1.3-.2-1.8-.5zM77.5 90.4c-8.4 0-15.3-6.9-15.3-15.3S69 59.8 77.5 59.8s15.3 6.8 15.3 15.3-6.9 15.3-15.3 15.3zm0-27.5c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3S89.8 82 89.8 75.2s-5.5-12.3-12.3-12.3z"}),t("path",{d:"M74.5 73c0-1 .5-1.6 1.4-2.1-.6-.4-1.1-.9-1.1-1.8 0-1.3 1.2-2.3 3-2.3s3 1 3 2.3c0 .9-.4 1.4-1.1 1.8.9.4 1.4 1 1.4 2 0 1.6-1.4 2.5-3.2 2.5-2 0-3.4-.9-3.4-2.4zm4.7-.2c0-.7-.6-1.1-1.5-1.1-.8 0-1.5.4-1.5 1s.5 1 1.5 1c1 .2 1.5-.3 1.5-.9zm-.2-3.5c0-.5-.4-1-1.2-1-.8 0-1.2.5-1.2 1 0 .6.5 1 1.2 1s1.2-.4 1.2-1zM72.6 77c0-.3.3-.6.6-.6s.6.3.6.6v1.6c.3-.4.6-.7 1.3-.7.9 0 1.5.6 1.5 1.6v2.2c0 .3-.3.6-.6.6s-.6-.3-.6-.6v-1.8c0-.6-.3-.9-.7-.9s-.8.3-.8.9v1.8c0 .3-.3.6-.6.6s-.6-.3-.6-.6V77zM77.1 78.5c0-.3.3-.6.6-.6s.6.3.6.6v.2c.2-.4.5-.8.8-.8.4 0 .6.2.6.6 0 .3-.2.5-.5.6-.6.1-1 .6-1 1.5v1.1c0 .3-.3.6-.6.6s-.6-.3-.6-.6v-3.2zM80 81.9c-.1-.1-.2-.2-.2-.4 0-.3.2-.5.5-.5.1 0 .2 0 .2.1.4.3.8.4 1.2.4.4 0 .5-.1.5-.3 0-.3-.4-.4-.9-.5-.6-.2-1.3-.5-1.3-1.3 0-.9.7-1.4 1.6-1.4.4 0 .9.1 1.3.3.2.1.3.2.3.5s-.2.5-.5.5c-.1 0-.1 0-.2-.1-.3-.2-.7-.3-.9-.3-.3 0-.4.1-.4.3 0 .2.4.4.9.5.6.2 1.3.5 1.3 1.3 0 1-.7 1.4-1.6 1.4-.7-.1-1.3-.2-1.8-.5zM61.3 49.5l-2.7-6.4V35c0-2.1-1.7-3.8-3.8-3.8H27.4c-2.1 0-3.8 1.7-3.8 3.8v8.1l-2.5 6.6c-.5 1.2-.7 2.5-.7 3.8v32.3c0 2 1.7 3.7 3.7 3.7h34.4c2 0 3.7-1.7 3.7-3.7V53.7c-.1-1.4-.4-2.8-.9-4.2zm-4.4 27.4c0 2-1.7 3.7-3.7 3.7H29.4c-2 0-3.7-1.6-3.7-3.7v-18c0-2 1.7-3.7 3.7-3.7h23.8c2 0 3.7 1.7 3.7 3.7v18z"}),t("path",{d:"M32.9 63c0-.6.5-1.1 1.1-1.1h3.4c1-.1 2.1.3 2.9 1 .6.6.9 1.4.8 2.2.1 1.3-.7 2.6-2 3l1.5 1.8c.2.2.3.5.3.8 0 .6-.4 1-1 1-.4 0-.8-.2-1.1-.6l-2.1-2.7H35v2.2c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1V63zm4.3 3.7c1 0 1.7-.6 1.7-1.4 0-.9-.7-1.4-1.7-1.4H35v2.8h2.2zM46.2 71.9c-2.1.1-3.8-1.5-3.9-3.6V68c-.1-2.1 1.5-3.8 3.6-3.9h.2c2 0 3.6 1.5 3.6 3.5v.1c0 .6-.4 1-1 1h-4.2c.1.9.9 1.5 1.8 1.5.5 0 1.1-.2 1.5-.5.1-.1.3-.2.5-.2.5 0 .8.4.9.8 0 .3-.1.5-.3.7-.8.6-1.7.9-2.7.9zm1.4-4.5c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6h3.2z"})]}))};v.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var l=e((function(c){var e=c.size,o=c.variant,n=c.iconColor,l=c.bgColor,a=c.hoverBgColor,h=c.hoverIconColor,p=c.withHoverEffect,m=c.margin,f=c.fillOpacity,z=r(c,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},s({size:e,variant:o,iconColor:n,bgColor:l,hoverBgColor:a,hoverIconColor:h,withHoverEffect:p,margin:m,fillOpacity:f},z),{children:t(v,Object.assign({},z,{width:"1em",height:"1em"}),void 0)}),void 0)}));l.displayName="Administration391LineIcon";var a=Object.assign(l,{Style:i});export default a;
