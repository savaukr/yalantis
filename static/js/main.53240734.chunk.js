(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),a=n(6),s=n.n(a),o=(n(29),n(5)),l=(n(36),n(2)),d=(n(37),function(e){var t=e.employes,n=e.employe,r=e.changeChecked;return Object(c.jsx)("p",{onChange:r(t,n.id),children:Object(c.jsxs)("label",{htmlFor:n.id,children:[n.firstName+"  "+n.lastName,Object(c.jsx)("input",{type:"checkbox",id:n.id,name:n.lastName})]})})}),j=function(e){for(var t=e.employes,n=void 0===t?[]:t,r=e.isLoading,i=e.isError,a=e.changeChecked,s=[],o=65;o<91;o++)s.push(String.fromCodePoint(o));return n.length||r||i?Object(c.jsx)("div",{className:"list__container",children:r?Object(c.jsx)("p",{children:"Loading..."}):i?Object(c.jsx)("p",{children:"\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435."}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"list__left",children:[Object(c.jsx)("div",{className:"list__header",children:"Employees"}),s.map((function(e,t){var r=function(e,t){return t.filter((function(t){return t.lastName[0]===e})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d,{employes:t,employe:e,changeChecked:a})},e.id)}))}(e,n);return Object(c.jsxs)("div",{className:e+" letter",children:[e,Object(c.jsx)("ul",{children:r})]},e)}))]}),Object(c.jsx)("div",{className:"list__right",children:Object(c.jsx)("div",{className:"list__header",children:"Employees birthday"})})]})}):Object(c.jsx)("p",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u0431\u0456\u0442\u043d\u0438\u043a\u0456\u0432 \u043f\u0443\u0441\u0442\u0438\u0439"})},u=n(23),b="READ_EMPLOYES_REQUEST",p="READ_EMPLOYES_FAILURE",h="READ_EMPLOYES_SUCCESS",O="READ_EMPLOYES_REQUEST",E="READ_EMPLOYES_FAILURE",m="READ_EMPLOYES_SUCCESS",f=n(20),y=n.n(f),g=function(){return function(e){e({type:b}),y.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(t){return e((n=t.data.sort((function(e,t){return e.lastName>t.lastName?1:e.lastName<t.lastName?-1:0})).map((function(e){return e.checked=!1,e})),{type:h,payload:n}));var n})).catch((function(t){return e({type:p})}))}},x=function(e,t){return function(n){try{n({type:O});var c=Object(u.a)(e).slice(0),r=c.findIndex((function(e){return e.id===t}));c[r].checked=!c[r].checked,n(function(e){return{type:m,payload:e}}(c))}catch(i){n({type:E})}}},_=Object(o.b)((function(e){return{employes:e.infoEmployes.employes,isLoading:e.infoEmployes.isLoading,isError:e.infoEmployes.isError}}),(function(e){return{changeChecked:function(t,n){return function(){e(x(t,n))}}}}))((function(e){return Object(c.jsx)(j,Object(l.a)({},e))})),v=function(e){var t=Object(o.c)();return Object(r.useEffect)((function(){return t(g())})),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(_,{})})},L=n(4),S=n(21),N=n(22),k={employes:[],isLoading:!1,isError:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,isError:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{employes:t.payload,isLoading:!1,isError:!1});case p:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isError:!0});case O:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,isError:!1});case m:return Object(l.a)(Object(l.a)({},e),{},{employes:t.payload,isLoading:!0,isError:!1});case E:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,isError:!0});default:return e}},C=Object(L.combineReducers)({infoEmployes:R}),A=Object(N.composeWithDevTools)({serialize:!0}),M=Object(L.createStore)(C,A(Object(L.applyMiddleware)(S.a)));s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(o.a,{store:M,children:Object(c.jsx)(v,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.53240734.chunk.js.map