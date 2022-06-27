import{useState as e,useMemo as t,useCallback as r,useEffect as a}from"react";import n from"@babel/runtime/helpers/slicedToArray";import{parseToDate as o}from"@medly-components/utils";import i from"@babel/runtime/helpers/defineProperty";import{isValidDate as l}from"../../Calendar/helper.js";import{getMaskedValue as s}from"../../TextField/getMaskedValue.js";import{getFormattedDate as u}from"../helpers/getFormattedDate.js";function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(i){var c=i.disabled,p=i.displayFormat,v=i.isActive,f=i.startDateRef,D=i.endDateRef,g=i.errorText,m=i.required,b=i.validator,T=i.selectedDates,O=i.onCalendarIconClick,y=i.onDateChange,h=i.setFocusedElement,j=e(""),E=n(j,2),P=E[0],A=E[1],S=e(""),x=n(S,2),C=x[0],F=x[1],k=e(""),I=n(k,2),R=I[0],w=I[1],M=t((function(){return p.replace(new RegExp("\\/|\\-","g")," $& ").toUpperCase()}),[p]),V=e(M),_=n(V,2),B=_[0],L=_[1],q=e(M),N=n(q,2),U=N[0],W=N[1],$=t((function(){return!!g||!!P}),[g,P]),z=r((function(e){return e.stopPropagation()}),[]),G=r((function(e){var t;(e.stopPropagation(),c)||(O(!0),null===(t=f.current)||void 0===t||t.focus())}),[c]),H=r((function(e){O(!0),h(e.target.name),e.target.setSelectionRange(e.target.value.length,e.target.value.length)}),[]),J=r((function(e){var t=s(e,M),r=o(e.target.value,p),a="".concat(t).concat(M.substr(t.length));"START_DATE"===e.target.name?(F(t),L(a),"Invalid Date"!==r.toString()&&(h("END_DATE"),y(d(d({},T),{},{startDate:r})))):(w(t),W(a),"Invalid Date"!==r.toString()&&(h("START_DATE"),y(d(d({},T),{},{endDate:r}))))}),[T,y]),K=r((function(e){e.preventDefault();var t=e.target,r=t.value&&"Invalid Date"===o(t.value,p).toString();r&&(A(r?"Enter valid date":""),y(d(d({},T),"START_DATE"===t.name?{startDate:null}:{endDate:null})))}),[T,y]),Q=r((function(e){var t;e.preventDefault();var r=e.target,a=b&&b(T,e)||"",n=r.value&&"Invalid Date"===o(r.value,p).toString(),i=b?a:r.validationMessage||(n?"Enter valid date":"");A(i),b&&(null===(t=("START_DATE"===r.name?f:D).current)||void 0===t||t.setCustomValidity(a))}),[b,p,T,y]),X=r((function(e){var t,r,a=b&&b(T,e)||"",n=!m||T.startDate||T.endDate?"":"Please fill in this field.";(A(b?a:n),b)&&(null===(t=f.current)||void 0===t||t.setCustomValidity(a),null===(r=D.current)||void 0===r||r.setCustomValidity(a))}),[b,T,m]);return a((function(){var e=T.startDate?u(T.startDate,p):"",t=T.endDate?u(T.endDate,p):"";F(e),w(t),L(e||M),W(t||M),l(T.startDate)&&l(T.endDate)&&A("")}),[v,T,p]),{mask:M,builtInErrorMessage:P,startDateText:C,endDateText:R,startDateMaskLabel:B,endDateMaskLabel:U,isErrorPresent:$,stopPropagation:z,onIconClick:G,onTextFieldFocus:H,handleTextChange:J,validateOnTextFieldBlur:K,validateOnTextFieldInvalid:Q,validateOnWrapperBlur:X}};export{p as useDateRangeTextFieldsHandlers};
