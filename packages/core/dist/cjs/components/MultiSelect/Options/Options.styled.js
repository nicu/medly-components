"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,o=require("styled-components"),r=(e=o)&&"object"==typeof e&&"default"in e?e.default:e,t=require("@medly-components/utils"),i=require("../../Selectors/Selectors.styled.js"),n=require("../../Checkbox/Checkbox.js"),d=r.div.withConfig({componentId:"sc-1pixayc-0"})(["border-bottom:1px solid ",";padding:0.5rem 1.3rem;> p{margin:0.3rem;}"],(function(e){return e.theme.colors.grey[200]})),s=r.div.withConfig({componentId:"sc-1pixayc-1"})(["position:absolute;top:",";box-shadow:",";background-color:",";box-sizing:border-box;border-radius:0.4rem;width:100%;z-index:4;"],(function(e){var o=e.theme,r=e.size;return o.textField.height[r]}),(function(e){var o=e.theme;return"0px 2px 8px ".concat(o.colors.grey[400])}),(function(e){return e.theme.colors.white})),c=r.ul.withConfig({componentId:"sc-1pixayc-2"})(["list-style:none;padding:0;margin:0;max-height:20rem;overflow:auto;","{width:100%;margin:0;padding-top:0.7rem;padding-bottom:0.7rem;box-sizing:border-box;span{","}&:hover{background-color:",";}}> ","{padding:0.7rem 0 0.7rem 1.3rem;width:100%;box-sizing:border-box;}> div{width:100%;box-sizing:border-box;}","{> label{padding-left:1.3rem;}}"],n.Checkbox.Style,(function(e){var o=e.theme,r=e.size;return t.getFontStyle({theme:o,fontVariant:o.multiSelect.options.textVariant[r]})}),(function(e){return e.theme.colors.grey[50]}),n.Checkbox.Style,i.SelectorGroup.Wrapper);exports.ChipArea=d,exports.Options=c,exports.OptionsWrapper=s;
