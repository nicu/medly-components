import n,{css as t}from"styled-components";import{defaultTheme as i}from"@medly-components/theme";var r=n("ul").attrs((function(n){return{spacings:n.theme.spacing}})).withConfig({componentId:"sc-8e7n0t-0"})(["padding:0;margin:0;display:flex;list-style:none;flex-direction:",";",";",";"],(function(n){return"horizontal"===n.variant?"row":"column"}),(function(n){var i=n.spacings;return"horizontal"===n.variant&&function(n){return t(["li{margin:0 ",";&:last-child{margin-right:",";}&:first-child{margin-left:",";}}"],n.S1,n.S2,n.S2)}(i)}),(function(n){var i=n.spacings;return"vertical"===n.variant&&function(n){return t(["li{margin:"," 0;&:last-child{margin-bottom:",";}&:first-child{margin-top:",";}}"],n.S1,n.S2,n.S2)}(i)}));r.defaultProps={theme:i};export{r as ListStyled};
