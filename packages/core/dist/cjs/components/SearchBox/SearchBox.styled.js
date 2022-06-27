"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=require("styled-components"),o=(e=r)&&"object"==typeof e&&"default"in e?e.default:e,t=require("@medly-components/icons"),i=require("@medly-components/utils"),n=require("../SingleSelect/Options/Options.js"),s=require("./styles/utils.js"),a=require("./styles/icons.js"),d=require("./styles/options.js"),c=function(e){var o=e.theme,t=e.areOptionsVisible,i=e.size,n=o.searchBox.borderRadius[i][t?"active":"default"];return r.css(["border-radius:",";"],n)},u=function(e){var o=e.theme.searchBox;return r.css(["box-shadow:",";border-color:",";border-width:0.2rem;"],o.boxShadow.active,o.borderColor.active)},h=function(e){var o=e.theme.searchBox;return r.css(["border-color:",";transition:border-color 100ms,box-shadow 100ms;&:focus-within{",";","{","{*{fill:",";}}}}&:hover{",";}&:focus-within:hover{",";}"],o.borderColor.default,s.getBorderAndBoxShadow(o.borderColor.active,o.boxShadow.active),a.SearchIconWrapper,t.SvgIcon,o.borderColor.active,s.getBorderAndBoxShadow(o.borderColor.hovered,o.boxShadow.hovered,"1.5px"),s.getBorderAndBoxShadow(o.borderColor.active,o.boxShadow.active))},l=function(){return r.css(["padding-right:0.8rem;span{width:unset;min-width:unset;margin-right:0.4rem;&:last-of-type{margin-right:0;}}"])},b=o.div.withConfig({componentId:"sc-1cnun24-0"})(["display:flex;flex-direction:row;outline:none;box-sizing:border-box;height:",";border:1.5px solid;position:relative;padding:",";background-color:",";min-width:",";max-width:",";width:",";input{","}&:hover{background-color:",";}","{",";}",";",";",""],s.getSearchBoxSize,(function(e){var r=e.theme,o=e.size;return r.searchBox.padding[o]}),(function(e){var r=e.theme,o=e.areOptionsVisible;return r.searchBox.bgColor[o?"active":"default"]}),(function(e){return e.minWidth}),(function(e){return e.maxWidth}),(function(e){return e.fullWidth?"100%":"min-content"}),(function(e){var r=e.theme,o=e.size;return i.getFontStyle({theme:r,fontVariant:r.searchBox.textVariant[o]})}),(function(e){var r=e.theme;return!e.areOptionsVisible&&r.searchBox.bgColor.hovered}),n.Style,d.getOptionsStyles,c,(function(e){return e.areOptionsVisible?u:h}),(function(e){return e.hasCustomSearchFilter&&l}));exports.SearchBoxWrapper=b;
