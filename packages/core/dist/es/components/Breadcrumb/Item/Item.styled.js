import e from"styled-components";import{getFontStyle as t}from"@medly-components/utils";import r from"@babel/runtime/helpers/defineProperty";import{Text as n}from"../../Text/Text.js";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var i=e("li").attrs((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.theme.breadcrumb)})).withConfig({componentId:"qumdxm-0"})(["height:100%;display:flex;align-items:center;pointer-events:",";cursor:",";","{user-select:none;color:",";","}&:hover{","{color:",";}}"],(function(e){return e.disabled&&"none"}),(function(e){var t=e.onClick;return e.disabled?"not-allowed":t&&"pointer"}),n.Style,(function(e){var t=e.theme,r=e.disabled;return t.breadcrumb.textColor[r?"disabled":"default"]}),(function(e){var r=e.theme;return t({theme:r,fontVariant:"button2"})}),n.Style,(function(e){var t=e.theme;return!e.disabled&&t.breadcrumb.textColor.hovered}));export{i as BreadcrumbItemStyled};
