"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{9033:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,i,s,c,o,u,l,d,m,f=t(2634),x=t(4420),p=t(168),h=t(6487),j=h.ZP.li(r||(r=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Z=h.ZP.button(a||(a=(0,p.Z)(["\n  margin-left: 20px;\n"]))),b=h.ZP.p(i||(i=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),v=t(3634),y=t(184),g=function(n){var e=n.id,t=n.name,r=n.number,a=(0,x.I0)();return(0,y.jsxs)(j,{children:[(0,y.jsxs)(b,{children:[t," : ",r]}),(0,y.jsx)(Z,{type:"button",onClick:function(){a((0,v.GK)(e))},children:"Delete"})]})},P=h.ZP.ul(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),w=t(3553),C=function(n){return n.contacts.contacts},N=function(n){return n.filters},k=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},_=(0,w.P1)([C,N],(function(n,e){var t=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),z=t(2791),A=function(){var n=(0,x.v9)(_),e=(0,x.v9)(F),t=(0,x.I0)();return(0,z.useEffect)((function(){t((0,v.yF)())}),[t]),(0,y.jsxs)(y.Fragment,{children:[!(null!==n&&void 0!==n&&n.length)&&!e&&(0,y.jsx)(f.v0,{children:"There are no contacts in your phonebook. Please add your first contact!"}),(0,y.jsx)(P,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,y.jsx)(g,{id:e,name:t,number:r},e)}))})]})},I=t(5705),L=t(8007),q=h.ZP.label(c||(c=(0,p.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 10px;\n"]))),E=(0,h.ZP)(I.gN)(o||(o=(0,p.Z)(["\n  padding: 4px;\n"]))),$=(0,h.ZP)(I.Bc)(u||(u=(0,p.Z)(["\n  font-size: 16px;\n  color: red;\n"]))),D=(0,h.ZP)(I.l0)(l||(l=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),K=t(1686),S=t.n(K),T=L.Ry().shape({name:L.Z_().required("Name is required"),number:L.Z_().required("Number is required")}),B=function(){var n=(0,x.v9)(C),e=(0,x.I0)();return(0,y.jsx)(I.J9,{initialValues:{name:"",number:""},validationSchema:T,onSubmit:function(t,r){var a=r.resetForm,i=t.name,s=t.number;if(n.find((function(n){return n.name.toLowerCase().trim()===i.toLowerCase().trim()})))return a(),void S().Notify.failure("".concat(i," is already in contacts!"));e((0,v.uK)({name:i,number:s})),S().Notify.success("Contact with name ".concat(i," has been added successfully to contacts list.")),a()},children:(0,y.jsxs)(D,{children:[(0,y.jsxs)(q,{children:[(0,y.jsx)("h3",{children:"Name"}),(0,y.jsx)(E,{name:"name",type:"text",placeholder:"Enter a name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}),(0,y.jsx)($,{name:"name",component:"span"})]}),(0,y.jsxs)(q,{children:[(0,y.jsx)("h3",{children:"Number"}),(0,y.jsx)(E,{name:"number",type:"tel",placeholder:"Enter a phone-number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}),(0,y.jsx)($,{name:"number",component:"span"})]}),(0,y.jsx)("button",{type:"submit",children:"Add contact"})]})})},G=t(3107),J=h.ZP.label(d||(d=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n  // margin-top: 25px;\n  margin-bottom: 25px;\n"]))),R=h.ZP.input(m||(m=(0,p.Z)(["\n  padding: 4px;\n"]))),V=t(3165),H=function(){var n=(0,x.I0)(),e=(0,x.v9)(N);return(0,y.jsxs)(J,{children:[(0,y.jsx)("h3",{children:"Find contacts by name"}),(0,y.jsx)(R,{name:"filter",type:"text",value:e,onChange:function(e){e.preventDefault(),n((0,V.T)(e.target.value))}})]})},M=function(){var n=(0,x.I0)(),e=(0,x.v9)(k),t=(0,x.v9)(F);return(0,z.useEffect)((function(){n((0,v.yF)())}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(f.$0,{children:[(0,y.jsx)(f.NZ,{children:"Add contact"}),(0,y.jsx)(B,{})]}),(0,y.jsxs)(f.$0,{children:[(0,y.jsx)(f.NZ,{children:"Contacts"}),(0,y.jsx)(H,{}),e&&!t&&(0,y.jsx)(G.a,{}),(0,y.jsx)(A,{})]})]})}}}]);
//# sourceMappingURL=33.ad682219.chunk.js.map