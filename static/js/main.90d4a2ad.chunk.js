(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),s=n(4),l=n(5),a=n(1),i=n.n(a),r=(n(12),n(13),n(0)),j=i.a.memo((function(t){var e=t.list;return Object(r.jsx)("ul",{className:"list",children:e.map((function(t){return Object(r.jsx)("li",{className:"list__item",children:t},t)}))})})),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(){var t=Object(a.useState)(u),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!0),i=Object(l.a)(o,2),b=i[0],h=i[1],O=Object(a.useState)(1),d=Object(l.a)(O,2),p=d[0],x=d[1],m=n.filter((function(t){return t.length>=p}));return Object(r.jsx)("div",{className:"App",children:b?Object(r.jsx)("button",{type:"button",onClick:function(){h(!b)},className:"start",children:"Start"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Goods count ".concat(m.length)}),Object(r.jsx)(j,{list:m}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",onClick:function(){c(Object(s.a)(n).reverse())},className:"button",children:"Reverse"}),Object(r.jsx)("button",{type:"button",onClick:function(){c(Object(s.a)(n).sort((function(t,e){return t.localeCompare(e)})))},className:"button",children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",onClick:function(){c(u),x(1)},className:"button",children:"Reset"}),Object(r.jsx)("button",{type:"button",onClick:function(){c(Object(s.a)(n).sort((function(t,e){return t.length-e.length})))},className:"button",children:"Sort by length"}),Object(r.jsxs)("select",{name:"length",onChange:function(t){var e=t.target.value;x(+e)},value:p,className:"select",children:[Object(r.jsx)("option",{value:"1",children:"1"}),Object(r.jsx)("option",{value:"2",children:"2"}),Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"4",children:"4"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"6",children:"6"}),Object(r.jsx)("option",{value:"7",children:"7"}),Object(r.jsx)("option",{value:"8",children:"8"}),Object(r.jsx)("option",{value:"9",children:"9"}),Object(r.jsx)("option",{value:"10",children:"10"})]})]})]})})};o.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.90d4a2ad.chunk.js.map