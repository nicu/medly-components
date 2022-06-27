"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/defineProperty")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),c=require("react"),o=(e(c),require("react/jsx-runtime")),i=require("../../SvgIcon/SvgIcon.styled.js");function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,c)}return t}function l(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?n(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(c,r))}))}return e}var v=function(e){return o.jsx("svg",l(l({},e),{},{children:o.jsx("path",{d:"M48.7 40.4l1.3.7 3.2-6.3c.4-.7.1-1.7-.7-2-.7-.4-1.7-.1-2 .7l-.6 1.3c-.8-3.5-2.7-6.6-5.5-9-4.1-3.2-9.3-4.4-14.3-3.2-.8.2-1.3 1-1.1 1.8.2.8 1 1.3 1.8 1.1 4.1-1 8.4 0 11.7 2.6 2.4 2.1 4 4.9 4.6 8l-2-1.1c-.7-.4-1.7-.1-2.1.6-.4.7-.1 1.7.6 2.1l4 2.2c.2.3.6.5 1.1.5zM88.9 59.9h-6c2.5-3.9 3.8-8.4 3.7-13.1 0-11.6-7.7-21.1-17.2-21.1s-17.2 9.5-17.2 21.1c-.1 4.7 1.2 9.2 3.7 13.1h-6.1c-2.5 0-4.5 2-4.5 4.5v.6c0 2.5 2 4.5 4.5 4.5v.8c0 6.4 3.7 12 9.1 14.7-1.5 1-2.8 2.4-3.7 4.1l-1.4 2.6H82v-1.8l1.6-.8c-.9-1.7-2.2-3.1-3.7-4.1 5.4-2.7 9-8.3 9.1-14.7v-.8c2.5 0 4.4-2 4.4-4.5v-.7c0-2.4-2-4.4-4.5-4.4zM55.8 46.8c0-9.7 6.1-17.5 13.6-17.5S83 37.2 83 46.9c.1 4.8-1.5 9.4-4.6 13h-2.7c3.7-2.7 6.1-7.5 6.1-13.1 0-8.4-5.6-15.2-12.5-15.2s-12.5 6.8-12.5 15.2c0 5.5 2.5 10.4 6.1 13.1h-2.7c-2.9-3.7-4.5-8.3-4.4-13.1zm4.7 0c0-6.4 4-11.6 8.9-11.6s8.9 5.2 8.9 11.6-4 11.6-8.9 11.6-8.9-5.2-8.9-11.6zm.2 41.3c1.2-.8 2.6-1.3 4.1-1.3h9.3c1.5 0 2.9.5 4.1 1.3H60.7zm24.7-17.8c0 7.1-5.8 12.9-12.9 12.9h-6.2c-7.1 0-12.9-5.8-12.9-12.9v-.7h32.1v.7zm4.4-5.3c0 .5-.4.9-.9.9H49.8c-.5 0-.9-.4-.9-.9v-.7c0-.5.4-.9.9-.9h39c.5 0 .9.4.9.9v.7zM16.4 10.2c-4.8 0-8.2 2.1-8.2 5.1v29.3c0 .8 0 2.4 5.9 7.1 1.3.9 3.1.9 4.5 0 5.9-4.7 5.9-6.3 5.9-7.1 0-1.6.2-25.1.2-28.6.1-.3.1-.5.1-.6-.2-3.1-3.7-5.2-8.4-5.2zm-4.1 5c.3-.2.6-.4.9-.5 1-.4 2-.6 3.1-.6 1.4-.1 2.9.3 4.1 1.1-.6.7-1.2 1.3-1.9 2l-.1.1c-.7.6-1.4 1.2-2.1 1.7-.7-.5-1.4-1.1-2.1-1.7-.6-.6-1.3-1.3-1.9-2.1zm-.1 29.1V20.7c.6.5 1.2 1 2 1.6.1.1.1.1.2.1v24.2c-.8-.6-1.6-1.4-2.2-2.3zm6.2 2.2V19.4v3.1c.1 0 .1-.1.2-.1.7-.6 1.4-1.1 1.9-1.6-.1 7.8-.2 21.3-.2 23.5-.5.8-1.2 1.5-1.9 2.2z"})}))};v.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var s=c.memo((function(e){var r=e.size,c=e.variant,n=e.iconColor,s=e.bgColor,a=e.hoverBgColor,h=e.hoverIconColor,u=e.withHoverEffect,f=e.margin,g=e.fillOpacity,p=t(e,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return o.jsx(i.SvgIconStyled,Object.assign({},l({size:r,variant:c,iconColor:n,bgColor:s,hoverBgColor:a,hoverIconColor:h,withHoverEffect:u,margin:f,fillOpacity:g},p),{children:o.jsx(v,Object.assign({},p,{width:"1em",height:"1em"}),void 0)}),void 0)}));s.displayName="Storage297LineIcon";var a=Object.assign(s,{Style:i.SvgIconStyled});module.exports=a;
