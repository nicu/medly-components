import e,{css as r}from"styled-components";import{SvgIcon as o}from"@medly-components/icons";import{centerAligned as t}from"@medly-components/utils";import n from"@babel/runtime/helpers/defineProperty";import{Text as i}from"../Text/Text.js";import{rgba as c}from"polished";import{getSelectorLabelPositionStyle as s}from"../Selectors/Selectors.styled.js";function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function d(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var l=function(e){var r=e.theme,o=e.size;return r.checkbox.sizes[o||r.checkbox.defaultSize]},u=function(e){var t=e.iconColor,n=e.hasError,i=e.disabled,c=e.bgColor,s=i?"disabled":n?"error":"active";return r(["border-color:",";background-color:",";","{transform:scale(1);*{fill:",";}}"],c[s],c[s],o,t[s])},b=function(e){var o=e.borderColor,t=e.hasError,n=e.disabled;return r(["background-color:transparent;border-color:",";"],o[n?"disabled":t?"error":"default"])},f=function(e){return function(o){var t=o.isActive,n=o.hasError,i=o.borderColor,s=o.theme,a=o.bgColor,d=n?"error":"active",l="pressed"===e?"pressed":d,u=s.checkbox.boxShadow,b=u.blurRadius,f=u.spreadRadius;return r(["box-shadow:0 0 "," "," ",";border-color:",";background-color:",";"],b,f,c(i[d],"pressed"===e?.5:.35),"focused"!==e&&t?a[e][d]:i[l],t&&"focused"!==e&&a[e][d])}},h=e.div.withConfig({componentId:"aaeo7e-0"})(["border:0.15rem solid;box-sizing:border-box;width:100%;height:100%;border-radius:",";transition:all 100ms ease-out;"," ","{pointer-events:none;z-index:1;transition:all 200ms ease-in-out;transform:scale(0);width:100%;height:100%;margin-right:0.05rem;}"],(function(e){return e.theme.checkbox.borderRadius}),t("flex"),o),m=e.input.attrs((function(e){return d({type:"checkbox"},e.theme.checkbox)})).withConfig({componentId:"aaeo7e-1"})(["opacity:0;margin:0;top:0;left:0;width:100%;height:100%;outline:none;position:absolute;&:checked ~ ","{",";}&:not(:checked) ~ ","{","}&:not(:disabled){&:focus{& ~ ","{","}&:not(:checked) ~ ","{border-color:",";}}}"],h,u,h,(function(e){return e.indeterminate?u:b}),h,f("focused"),h,(function(e){var r=e.hasError,o=e.borderColor;return!e.indeterminate&&o[r?"error":"active"]})),p=e("div").withConfig({componentId:"aaeo7e-2"})(["margin:0.3rem;flex-shrink:0;width:",";height:",";position:relative;"],l,l),g=e(i).withConfig({componentId:"aaeo7e-3"})(["display:block;font-size:1.2rem;line-height:1.6rem;color:",";margin-bottom:0.5rem;"],(function(e){var r=e.theme,o=e.disabled;return r.checkbox.helperTextColor[o?"disabled":"error"]})),v=e("label").attrs((function(e){return d({},e.theme.checkbox)})).withConfig({componentId:"aaeo7e-4"})(["display:",";cursor:",";*{cursor:",";}background-color:",";"," &&&:hover{","{",";}}&&&:active{","{",";}}"],(function(e){return e.fullWidth?"flex":"inline-flex"}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){var r=e.theme,o=e.isHovered;return!e.disabled&&o&&r.colors.grey[50]}),s,h,(function(e){return!e.disabled&&f("hovered")}),h,(function(e){return!e.disabled&&f("pressed")}));export{v as CheckboxWithLabelWrapper,p as CheckboxWrapper,g as ErrorText,m as HiddenCheckbox,h as StyledCheckbox};
