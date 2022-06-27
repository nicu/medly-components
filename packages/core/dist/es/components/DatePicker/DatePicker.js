import e from"@babel/runtime/helpers/objectWithoutProperties";import{jsxs as t,jsx as r}from"react/jsx-runtime";import{memo as n,forwardRef as a,useMemo as o,useRef as i,useState as l,useEffect as c,useCallback as d}from"react";import s from"@babel/runtime/helpers/slicedToArray";import{DateRangeIcon as u}from"@medly-components/icons";import{parseToDate as f,useCombinedRefs as m,useOuterClickNotifier as p}from"@medly-components/utils";import v from"@babel/runtime/helpers/defineProperty";import{format as b}from"date-fns";import{TextField as h}from"../TextField/TextField.js";import{Calendar as g}from"../Calendar/Calendar.js";import{Wrapper as y,DateIconWrapper as P}from"./DatePicker.styled.js";import D from"./datePickerPattern.js";function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=n(a((function(n,a){var v,j=n.value,w=n.onChange,x=n.size,S=n.displayFormat,C=n.fullWidth,I=n.minWidth,W=n.required,F=n.disabled,k=n.showDecorators,T=n.errorText,q=n.className,z=n.validator,B=n.popoverPlacement,E=n.minSelectableDate,M=n.maxSelectableDate,N=n.showCalendarIcon,Y=n.calendarIconPosition,A=n.defaultMonth,R=n.defaultYear,$=e(n,["value","onChange","size","displayFormat","fullWidth","minWidth","required","disabled","showDecorators","errorText","className","validator","popoverPlacement","minSelectableDate","maxSelectableDate","showCalendarIcon","calendarIconPosition","defaultMonth","defaultYear"]),L=n.id||(null===(v=n.label)||void 0===v?void 0:v.toLowerCase().replace(/\s/g,""))||"medly-datepicker",U=o((function(){return j instanceof Date?j:"string"==typeof j?f(j,S):null}),[j,S]),G=i(null),H=m(a,i(null)),J=l(0),K=s(J,2),Q=K[0],V=K[1],X=l(""),Z=s(X,2),_=Z[0],ee=Z[1],te=l(""),re=s(te,2),ne=re[0],ae=re[1],oe=l(!1),ie=s(oe,2),le=ie[0],ce=ie[1],de=l(!1),se=s(de,2),ue=se[0],fe=se[1],me=o((function(){return!!T||!!ne}),[T,ne]);c((function(){U&&ee(b(U,S).replace(new RegExp("\\/|\\-","g")," $& "))}),[U,S]);var pe=d((function(e){var t=e.target.value,r=f(t,S),n="Invalid Date"!==(null==r?void 0:r.toString());ee(t),w("Invalid Date"!==r.toString()?r:null),n&&be(e)}),[S,w]),ve=d((function(e){var t;(e.stopPropagation(),F)||(ce((function(e){return!e})),fe(!0),null===(t=H.current)||void 0===t||t.focus())}),[F]),be=d((function(e,t){var r,a=null===(r=H.current)||void 0===r?void 0:r.value,o=a&&f(a,S),i="Invalid Date"!==(null==o?void 0:o.toString()),l=n.required&&!a&&"Please fill in this field",c=(o<E||o>M)&&"Please select date from allowed range",d=a&&!i&&"Please enter a valid date",s=z&&z(o||null,e);ae(s||l||c||d||""),t&&t(e)}),[n.required,S,z,E,M]),he=d((function(e){var t;return(null===(t=H.current)||void 0===t?void 0:t.value)&&be(e,n.onBlur)}),[n.onBlur,S]),ge=d((function(e){return be(e,n.onInvalid)}),[n.onInvalid,S]),ye=d((function(e){fe(!0),n.onFocus&&n.onFocus(e)}),[n.onFocus]),Pe=d((function(e,t){w(e),ce(!1),ae(""),fe(!1),ae(z&&z(e,t)||"")}),[w]),De=d((function(){return""}),[]);p((function(e){fe(!1),ce(!1),ue&&(be(e,n.onBlur),n.onBlur&&n.onBlur(e))}),G),c((function(){U&&!le&&V((function(e){return e+1}))}),[U,le]);var je=function(){return r(P,Object.assign({variant:$.variant,isErrorPresent:me,isActive:ue,disabled:F,size:x},{children:r(u,{id:"".concat(L,"-calendar-icon"),title:"".concat(L,"-calendar-icon"),onClick:ve,size:x},void 0)}),void 0)};return t(y,Object.assign({id:"".concat(L,"-datepicker-wrapper"),ref:G,fullWidth:C,minWidth:I,size:x,className:q,variant:$.variant,placement:B},{children:[r(h,Object.assign({errorText:T||ne,id:L,ref:H,required:W},N&&("left"===Y?{prefix:je}:{suffix:je}),{fullWidth:!0,mask:S.replace(new RegExp("\\/|\\-","g")," $& ").toUpperCase(),pattern:D[S],size:x,disabled:F,showDecorators:k,value:_,onChange:pe,validator:De},O(O({},$),{},{onBlur:he,onFocus:ye,minWidth:I,onInvalid:ge})),Q),le&&r(g,{id:"".concat(L,"-calendar"),date:U,isErrorPresent:me,onChange:Pe,defaultMonth:A,defaultYear:R,minSelectableDate:E,maxSelectableDate:M},void 0)]}),void 0)})));w.defaultProps={label:"",value:null,variant:"filled",displayFormat:"MM/dd/yyyy",disabled:!1,required:!1,fullWidth:!1,minWidth:"20rem",minSelectableDate:new Date(1901,0,1),maxSelectableDate:new Date(2100,11,1),popoverPlacement:"bottom-start",showCalendarIcon:!0,showDecorators:!0,calendarIconPosition:"right"},w.displayName="DatePicker";var x=Object.assign(w,{Style:y});export{x as DatePicker};
