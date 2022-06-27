"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react/jsx-runtime"),o=require("react"),t=(e(o),require("styled-components")),i=(e(t),require("@medly-components/icons")),n=require("../Popover/Popover.js"),l=require("./HelperAndErrorTextTooltip.styled.js"),s=o.memo((function(e){var s=e.id,c=e.errorText,p=e.helperText,d=o.useContext(t.ThemeContext);return c||p?r.jsxs(n.Popover,Object.assign({interactionType:"hover"},{children:[r.jsx(l.PopoverIconContainer,{children:c?r.jsx(i.ErrorIcon,{title:"error-icon",iconColor:d.helperAndErrorTextTooltip.errorIconColor,size:"S"},void 0):r.jsx(i.InfoOutlineIcon,{size:"S",title:"info-icon"},void 0)},void 0),r.jsx(l.HelperAndErrorTextPopover,Object.assign({placement:"top",withArrow:!0,bgColor:"#211F46"},{children:r.jsx(l.HelperAndErrorTextContainer,Object.assign({id:"".concat(s,"-helper-text")},{children:(c||p||"").trim()}),void 0)}),void 0)]}),void 0):null}));s.displayName="HelperAndErrorTextTooltip",exports.HelperAndErrorTextTooltip=s;
