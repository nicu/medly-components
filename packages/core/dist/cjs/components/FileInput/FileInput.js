"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(require("@babel/runtime/helpers/objectWithoutProperties")),l=require("react/jsx-runtime"),t=require("react"),r=(e(t),require("@medly-components/utils")),n=require("../FieldWithLabel/FieldWithLabel.js"),o=require("./FileInput.styled.js"),s=t.memo(t.forwardRef((function(e,s){var a=e.files,d=e.disabled,u=e.onFocus,c=e.onChange,b=e.description,f=e.label,p=e.placeholder,h=e.labelPosition,j=e.fullWidth,m=e.required,v=e.descriptionColor,g=i(e,["files","disabled","onFocus","onChange","description","label","placeholder","labelPosition","fullWidth","required","descriptionColor"]),q=e.id||"medly-file-input",C=r.useCombinedRefs(s,t.useRef(null)),F=t.useCallback((function(e){d&&e.preventDefault(),u&&u(e),C.current&&(C.current.value="")}),[d,u]),W=t.useCallback((function(e){var i=e.target;i.files&&c(i.files)}),[c]),x=t.useMemo((function(){return a.length?Array.from(a).map((function(e){return e.name})).join(", "):p||"Click to choose file"}),[a,p]);return l.jsxs(n.FieldWithLabel,Object.assign({id:"".concat(q,"-field")},{fullWidth:j,labelPosition:h},{children:[f&&l.jsx(n.FieldWithLabel.Label,Object.assign({},{required:m,labelPosition:h},{children:f}),void 0),l.jsxs(o.Label,Object.assign({id:"".concat(q,"-label"),htmlFor:q,onClick:F,disabled:d,fullWidth:j},{children:[x,l.jsx(o.Input,Object.assign({id:q,ref:C,files:a,required:m},g,{onChange:W}),void 0)]}),void 0),b&&l.jsx(n.FieldWithLabel.Description,Object.assign({textColor:v},{children:b}),void 0)]}),void 0)})));s.displayName="FileInput",s.defaultProps={files:[],disabled:!1,fullWidth:!1,required:!1,label:"",labelPosition:"top",description:""};var a=Object.assign(s,{Style:o.Input});exports.FileInput=a;
