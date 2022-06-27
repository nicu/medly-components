import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",n(n({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.44 8.165c.1.26.15.54.15.85h3.01c0-.66-.13-1.26-.38-1.81s-.61-1.03-1.08-1.43a4.94 4.94 0 0 0-1.69-.94c-.67-.23-1.4-.34-2.21-.34-.79 0-1.52.1-2.18.29-.65.2-1.22.48-1.7.83-.48.36-.85.79-1.11 1.29-.27.51-.4 1.06-.4 1.67 0 .64.13 1.19.39 1.67.032.063.076.132.117.198l.033.052H12c-.64-.22-1.03-.45-1.41-.7-.49-.33-.74-.73-.74-1.21 0-.23.05-.45.15-.66.1-.21.25-.39.44-.55.19-.15.43-.27.72-.36.29-.09.64-.13 1.03-.13.4 0 .76.06 1.06.16.3.11.55.25.75.44.2.19.35.41.44.68zM3 12.495c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v.02c0 .55-.45 1-1 1h-2.87c.06.1.12.22.17.33.21.47.31 1.01.31 1.61 0 .64-.13 1.21-.38 1.71s-.61.93-1.07 1.27c-.46.34-1.02.6-1.67.79-.65.19-1.38.28-2.18.28-.48 0-.96-.05-1.44-.13-.48-.09-.94-.22-1.38-.39a5.69 5.69 0 0 1-1.22-.65c-.38-.26-.7-.57-.98-.92-.28-.36-.49-.76-.65-1.21-.16-.45-.24-1.03-.24-1.58h2.97c0 .45.11.9.25 1.21.14.31.34.56.59.75.25.19.56.33.91.42.35.09.75.13 1.18.13.38 0 .72-.05 1.01-.13.29-.09.52-.2.71-.35.19-.15.33-.33.42-.53.09-.21.14-.43.14-.66 0-.26-.04-.49-.11-.69-.08-.21-.22-.4-.43-.57-.21-.17-.5-.34-.87-.51-.076-.03-.17-.064-.269-.098-.095-.033-.193-.068-.281-.102H4c-.55 0-1-.45-1-1z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,c=r.variant,a=r.iconColor,f=r.bgColor,p=r.hoverBgColor,s=r.hoverIconColor,h=r.withHoverEffect,v=r.margin,g=r.fillOpacity,b=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:f,hoverBgColor:p,hoverIconColor:s,withHoverEffect:h,margin:v,fillOpacity:g},b),{children:t(l,Object.assign({},b,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="StrikethroughSIcon";var f=Object.assign(a,{Style:i});export default f;
