import c from"@babel/runtime/helpers/defineProperty";import r from"@babel/runtime/helpers/objectWithoutProperties";import{memo as e}from"react";import{jsx as o,jsxs as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(c,r){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable}))),e.push.apply(e,o)}return e}function v(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){c(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(o,c))}))}return r}var s=function(c){return t("svg",v(v({},c),{},{children:[o("path",{d:"M24.6 9.2C15.9 9.2 8.9 16.3 8.9 25S16 40.8 24.7 40.8 40.4 33.7 40.4 25 33.3 9.2 24.6 9.2zM12.9 25c0-2.5.8-4.8 2.1-6.7l16.4 16.4c-1.9 1.3-4.2 2.1-6.7 2.1-6.6-.1-11.8-5.3-11.8-11.8zm21.4 6.7L17.9 15.3c1.9-1.3 4.2-2.1 6.7-2.1 6.5 0 11.8 5.3 11.8 11.8 0 2.5-.8 4.8-2.1 6.7zM88.3 41.1L85 33.2v-10c0-2.6-2.1-4.6-4.6-4.6H46.8c-2.6 0-4.6 2.1-4.6 4.6v10l-3.1 8.1c-.6 1.5-.9 3.1-.9 4.7v39.5c0 2.5 2 4.5 4.5 4.5h42.1c2.5 0 4.5-2 4.5-4.5V46.2c.1-1.7-.3-3.5-1-5.1zm-5.4 11.4v22.1c0 2.5-2 4.5-4.5 4.5H49.2c-2.5 0-4.5-2-4.5-4.5v-22c0-2.5 1.9-4.6 4.4-4.6H78.3c2.6 0 4.6 2 4.6 4.5z"}),o("path",{d:"M49.6 64.9c-.1 0-.3 0-.4.1-.3.3-.8.4-1.2.4h-.1c-.9-.1-1.6-.9-1.5-1.8 0-.9.7-1.7 1.6-1.7.4 0 .8.1 1.2.4.1.1.2.1.4.1s.4-.1.5-.2c.2-.3.2-.6-.1-.9-.5-.4-1.2-.6-1.9-.6H48c-1.6 0-2.8 1.3-2.8 2.9v.1c0 1.6 1.3 2.8 2.9 2.8.7 0 1.5-.2 2-.7.1-.1.2-.3.2-.4-.1-.3-.4-.5-.7-.5zM51.8 60.6c-.4 0-.7.2-.7.6 0 .3.3.5.6.6.4.1.7-.2.8-.6 0-.4-.3-.6-.7-.6zM51.8 62.1c-.3 0-.6.3-.6.6v3.2c0 .3.3.6.6.6s.6-.3.6-.6v-3.2c0-.3-.3-.6-.6-.6zM55.4 63.8c-.5-.2-.9-.3-.9-.5s.2-.3.4-.3c.3 0 .6.1.9.3.1 0 .1.1.2.1.3 0 .5-.2.5-.5 0-.2-.1-.4-.3-.5-.4-.2-.9-.3-1.3-.3h-.1c-.8 0-1.4.6-1.4 1.4 0 .8.8 1.1 1.3 1.3.5.1.9.2.9.5 0 .2-.2.3-.5.3-.4 0-.8-.2-1.2-.4-.1 0-.1-.1-.2-.1-.3 0-.5.2-.5.5 0 .2.1.3.2.4.5.3 1.1.5 1.7.5.9 0 1.6-.4 1.6-1.4 0-.8-.8-1.1-1.3-1.3zM59.3 62.1c-.5 0-.9.1-1.4.2-.2.1-.3.3-.3.5 0 .3.2.5.5.5h.2c.3-.1.6-.1.8-.1.6 0 .9.3.9.8-.3-.1-.7-.2-1-.2-1 0-1.7.4-1.7 1.4v.2c.1.7.7 1.3 1.5 1.2.5 0 1-.2 1.3-.5 0 .3.3.5.6.5s.6-.3.6-.6v-2c0-.5-.1-1.1-.5-1.4-.5-.4-1-.6-1.5-.5zm.8 2.8c0 .4-.4.8-1 .7-.4 0-.7-.2-.7-.5 0-.4.3-.6.8-.6.3 0 .5.1.8.2v.2zM64.8 62c-.5 0-1 .2-1.3.7 0-.3-.3-.6-.6-.6s-.6.3-.6.6v4.4c0 .3.3.6.6.6s.6-.3.6-.6v-1.3c.3.4.8.7 1.3.6h.2c1.1-.1 1.9-1.1 1.8-2.2V64c0-1.1-.9-2-2-2zm.8 2.5c-.1.6-.6 1-1.1.9s-1-.6-.9-1.1v-.2c.1-.6.6-1 1.1-.9.6.1 1 .6.9 1.1v.2zM69.7 62.1c-.4 0-.6.4-.8.8v-.2c0-.3-.3-.6-.6-.6s-.6.3-.6.6v3.2c0 .3.3.6.6.6s.6-.3.6-.6v-1.1c0-.9.4-1.3 1-1.5.3-.1.5-.3.5-.6v-.1c-.1-.3-.4-.5-.7-.5zM71.7 60.6c-.4 0-.7.2-.7.6 0 .3.3.5.6.6.4.1.7-.2.8-.6 0-.4-.3-.6-.7-.6zM71.7 62.1c-.3 0-.6.3-.6.6v3.2c0 .3.3.6.6.6s.6-.3.6-.6v-3.2c0-.3-.3-.6-.6-.6zM77.1 60.5c-.3 0-.6.3-.5.7v1.6c-.3-.4-.8-.7-1.3-.6h-.2c-1.1.1-1.9 1.1-1.8 2.2v.2c0 1.1.9 2 2 2 .5 0 1-.2 1.3-.7v.2c0 .3.3.6.7.5.3 0 .6-.3.5-.7v-4.7-.2c-.1-.3-.4-.6-.7-.5zm-1.6 4.8c-.6 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .5 1 1 .1.6-.4 1-1 1zM80.7 62.1c-1.2.1-2.1 1.1-2 2.2v.2c.1 1.2 1 2.1 2.2 2 .5 0 1.1-.2 1.5-.5.1-.1.2-.2.2-.4 0-.3-.2-.5-.5-.5-.1 0-.2 0-.3.1-.2.2-.6.3-.9.3-.5 0-1-.3-1.1-.8h2.4c.3 0 .5-.3.5-.6V64c.1-1.1-.8-2-2-1.9zm1 1.9h-1.8c.1-.6.4-.9.9-.9s.9.4.9.9z"})]}))};s.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var l=e((function(c){var e=c.size,t=c.variant,n=c.iconColor,l=c.bgColor,a=c.hoverBgColor,p=c.hoverIconColor,h=c.withHoverEffect,f=c.margin,m=c.fillOpacity,b=r(c,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return o(i,Object.assign({},v({size:e,variant:t,iconColor:n,bgColor:l,hoverBgColor:a,hoverIconColor:p,withHoverEffect:h,margin:f,fillOpacity:m},b),{children:o(s,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));l.displayName="Administration307LineIcon";var a=Object.assign(l,{Style:i});export default a;
