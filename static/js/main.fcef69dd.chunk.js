(this["webpackJsonpcreate-react-app-template"]=this["webpackJsonpcreate-react-app-template"]||[]).push([[0],{10:function(e,t,c){e.exports={search__contact:"Contacts_search__contact__6C0Fe",search__label:"Contacts_search__label__3HSnW",search__button:"Contacts_search__button__IuZFg",list:"Contacts_list__2cQlU","list-border":"Contacts_list-border__2BN76",list__ul:"Contacts_list__ul__3NzvM",trash:"Contacts_trash__L3Nh4",search__text:"Contacts_search__text__1yNFQ"}},15:function(e,t,c){e.exports={Search__box:"Filter_Search__box__2a3UT",search__label:"Filter_search__label__33SI9",search__input:"Filter_search__input__2YNt8"}},20:function(e,t,c){e.exports={container:"Section_container__U7pNO",container__title:"Section_container__title__E57Lv"}},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a,n=c(2),r=c(1),s=c.n(r),i=c(12),o=c.n(i),l=c(4),_=c(24),b=c(14),u=c(6),d=c(5),j=c(3),m=c(25),h=c.n(m),O=c(8),f="contacts/Add_contact",p="contacts/Delete_contact",x="contacts/Add_filter",v=c(44),N={addContact:Object(d.b)(f,(function(e,t){return{payload:{id:Object(v.a)(),name:e,number:t}}})),deleteContact:Object(d.b)(p),addFilter:Object(d.b)(x)},C=N.addContact,y=N.deleteContact,F=N.addFilter,g=Object(d.c)([],(a={},Object(O.a)(a,C,(function(e,t){return[t.payload].concat(Object(b.a)(e))})),Object(O.a)(a,y,(function(e,t){var c=t.payload;return e.filter((function(e){return e.id!==c}))})),a)),k=Object(d.c)("",Object(O.a)({},F,(function(e,t){return t.payload}))),S=Object(j.c)({items:g,filter:k}),w={key:"contacts",storage:h.a,blacklist:["filter"]},I=Object(b.a)(Object(d.d)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})),L=Object(j.c)({contacts:Object(u.g)(w,S)}),z=Object(d.a)({reducer:L,devTools:!1,middleware:I}),A={store:z,persistor:Object(u.h)(z)},T=(c(41),c(22)),B=c(9),E=c(7),J=c.n(E),P=function(e){return e.contacts.items},R=function(e){return e.contacts.filter},U=function(e){var t=P(e),c=R(e);return function(e){var t=c.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(t)},q={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1}};var D=function(){var e=Object(l.c)(P),t=Object(l.b)(),c=Object(r.useState)(""),a=Object(T.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),_=Object(T.a)(o,2),b=_[0],u=_[1],d=Object(r.useRef)(Object(v.a)()),j=function(e){var t=e.currentTarget,c=t.name,a=t.value;switch(c){case"name":i(a);break;case"number":u(a);break;default:return}};return Object(n.jsx)("div",{className:J.a.container,children:Object(n.jsxs)(B.a.form,{initial:"hidden",animate:"visible",variants:q,className:J.a.form,onSubmit:function(c){c.preventDefault(),function(e,t){return!t.some((function(t){return t.name===e}))||(alert("".concat(e," is already in contacts.")),!1)}(s,e)&&(!function(e,c){t(N.addContact(e,c))}(s,b),i(""),u(""))},children:[Object(n.jsxs)("label",{htmlFor:d.current,children:[Object(n.jsx)("p",{className:J.a.form__label,children:"Name"}),Object(n.jsx)("input",{type:"text",name:"name",className:J.a.form__firstInput,value:s,onChange:j,id:d.current,placeholder:"Enter name",required:!0})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("p",{className:J.a.form__label,children:"Number"}),Object(n.jsx)("input",{type:"tel",name:"number",value:b,onChange:j,maxLength:"17",minLength:"7",pattern:"[0-9]{3}-{0,1}[0-9]{3}-{0,1}[0-9]{2}-{0,1}[0-9]{2}",required:!0,placeholder:"(067)666-66-66"})]}),Object(n.jsx)("div",{className:J.a.submit__box,children:Object(n.jsx)("button",{className:J.a.form__button,type:"submit",disabled:""===s||""===b,children:"Add contact"})})]})})},M=c(20),Q=c.n(M),H={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1}},V=function(e){var t=e.title,c=e.children;return Object(n.jsxs)("section",{className:Q.a.container,children:[Object(n.jsx)(B.a.h2,{initial:"hidden",animate:"visible",variants:H,className:Q.a.container__title,children:t}),c]})},W=c(21),Y=c(0),Z=c(26),G=c.n(Z),K=c(10),X=c.n(K),$={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1}},ee=function(){var e,t=Object(l.b)(),c=Object(l.c)(U),a=G()((e={},Object(O.a)(e,X.a.list,!0),Object(O.a)(e,"list-border",c.length),e));return Object(n.jsx)("div",{className:a,children:Object(n.jsx)("ul",{className:X.a.list__ul,children:c.map((function(e){return Object(n.jsxs)(B.a.li,{initial:"hidden",animate:"visible",variants:$,className:X.a.search__contact,children:[Object(n.jsx)(Y.b.Provider,{value:{color:"black",size:"1.6em",className:"react-icons"},children:Object(n.jsx)(W.a,{onClick:function(){return t(N.deleteContact(e.id))}})}),Object(n.jsxs)("p",{className:X.a.search__text,children:[e.name," : ",e.number]}),Object(n.jsx)("div",{className:X.a.trash,children:Object(n.jsx)(Y.b.Provider,{value:{color:"red",size:"1.1em",className:"react-icons"},children:Object(n.jsx)(W.b,{onClick:function(){return t(N.deleteContact(e.id))}})})})]},e.id)}))})})},te=c(15),ce=c.n(te),ae=function(){var e=Object(l.b)(),t=Object(l.c)(R);return Object(n.jsxs)("label",{htmlFor:"search",className:ce.a.Search__box,children:[Object(n.jsx)("p",{className:ce.a.search__label,children:"Find contacts by name:"}),Object(n.jsx)("input",{className:ce.a.search__input,type:"search",name:"search",id:"search",onChange:function(t){return e(N.addFilter(t.currentTarget.value))},value:t})]})};var ne=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(V,{title:"Phonebook",children:Object(n.jsx)(D,{})}),Object(n.jsxs)(V,{title:"Contacts",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(ee,{})]})]})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l.a,{store:A.store,children:Object(n.jsx)(_.a,{loading:null,persistor:A.persistor,children:Object(n.jsx)(ne,{})})})}),document.getElementById("root"))},7:function(e,t,c){e.exports={container:"Form_container__3m06r",form:"Form_form__2t432",form__button:"Form_form__button__1VR6w",form__label:"Form_form__label__3JzR3",form__firstInput:"Form_form__firstInput__-trtc",submit__box:"Form_submit__box__2jl4B"}}},[[42,1,2]]]);
//# sourceMappingURL=main.fcef69dd.chunk.js.map