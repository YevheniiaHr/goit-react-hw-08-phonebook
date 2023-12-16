"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[248],{2634:function(n,e,r){r.d(e,{$0:function(){return l},Dx:function(){return d},NZ:function(){return p},v0:function(){return x}});var t,i,o,a,c,u=r(168),s=r(6487),l=(s.ZP.div(t||(t=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),s.ZP.section(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  flex-wrap: wrap;\n"])))),d=s.ZP.h1(o||(o=(0,u.Z)(["\n  font-size: 30px;\n"]))),p=s.ZP.h2(a||(a=(0,u.Z)(["\n  margin-bottom: 15px;\n  margin-top: 25px;\n"]))),x=s.ZP.p(c||(c=(0,u.Z)(["\n  color: red;\n"])))},2935:function(n,e,r){r.d(e,{Z:function(){return w}});var t,i,o,a,c=r(5705),u=r(8007),s=r(168),l=r(6487),d=l.ZP.label(t||(t=(0,s.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),p=(0,l.ZP)(c.gN)(i||(i=(0,s.Z)(["\n  padding: 4px;\n"]))),x=(0,l.ZP)(c.Bc)(o||(o=(0,s.Z)(["\n  font-size: 16px;\n  color: red;\n"]))),f=(0,l.ZP)(c.l0)(a||(a=(0,s.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),m=r(4420),h=r(2946),b=r(3634),Z=r(1686),j=r.n(Z),v=r(184),g=u.Ry().shape({name:u.Z_().required("Name is required"),number:u.Z_().required("Number is required")}),w=function(){var n=(0,m.v9)(h.Af),e=(0,m.I0)();return(0,v.jsx)(c.J9,{initialValues:{name:"",number:""},validationSchema:g,onSubmit:function(r,t){var i=t.resetForm,o=r.name,a=r.number;if(n.find((function(n){return n.name.toLowerCase().trim()===o.toLowerCase().trim()})))return i(),void j().Notify.failure("".concat(o," is already in contacts!"));e((0,b.uK)({name:o,number:a})),i()},children:(0,v.jsxs)(f,{children:[(0,v.jsxs)(d,{children:["Name",(0,v.jsx)(p,{name:"name",type:"text",placeholder:"Enter a name"}),(0,v.jsx)(x,{name:"name",component:"span"})]}),(0,v.jsxs)(d,{children:["Number",(0,v.jsx)(p,{name:"number",type:"tel",placeholder:"Enter a phone-number"}),(0,v.jsx)(x,{name:"number",component:"span"})]}),(0,v.jsx)("button",{type:"submit",children:"Add contact"})]})})}},7248:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,i,o,a=r(9170),c=r(2634),u=r(4420),s=r(168),l=r(6487),d=l.ZP.li(t||(t=(0,s.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),p=l.ZP.button(i||(i=(0,s.Z)(["\n  width: 90px;\n  padding: 5px;\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: darkgrey;\n    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,\n      5px 5px 15px 5px rgba(0, 0, 0, 0);\n  }\n"]))),x=r(3634),f=r(184),m=function(n){var e=n.id,r=n.name,t=n.number,i=(0,u.I0)();return(0,f.jsxs)(d,{children:[(0,f.jsxs)("p",{children:[r,": ",t]}),(0,f.jsx)(p,{type:"button",onClick:function(){i((0,x.GK)(e))},children:"Delete"})]})},h=l.ZP.ul(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),b=r(2946),Z=r(2791),j=r(2603),v=function(){return(0,f.jsx)(j.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{marginLeft:150},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})},g=function(){var n=(0,u.v9)(b.hF),e=(0,u.v9)(b.Af),r=(0,u.v9)(b.xU),t=(0,u.v9)(b.zh),i=(0,u.I0)();return(0,Z.useEffect)((function(){i((0,x.yF)())}),[i]),(0,f.jsxs)(f.Fragment,{children:[r&&0===(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)(v,{}),t&&!r&&(0,f.jsx)("div",{children:"Something went wrong ..."}),!(null!==n&&void 0!==n&&n.length)&&!t&&!r((0,f.jsx)(c.v0,{children:"There are no contacts in your phonebook. Please add your first contact!"})),(0,f.jsx)(h,{children:n.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,f.jsx)(m,{id:e,name:r,number:t},e)}))})]})},w=r(2935),y=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.$0,{children:[(0,f.jsx)(c.NZ,{children:"Add contact"}),(0,f.jsx)(w.Z,{})]}),(0,f.jsxs)(c.$0,{children:[(0,f.jsx)(c.NZ,{children:"Contacts"}),(0,f.jsx)(a.Z,{}),(0,f.jsx)(g,{})]})]})}},2946:function(n,e,r){r.d(e,{Af:function(){return i},hF:function(){return c},xU:function(){return o},zh:function(){return a}});var t=r(3553),i=function(n){return n.contacts.contacts},o=function(n){return n.contacts.isLoading},a=function(n){return n.contacts.error},c=(0,t.P1)([i,function(n){return n.filters}],(function(n,e){var r=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}))}}]);
//# sourceMappingURL=248.ffca9b70.chunk.js.map