"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,e=require("styled-components"),n=(t=e)&&"object"==typeof t&&"default"in t?t.default:t,o=require("@medly-components/utils"),i=n("label").withConfig({componentId:"sc-1du51u0-0"})(["top:",";left:0;cursor:text;user-select:none;position:absolute;pointer-events:none;transition:all 150ms cubic-bezier(0.4,0,0.2,1);"," transform-origin:0 0;touch-action:manipulation;transform:translateY(-50%);opacity:1;z-index:1;width:100%;max-width:min-content;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",""],(function(t){return t.multiline?"1.1rem":"50%"}),(function(t){var e=t.theme,n=t.size;return o.getFontStyle({theme:e,fontVariant:e.textField.textVariant[n]})}),(function(t){var n=t.required;return function(t,n){return n&&"fusion"!==t?e.css(["::after{content:' *';}"]):n||"fusion"!==t?void 0:e.css(["::after{content:' (optional)';}"])}(t.variant,n)}));exports.Label=i;
