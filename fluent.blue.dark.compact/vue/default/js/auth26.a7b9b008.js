"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[5353,1174],{50497:function(t,a,e){e.d(a,{$g:function(){return s},Yq:function(){return c},qH:function(){return n}});var r=e(70341);function n(t){return String(t).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function s(t,a){return(0,r.ZV)(t,{type:"currency",precision:a||0,currency:"USD"})}function c(t){return(0,r.Yq)(new Date(t),"MM/dd/yyyy")}},14558:function(t,a,e){e.r(a),e.d(a,{default:function(){return x}});e(69375);var r=e(94271),n=e(52287),s=e(26823),c=e(15581),o=e(73843),d=e(50497),i=e(63761),l=e(47446);const u=t=>((0,r.Qi)("data-v-145d822a"),t=t(),(0,r.jt)(),t),p=u((()=>(0,r.Lk)("div",{class:"card-priority"},null,-1))),v={class:"card-content"},k={class:"card-subject theme-text-color"},f={class:"card-data"},_={class:"priority"},y={class:"date theme-text-color"},L={class:"card-assignee"},m={class:"company theme-text-color"};var g=(0,r.pM)({__name:"task-kanban-card",props:{task:{default:()=>null}},setup(t){const a=t,e=t=>t.split(" ").map((t=>t[0])).join(""),u=t=>{t.event.stopPropagation(),(0,c.A)(`Edit '${a.task?.text}' card event`)},g=()=>{i.Q.push("/planning-task-details")};return(t,a)=>((0,r.uX)(),(0,r.CE)("div",{class:"card theme-text-color theme-bg-color",onClick:a[0]||(a[0]=t=>g())},[(0,r.Lk)("div",{class:(0,n.C4)(["card-wrapper",`priority-${t.task.priority.toLowerCase()}`])},[p,(0,r.bF)((0,s.R1)(o.x),{icon:"edit","styling-mode":"text",onClick:u}),(0,r.Lk)("div",v,[(0,r.Lk)("div",k,(0,n.v_)(t.task.text),1),(0,r.Lk)("div",f,[(0,r.Lk)("span",_,(0,n.v_)(t.task.priority),1),(0,r.Lk)("span",y,(0,n.v_)((0,s.R1)(d.Yq)(t.task.dueDate)),1)]),(0,r.Lk)("div",L,[(0,r.Lk)("span",m,(0,n.v_)(t.task.company),1),(0,r.bF)(l["default"],{"data-letters":e(t.task.owner)},null,8,["data-letters"])])])],2)]))}}),h=e(56132);const b=(0,h.A)(g,[["__scopeId","data-v-145d822a"]]);var x=b},47446:function(t,a,e){e.r(a),e.d(a,{default:function(){return d}});var r=e(94271);const n=["data-letters"];var s=(0,r.pM)({__name:"user-avatar",props:{dataLetters:{default:()=>""}},setup(t){const a=t;return(t,e)=>((0,r.uX)(),(0,r.CE)("div",{class:"circle","data-letters":a.dataLetters},null,8,n))}}),c=e(56132);const o=(0,c.A)(s,[["__scopeId","data-v-8b56f8ac"]]);var d=o}}]);