import r,{css as t}from"styled-components";import{getFontStyle as o}from"@medly-components/utils";var e=r("div").withConfig({componentId:"sc-1msmxxr-0"})(["position:absolute;left:-1000px;opacity:0;",""],(function(r){var t=r.theme;return o({theme:t,fontVariant:"body2"})})),n=function(r,o){return t(["content:'';position:absolute;pointer-events:none;background-color:",";height:",";width:",";left:",";right:",";top:",";bottom:",";transform:",";"],(function(r){var t=r.theme;return t.table.header.separatorColor||t.table.borderColor}),"left"!==r&&"right"!==r?"1px":"XS"===o?"calc(100% - 2rem)":"calc(100% - 3.2rem)","top"===r||"bottom"===r?"calc(100% - 3.2rem)":"1px","top"===r||"bottom"===r?"50%":"left"===r&&"0","right"===r&&"0","left"===r||"right"===r?"50%":"top"===r&&"0","bottom"===r&&"0","left"===r||"right"===r?"translateY(-50%)":"translateX(-50%) ")},a=r("table").withConfig({componentId:"sc-1msmxxr-1"})(["overflow:auto;display:block;border:",";padding:",";border-radius:",";border-collapse:separate;border-spacing:0;margin:0;max-height:",";outline:none;*:not(svg){box-sizing:border-box;}&::-webkit-scrollbar-thumb{border-radius:1rem;background-color:",";}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar{height:0.5rem;width:0.5rem;}&::-webkit-scrollbar-track:horizontal{background-color:transparent;border-top:",";}&::-webkit-scrollbar-track:vertical{background-color:transparent;border-left:",";}"],(function(r){var t=r.showRowWithCardStyle,o=r.theme;return!t&&"1px solid ".concat(o.table.borderColor)}),(function(r){return r.showRowWithCardStyle?"0 0 0.8rem 0":0}),(function(r){return r.theme.table.borderRadius}),(function(r){return r.maxHeight}),(function(r){return r.theme.table.scrollBarColor}),(function(r){var t=r.showRowWithCardStyle,o=r.theme;return!t&&"0.1rem solid ".concat(o.table.borderColor)}),(function(r){var t=r.showRowWithCardStyle,o=r.theme;return!t&&"0.1rem solid ".concat(o.table.borderColor)}));export{e as HiddenDiv,a as TableStyled,n as getBorder};
