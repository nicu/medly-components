import e,{css as t}from"styled-components";import{SvgIcon as o}from"@medly-components/icons";import{centerAligned as r}from"@medly-components/utils";var n=function(e){var o=e.theme,r=e.state;return t(["color:",";border-color:",";background-color:",";"],o.multiSelect.options.chip.color[r],o.multiSelect.options.chip.borderColor[r],o.multiSelect.options.chip.bgColor[r])},i=function(e){var o=e.theme,r=e.state;return t(["background-color:",";*{fill:",";}"],o.multiSelect.options.chip.icon.bgColor[r],o.multiSelect.options.chip.icon.color[r])},m=e("button").attrs({type:"button"}).withConfig({componentId:"sc-1tumqs6-0"})(["user-select:none;border:1px solid;max-width:max-content;cursor:default;border-radius:",";padding:0 0.3rem 0 0.9rem;margin:0.2rem;"," ",";","{padding:0.2rem;border-radius:50%;cursor:pointer;margin-left:0.6rem;font-size:1.2rem;",";&:hover{",";}}&:focus{outline:none;}&:hover{",";}&:disabled{",";& > ","{cursor:not-allowed;",";}}"],(function(e){return e.theme.multiSelect.options.chip.borderRadius}),r(),(function(e){var t=e.theme;return n({theme:t,state:"default"})}),o,(function(e){var t=e.theme;return i({theme:t,state:"default"})}),(function(e){var t=e.theme;return i({theme:t,state:"hovered"})}),(function(e){var t=e.theme;return n({theme:t,state:"hovered"})}),(function(e){var t=e.theme;return n({theme:t,state:"disabled"})}),o,(function(e){var t=e.theme;return i({theme:t,state:"disabled"})}));export{m as Chip};
