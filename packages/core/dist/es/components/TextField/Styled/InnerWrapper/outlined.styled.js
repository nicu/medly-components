import{css as r}from"styled-components";import{rgba as o}from"polished";var e=function(e){var d=e.outlined,t=e.disabled,i=e.isErrorPresent;return r(["border-radius:",";background-color:",";input{box-shadow:0 0 0 100000px "," inset;}&::after{content:'';box-sizing:border-box;width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background-color:transparent;transition:all 100ms ease-out;border-radius:",";border-width:",";border:0.1rem solid ",";}&:hover{box-shadow:",";}&:focus-within{border-radius:",";box-shadow:0 0.2rem 0.8rem ",";}&:hover::after{border-color:",";border-width:",";}&:focus-within::after{border-color:",";border-radius:",";border-width:",";}"],d.default.borderRadius,d.default.bgColor,d.default.bgColor,d.default.borderRadius,d.default.borderRadius,d.default.borderColor,!t&&"0px 0.2rem 0.8rem ".concat(o(d.hover.shadowColor,.2)),d.active.borderRadius,o(d[i?"error":"active"].shadowColor,.2),!t&&d.hover.borderColor,!t&&d.hover.borderWidth,d.active.borderColor,d.active.borderRadius,d.active.borderWidth)};export{e as outlinedStyle};
