import{jsxs as e,Fragment as t,jsx as o}from"react/jsx-runtime";import{memo as r,useContext as n,useState as i,useMemo as c,useCallback as s,useEffect as a}from"react";import l from"@babel/runtime/helpers/slicedToArray";import{useUpdateEffect as u}from"@medly-components/utils";import d from"@babel/runtime/helpers/defineProperty";import{TableComponentsCommonPropsContext as f}from"../../context/TableComponentsCommonProps.context.js";import{loadingBodyData as m}from"../../constants.js";import p from"@babel/runtime/helpers/asyncToGenerator";import w from"@babel/runtime/regenerator";import b from"../../useRowSelector.js";import{ContentRow as y}from"./ContentRow/ContentRow.js";import{TitleRow as R}from"./TitleRow/TitleRow.js";function S(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?S(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var j=r((function(r){var d=n(f),S=d.columns,j=d.groupBy,O=d.rowIdentifier,g=d.getGroupedData,v=d.rowSelectionDisableKey,x=d.addColumnMaxSize,I=d.defaultExpandedRowIdentifier,P=d.isLoading,D=r.id,A=r.setUniqueIds,C=r.titleRowData,E=r.selectedTitleRowIds,T=r.onTitleRowSelection,z=r.showShadowAfterFrozenElement,k=r.onGroupedRowSelection,G=r.setSelectAllDisableState,F=i(C[O]===I),q=l(F,2),K=q[0],L=q[1],M=i(!0),B=l(M,2),N=B[0],U=B[1],H=i([]),J=l(H,2),Q=J[0],V=J[1],W=i(m),X=l(W,2),Y=X[0],Z=X[1],$=c((function(){return!N&&E.includes(D)}),[D,N,E]),_=c((function(){var e=Y.every((function(e){return v&&e[v]}));return!e&&G(!1),e}),[Y,v]),ee=b({data:Y,rowSelectionDisableKey:v,rowIdentifier:O,selectedIds:Q,setSelectedIds:V}),te=ee.uniqueIds,oe=ee.isAnyRowSelected,re=ee.areAllRowsSelected,ne=ee.toggleId,ie=s((function(){return L((function(e){return!e}))}),[]),ce=s((function(){ne(-1),Q.length>0?k(Q):k(te)}),[ne]);return a((function(){K&&Y===m&&function(){var e=p(w.mark((function e(){var t;return w.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j||!g){e.next=8;break}return U(!0),e.next=4,g(C[j]);case 4:t=e.sent,U(!1),Z(t),A((function(e){return Array.from(new Set(e.concat(C[j])))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[K]),u((function(){$!==re&&T(D)}),[re]),u((function(){$!==re&&($?(V(te),k(te.filter((function(e){return!Q.includes(e)})))):Q.length>0&&(V([]),k(Q)))}),[$]),e(t,{children:[o(R,{id:"".concat(D,"-title-row"),data:C,isRowSelected:!_&&$,isRowIndeterminate:oe,isRowExpanded:!P&&K,onRowSelection:ce,onClick:ie,isRowSelectionDisabled:N||_,showShadowAfterFrozenElement:z},void 0),o(f.Provider,Object.assign({value:h(h({},d),{},{columns:S.slice(1),isLoading:N})},{children:o(y,Object.assign({},{addColumnMaxSize:x,showShadowAfterFrozenElement:z,data:Y,id:"".concat(D,"-content-row"),selectedRowIds:Q,onRowSelection:function(e){k([e]),ne(e)},isRowExpanded:!P&&K}),void 0)}),void 0)]},void 0)}));j.displayName="GroupedRow";export{j as GroupedRow};
