"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[60],{2264:function(e,n,t){t.d(n,{O:function(){return o}});var r=t(4224),s=t(3329),o=function(e){var n=e.text,t=e.type,o=e.onRemove;return(0,s.jsx)(r.z,{onClick:o,type:t,children:n})}},6060:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(2791),s=t(9434),o=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var r=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(r)}))},a=t(5074),i=t(4942),c=t(1413),u=t(9439),l=t(2264),x=t(4087),d=t(311),h=t(7806),m=t(4363),p=t(1148),f=t(8185),j=t(3329),v=function(){var e=(0,r.useState)({name:"",number:""}),n=(0,u.Z)(e,2),t=n[0],o=n[1],v=t.name,b=t.number,g=(0,s.I0)(),y=function(e){var n=e.currentTarget,r=n.value,s=n.name;o((0,c.Z)((0,c.Z)({},t),{},(0,i.Z)({},s,r)))},C=function(){o({name:"",number:""})};return(0,j.jsx)(x.xu,{m:"10px",boxShadow:"base",p:"6",rounded:"md",children:(0,j.jsxs)("form",{onSubmit:function(e){var n;e.preventDefault(),n=(0,c.Z)({},t),g((0,a.uK)(n)),C()},children:[(0,j.jsxs)(d.B,{size:"lg",mb:"10px",children:[(0,j.jsx)(h.Z,{pointerEvents:"none",children:(0,j.jsx)(m.J,{as:f.HHm,w:7,h:7,color:"gray.300"})}),(0,j.jsx)(p.I,{name:"name",value:v,onChange:y,pattern:"^[a-zA-Z0-9_.\\-]+[\\\\\\|\\s]?[a-zA-Z0-9_.\\-]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",variant:"flushed",focusBorderColor:"pink.400",required:!0})]}),(0,j.jsxs)(d.B,{size:"lg",mb:"20px",children:[(0,j.jsx)(h.Z,{pointerEvents:"none",children:(0,j.jsx)(m.J,{as:f.UL8,w:7,h:7,color:"gray.300"})}),(0,j.jsx)(p.I,{name:"number",value:b,onChange:y,pattern:"[0-9.\\-]*",title:"Phone number must be digits and can contain dashes, parentheses",variant:"flushed",focusBorderColor:"pink.400",required:!0})]}),(0,j.jsx)(l.O,{type:"submit",text:"Add contact"})]})})},b=(0,r.memo)(v),g=t(3541),y=t(9229),C=function(e){var n=e.contact,t=n.name,r=n.number,o=n.id,i=(0,s.I0)();return(0,j.jsxs)(g.HC,{display:"flex",justifyContent:"space-between",alignItems:"center",p:"2px",children:[(0,j.jsxs)(x.xu,{display:"flex",children:[(0,j.jsx)(y.x,{mr:"7px",color:"white",children:t}),(0,j.jsx)(y.x,{mr:"10px",color:"white",children:r})]}),(0,j.jsx)(l.O,{onRemove:function(){return function(e){i((0,a.zY)(e))}(o)},text:"Delete"})]})},w=(0,r.memo)(C),k=function(e){e.items;var n=(0,s.v9)(o).map((function(e){return(0,j.jsx)(w,{contact:e},e.id)}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.QI,{maxWidth:"400px",p:"15px",children:n})})},I=t(1273),Z=function(e){return e.filter},z=function(){var e=(0,s.v9)(Z),n=(0,s.I0)();return(0,j.jsxs)(d.B,{size:"lg",children:[(0,j.jsx)(h.Z,{pointerEvents:"none",children:(0,j.jsx)(m.J,{as:f.Ud,w:7,h:7,color:"gray.300"})}),(0,j.jsx)(p.I,{type:"text",value:e,onChange:function(e){var t=e.target;n((0,I.T)(t.value))},placeholder:"Find contacts by name",focusBorderColor:"pink.400",bg:"white"})]})},B=t(896),_=t(5946),A=t(7281),D=function(){var e=(0,s.v9)(o),n=(0,s.I0)();return(0,r.useEffect)((function(){n((0,a.yF)())}),[n]),(0,j.jsxs)(x.xu,{display:"flex",justifyContent:"space-between",flexDirection:"column",children:[(0,j.jsxs)(B.M,{p:"5px",display:"flex",flexDirection:"column",children:[(0,j.jsx)(_.X,{p:"5px",as:"h1",fontSize:"40px",children:"My Phonebook"}),(0,j.jsx)(b,{})]}),(0,j.jsx)(A.i,{}),(0,j.jsxs)(x.xu,{mt:"15px",bg:"#e56ba2",p:"7px",borderRadius:"5px",children:[(0,j.jsx)(_.X,{as:"h2",children:"Contacts"}),(0,j.jsx)(z,{}),e.length>0?(0,j.jsx)(k,{}):(0,j.jsx)(y.x,{pt:"10px",children:"Huh... Nothing to show! It's time to make friends!\ud83d\udcab"})]})]})}}}]);
//# sourceMappingURL=60.e32c3fc2.chunk.js.map