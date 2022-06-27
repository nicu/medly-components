import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as c}from"react";import{jsx as o,jsxs as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function n(r,e){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),c.push.apply(c,o)}return c}function l(e){for(var c=1;c<arguments.length;c++){var o=null!=arguments[c]?arguments[c]:{};c%2?n(Object(o),!0).forEach((function(c){r(e,c,o[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(r){return t("svg",l(l({},r),{},{children:[o("path",{d:"M40.5 28.3c-.3 0-.6 0-.9.1-.1-3.6-3-6.5-6.6-6.4h-.2v3.9h.2c1.4 0 2.5 1.1 2.6 2.5l.6 22.9c0 .6.5 1.1 1.1 1 .6 0 1.1-.5 1.1-1.1L37.9 35c-.1-1.3.8-2.4 2-2.7 1.4-.3 2.8.5 3.1 1.9 0 .2.1.3.1.5l1 33.3c.2 8.5-6.5 15.6-15 15.9h-1c-.7 0-1.5 0-2.3-.1-8-.5-14.6-6.5-15.9-14.5-.2-1.2-.3-2.5-.4-3.8l-.4-14.3c-.1-1.3.8-2.4 2-2.7.2 0 .4-.1.6-.1 1.4 0 2.5 1.1 2.6 2.5l.3 7.5c0 .6.4 1 1 1h.1c.6 0 1-.5 1-1.1l-.9-28.5c0-1.5 1.1-2.7 2.6-2.7h.1c1.4-.1 2.6 1 2.7 2.4l.6 21.8c0 .6.5 1.1 1.1 1h.3c.5-.2.8-.6.8-1.1l-.9-24c0-1.4 1-2.5 2.4-2.5h.1v-.1h.4c1.2.2 2 1.3 2 2.4l.8 23.4c0 .6.5 1 1.1 1h.1c.6 0 1.1-.5 1.1-1.1l-.7-21.8c0-1.5 1.1-2.7 2.6-2.8l-.1-3.9c-1 0-1.9.3-2.8.7-1.2-1.2-2.8-1.9-4.5-1.9v.1c-1.8 0-3.4.7-4.7 2-.2.2-.5.5-.6.8-.6-.2-1.2-.2-1.8-.2h-.2c-3.7.1-6.5 3.2-6.4 6.8l.4 14.5h-.5c-.5 0-1 .1-1.5.2-3.3.7-5.4 3.5-5.3 6.7l.4 14.3c.1 1.4.2 2.8.4 4.2 1.5 9.8 9.7 17.3 19.7 17.9.8.1 1.7.1 2.5.1h1.1c10.7-.3 19.2-9.3 18.8-20l-1-33.3c.1-3.6-2.8-6.4-6.4-6.4zM68.4 32.7h-.9c-2.6 0-5 1.1-6.7 3.1-1.3 1.8-1.8 4.1-1.3 6.2.9 6.5 4.9 10.6 5 17.2.1 4.8-3.3 8.2-6.3 11.5-3.3 3.5-5.8 7.6-7.3 12.2-2.7 8.8 10.1 15.4 16.6 9.9 3.4-2.9 12.5-19.1 15.1-23 2.8-4 5-8.3 6.7-12.9 2-5.1 1-10.8-2.5-14.9-4.6-6-10.8-9-18.4-9.3zM75.2 31.4c.7 1.3 2.4 1.8 3.7 1.1.4-.1.7-.3 1-.6 1.7-1.2 2.6-3.2 2.7-5.2.1-1.4-.7-2.7-2-3.2-1.3-.6-2.9-.3-3.9.8-1.3 1.3-2.1 3.1-2.1 5 .1.6.2 1.1.4 1.7.1.2.1.3.2.4zM82.1 34.5c0 .4.1.9.4 1.2.7.9 2 1.1 2.9.4 1.3-.7 2.2-2 2.4-3.4v-.6c-.1-1.3-1.3-2.4-2.6-2.3-.7 0-1.3.3-1.7.8-1 1-1.5 2.4-1.4 3.9zM91.2 35.7c-.9-.5-2-.4-2.7.3-.8.8-1.3 1.8-1.4 2.9H87c0 1.9 1.4 2.7 3 1.8 1.1-.5 1.9-1.5 2.2-2.7.3-.8-.2-1.9-1-2.3zM95 42.9c-.1-.9-.8-1.6-1.8-1.5-.8.1-1.5.6-1.8 1.3-.5.7-.6 1.6-.3 2.4.3.5.8.7 1.3.6 1.3-.3 2.3-1.3 2.5-2.6.1-.1.1-.2.1-.2zM55.5 30.9c3.2 0 6.3-1.2 8.6-3.4.1.3.3.7.4 1 .5 1.1 1.4 1.9 2.5 2.2 1.4.4 3 0 4-1.1 2.3-2.2 3.2-5.4 2.4-8.4-.2-.6-.5-1.2-.9-1.7-1.1-1.2-2.7-1.8-4.3-1.5-1.2.2-2.4.8-3.1 1.8-.2 1.3-.7 2.5-1.4 3.7 0 .3-.1.7-.1 1 0 1.1.1 2.1.5 3.1-.3-1-.5-2.1-.5-3.1 0-.3 0-.7.1-1-3 4.6-9.1 5.8-13.6 2.9-4.6-3-5.8-9.1-2.9-13.6 3-4.6 9.1-5.8 13.6-2.9 2.8 1.8 4.5 4.9 4.5 8.3 0 .6-.1 1.1-.2 1.7.8-1 1.9-1.6 3.1-1.8 0-7.1-5.9-12.9-13-12.8-7.1 0-12.9 5.9-12.8 13 .2 6.9 6 12.7 13.1 12.6z"}),o("path",{d:"M61.6 16.1c-.3-.5-.5-1-.6-1.5-.1-.3-.1-.7 0-1l.2-.8-.9.2c-.1 0-1.8.5-2 3.4v.4c-.3-.6-.7-1.8-1-2.9-.3-1.3-.5-2.7-.5-4v-.7l-.7.3c-1.5.7-2.7 1.9-3.3 3.5-.6 1.6-.5 3.3-.4 4.6 0 .6.1 1.2 0 1.6-.4-.6-.9-2-1.2-3.4l-.2-.9-.6.5s-4.2 3.7-.5 8.8c1.3 1.7 3.2 2.6 5.3 2.6.3 0 .6 0 1-.1 2.6-.3 4.8-2 5.7-4.3.6-1.4.7-2.9.4-4.4-.1-.7-.4-1.3-.7-1.9zM27.9 57.2c-.3-.8-1.1-1.3-2-1-.8.3-1.3 1.1-1 2 .6 1.9 2.1 2.5 3.1 2.9.9.4 1.2.5 1.3 1 .2.5 0 .8-.5 1.6-.5.9-1.4 2.3-.8 4.1.6 1.9 2.1 2.6 3.1 3 .9.4 1.2.5 1.3 1 .2.7.8 1.1 1.5 1.1.2 0 .3 0 .5-.1.8-.3 1.3-1.1 1-2-.6-1.9-2.1-2.5-3.1-3-.9-.4-1.2-.5-1.3-1-.2-.5 0-.8.5-1.6.5-.9 1.4-2.3.8-4.2-.6-1.9-2.1-2.6-3.1-3-.9-.2-1.1-.3-1.3-.8zM26.6 72.4c-.9-.4-1.2-.5-1.3-1-.2-.5 0-.8.5-1.6.5-.9 1.4-2.3.8-4.2-.6-1.9-2.1-2.5-3.1-3-.9-.4-1.2-.5-1.3-1-.3-.8-1.1-1.3-2-1-.8.3-1.3 1.1-1 2 .6 1.9 2.1 2.5 3.1 2.9.9.4 1.2.5 1.3 1 .2.5 0 .8-.5 1.6-.5.9-1.4 2.3-.8 4.1.6 1.9 2.1 2.6 3.1 3 .9.4 1.2.5 1.3 1 .2.7.8 1.1 1.5 1.1.2 0 .3 0 .5-.1.8-.3 1.3-1.1 1-2-.6-1.8-2.1-2.4-3.1-2.8z"})]}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"};var h=c((function(r){var c=r.size,t=r.variant,n=r.iconColor,h=r.bgColor,f=r.hoverBgColor,p=r.hoverIconColor,v=r.withHoverEffect,s=r.margin,b=r.fillOpacity,g=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return o(i,Object.assign({},l({size:c,variant:t,iconColor:n,bgColor:h,hoverBgColor:f,hoverIconColor:p,withHoverEffect:v,margin:s,fillOpacity:b},g),{children:o(a,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));h.displayName="SideEffect1665250LineIcon";var f=Object.assign(h,{Style:i});export default f;
