"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[159],{159:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a="contacts_noContacts__q26kn",r="contacts_list__E8xN7",s="contacts_contactsHeader__TaR8g",c=n(791),o=n(434),i=n(273),l=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},u=function(e){return e.filter},m=n(930),h=n(942),d=n(413),f=n(439),p="contactForm_form__3ay0L",x="formButton_btn__xMcpE",_=n(184),v=function(e){var t=e.text,n=e.type,a=e.onRemove;return(0,_.jsx)("button",{onClick:a,className:x,type:n,children:t})},j=function(e){var t=e.onSubmit,n=(0,c.useState)({name:"",phone:""}),a=(0,f.Z)(n,2),r=a[0],s=a[1],o=r.name,i=r.phone,l=function(e){var t=e.currentTarget,n=t.value,a=t.name;s((0,d.Z)((0,d.Z)({},r),{},(0,h.Z)({},a,n)))},u=function(){s({name:"",phone:""})};return(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,d.Z)({},r)),u()},className:p,children:[(0,_.jsxs)("label",{htmlFor:"name",children:["Name",(0,_.jsx)("input",{name:"name",value:o,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{htmlFor:"number",children:["Number",(0,_.jsx)("input",{name:"phone",value:i,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(v,{type:"submit",text:"Add contact"})]})},C=(0,c.memo)(j),b="contactList_list__R0BG5",N="item_contactItem__QnQow",g="item_item__SVHoU",y=function(e){var t=e.contact,n=t.name,a=t.phone,r=t.id,s=e.removeContact;return(0,_.jsxs)("li",{className:g,children:[(0,_.jsx)("p",{className:N,children:n}),(0,_.jsx)("p",{className:N,children:a}),(0,_.jsx)(v,{onRemove:function(){return s(r)},text:"Delete"})]})},k=(0,c.memo)(y),w=function(e){var t=e.items,n=e.removeContact,a=t.map((function(e){return(0,_.jsx)(k,{removeContact:n,contact:e},e.id)}));return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("ul",{className:b,children:a})})},F="filter_filterInput__2T6yn",Z=function(e){var t=e.value,n=e.onChange;return(0,_.jsxs)("label",{children:["Find contacts by name",(0,_.jsx)("input",{className:F,type:"text",value:t,onChange:n})]})},A=function(){var e=(0,o.v9)(l),t=(0,o.v9)(u),n=(0,o.I0)();(0,c.useEffect)((function(){n((0,m.yF)())}),[n]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{children:"Contacts"}),(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(C,{onSubmit:function(e){n((0,m.uK)(e))}}),(0,_.jsxs)("section",{className:r,children:[(0,_.jsx)("h2",{className:s,children:"Contacts"}),(0,_.jsx)(Z,{onChange:function(e){var t=e.target;n((0,i.T)(t.value))},value:t}),e.length>0?(0,_.jsx)(w,{items:e,removeContact:function(e){n((0,m.zY)(e))}}):(0,_.jsx)("p",{className:a,children:"Huh... Still no contacts here!"})]})]})}}}]);
//# sourceMappingURL=159.808e0d0b.chunk.js.map