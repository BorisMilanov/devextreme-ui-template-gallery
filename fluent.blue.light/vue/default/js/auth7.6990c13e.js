"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[2919],{99660:function(e,t,n){n.d(t,{CN:function(){return l},T4:function(){return u},p6:function(){return i}});var a=n(23142);function l(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function u(e,t){return(0,a.uf)(e,{type:"currency",precision:t||0,currency:"USD"})}function i(e){return(0,a.p6)(new Date(e),"MM/dd/yyyy")}},10479:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=n(73396),l=n(44870),u=n(87139),i=n(6222),o=n(75495),d=n(38816),c=n(97997),s=n(38532),r=n(46530),v=n(99660),f=n(59450),p=n(42900);const w={id:"card-notes"},_={class:"input-content"},g={class:"messages-content"},m={class:"message-list"},y={class:"note dx-card"},S={class:"note-title"},U={class:"note-text"};var h=(0,a.aZ)({__name:"card-notes",props:{user:{default:""},contactId:{default:null},items:{default:void 0}},setup(e){const t=e,n=(0,l.iH)(!0),h=(0,l.iH)(t.items),k=(0,l.iH)("");function D(e){if(!e.validationGroup.validate().isValid)return;const n={manager:t.user,date:new Date,text:k.value};h.value.push(n),e.validationGroup.reset()}async function W(){null!=t.contactId&&(n.value=!0,h.value=await(0,f.$f)(t.contactId),n.value=!1)}return(0,a.YP)((()=>t.items),(e=>{e&&e.length>0&&(h.value=e,n.value=!1)})),(0,a.bv)((()=>{t.contactId&&W()})),(e,t)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(c.G),null,{default:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a.Wm)((0,l.SU)(p.ZP),{visible:n.value,"show-pane":!1,width:"auto",container:"#card-notes",position:{of:"#card-notes"}},null,8,["visible"]),n.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",_,[(0,a.Wm)((0,l.SU)(i.w),{label:"New Note","styling-mode":"filled",value:k.value,"value-change-event":"keyup",onValueChanged:t[0]||(t[0]=e=>k.value=e.value)},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(s.ZP),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(s.VD))])),_:1})])),_:1},8,["value"]),(0,a.Wm)((0,l.SU)(d.sc),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(d.wy),{widget:"dxButton",location:"after",options:{text:"Add",stylingMode:"outlined",type:"default",onClick:D}},null,8,["options"])])),_:1})]),(0,a._)("div",g,[(0,a.Wm)((0,l.SU)(r.Z),null,{default:(0,a.w5)((()=>[(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.value,(e=>((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",S,[(0,a._)("div",null,(0,u.zw)((0,l.SU)(v.p6)(new Date(e.date)))+" - "+(0,u.zw)(e.manager),1),(0,a.Wm)((0,l.SU)(o.J),{icon:"overflow","styling-mode":"text"})]),(0,a._)("div",U,(0,u.zw)(e.text),1)])))),256))])])),_:1})])],64))])])),_:1}))}}),k=n(40089);const D=(0,k.Z)(h,[["__scopeId","data-v-c7a0f4ac"]]);var W=D}}]);