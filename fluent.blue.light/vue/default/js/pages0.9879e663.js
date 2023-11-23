"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8627,7204,9946,59],{24754:function(e,t,a){a.d(t,{d:function(){return n},r:function(){return l}});const n=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],l=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},99660:function(e,t,a){a.d(t,{CN:function(){return l},T4:function(){return s},p6:function(){return i}});var n=a(23142);function l(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function s(e,t){return(0,n.uf)(e,{type:"currency",precision:t||0,currency:"USD"})}function i(e){return(0,n.p6)(new Date(e),"MM/dd/yyyy")}},34427:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(73396),l=a(87139),s=a(69147);const i={class:"card-wrapper"},o={class:"header"},u={key:0,class:"title"},r={key:0,class:"content"};var d=(0,n.aZ)({__name:"card-analytics",props:{title:{default:""},contentClass:{default:""},showData:{type:Boolean,default:!0},isMenuVisible:{type:Boolean,default:!0}},setup(e){const t=e,a=[{text:"Configure"},{text:"Remove"}];return(d,c)=>((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",{class:(0,l.C_)(["card",t.contentClass])},[(0,n._)("div",o,[(0,n.Wm)(s["default"],{visible:t.isMenuVisible,class:"overflow-menu",items:a},null,8,["visible"]),t.title?((0,n.wg)(),(0,n.iD)("div",u,(0,l.zw)(t.title),1)):(0,n.kq)("",!0),(0,n.WI)(d.$slots,"filter")]),e.showData?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.WI)(d.$slots,"default")])):(0,n.kq)("",!0)],2)]))}}),c=a(40089);const p=(0,c.Z)(d,[["__scopeId","data-v-3ecebb58"]]);var v=p},69147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(73396),l=a(44870),s=a(14532),i=(0,n.aZ)({__name:"card-menu",props:{items:null,visible:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)((0,l.SU)(s.ZP),{items:t.items,visible:t.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const o=i;var u=o},13390:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(73396),l=a(87139),s=a(44870),i=a(99660);const o={class:"ticker"},u={class:"middle"},r={class:"title"},d={class:"total"},c={class:"value"};var p=(0,n.aZ)({__name:"ticker-card",props:{icon:null,tone:null,title:null,data:{default:null},total:{default:null},percentage:null},setup(e){const t=e,a=(0,n.Fl)((()=>(t.data||[]).reduce(((e,{value:t,total:a})=>e+(t||a||0)),0))),p=()=>t.tone||(t.percentage>0?"positive":"negative");return(v,m)=>((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",{class:(0,l.C_)(["icon-wrapper",p()])},[(0,n._)("i",{class:(0,l.C_)(`dx-icon dx-icon-${e.icon} `)},null,2)],2),(0,n._)("div",u,[(0,n._)("div",r,(0,l.zw)(e.title),1),(0,n._)("div",d,(0,l.zw)(null===e.total?(0,s.SU)(i.T4)((0,s.SU)(a)):e.total),1)]),0!==t.percentage?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,l.C_)(["percentage",e.percentage>0?"positive":"negative"])},[(0,n._)("div",{class:(0,l.C_)(["dx-icon-"+(e.percentage>0?"spinup":"spindown")])},null,2),(0,n._)("div",c,(0,l.zw)(Math.abs(e.percentage))+"% ",1)],2)):(0,n.kq)("",!0)]))}}),v=a(40089);const m=(0,v.Z)(p,[["__scopeId","data-v-34c54c2c"]]);var f=m},11119:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(73396),l=a(44870),s=a(75495),i=a(38816),o=a(76022),u=a(24754),r=a(19647);const d={class:"toolbar-header"},c=(0,n._)("div",null,[(0,n._)("div",{class:"separator"})],-1);var p=(0,n.aZ)({__name:"toolbar-analytics",props:{showTabs:{type:Boolean,default:!1}},emits:["tab-change"],setup(e,{emit:t}){const a=e,[p,v]=u.r[4].value.split("/"),m=e=>{const[a,n]=e.addedItems[0].value.split("/");t("tab-change",[a,n])};(0,n.bv)((()=>{t("tab-change",[p,v])}));const f={text:"Refresh",icon:"refresh",stylingMode:"text"},w={icon:"export",text:"Export",stylingMode:"text"};return(e,t)=>((0,n.wg)(),(0,n.j4)((0,l.SU)(i.sc),{class:"theme-dependent"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.wy),{location:"before"},{default:(0,n.w5)((()=>[(0,n._)("span",d,[(0,n.WI)(e.$slots,"default")])])),_:3}),a.showTabs?((0,n.wg)(),(0,n.j4)((0,l.SU)(i.wy),{key:0,location:"before"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(o.QH),{width:(0,l.SU)(r.Br).isXSmall?150:"auto","show-nav-buttons":!1,"scroll-by-content":!0,"selected-item-keys":[5],"key-expr":"key",items:(0,l.SU)(u.r),onSelectionChanged:t[0]||(t[0]=e=>m(e))},null,8,["width","items"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)((0,l.SU)(i.wy),{location:"after","locate-in-menu":"auto","css-class":"add-card"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)((0,l.SU)(s.Z),{icon:"plus",text:"Add Card",type:"default","styling-mode":"contained"})])])),_:1}),(0,n.Wm)((0,l.SU)(i.wy),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:f}),(0,n.Wm)((0,l.SU)(i.wy),{location:"after","locate-in-menu":"auto"},{default:(0,n.w5)((()=>[c])),_:1}),(0,n.Wm)((0,l.SU)(i.wy),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:w})])),_:3}))}});const v=p;var m=v},93895:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var n=a(73396),l=a(44870),s=a(46530),i=a(42900),o=a(59450),u=a(11119),r=a(18981),d=a(34427),c=(0,n.aZ)({__name:"revenue-snapshot-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Revenue Snapshot (All Products)","content-class":"sales-by-category"},{default:(0,n.w5)((()=>[t.data?((0,n.wg)(),(0,n.j4)((0,l.SU)(r.DM),{key:0,"data-source":t.data,type:"doughnut",diameter:.8,"inner-radius":.6},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(r.GN),{"argument-field":"name","value-field":"value"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(r.kN),{"background-color":"none","radial-offset":-20,visible:!0,"customize-text":e=>e.percentText},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(r.Ke),{color:"#757575",size:15})])),_:1},8,["customize-text"])])),_:1}),(0,n.Wm)((0,l.SU)(r.bK),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(r.Dk),{top:70})])),_:1}),(0,n.Wm)((0,l.SU)(r.Iv),{height:270})])),_:1},8,["data-source","diameter","inner-radius"])):(0,n.kq)("",!0)])),_:1}))}});const p=c;var v=p,m=a(64834),f=(0,n.aZ)({__name:"conversion-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Conversion Funnel (All Products)","content-class":"opportunities"},{default:(0,n.w5)((()=>[t.data?((0,n.wg)(),(0,n.j4)((0,l.SU)(m.A7),{key:0,"data-source":t.data,"argument-field":"name","value-field":"value"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(m.kN),{visible:!0,position:"inside","background-color":"none","customize-text":e=>`$${e.valueText}`},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(m.kD),{type:"largeNumber",precision:1})])),_:1},8,["customize-text"]),(0,n.Wm)((0,l.SU)(m.bK),{visible:!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(m.Dk),{top:70})])),_:1}),(0,n.Wm)((0,l.SU)(m.Iv),{height:270})])),_:1},8,["data-source"])):(0,n.kq)("",!0)])),_:1}))}});const w=f;var _=w,g=a(34312),y=(0,n.aZ)({__name:"revenue-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Revenue","content-class":"sales"},{default:(0,n.w5)((()=>[t.data?((0,n.wg)(),(0,n.j4)((0,l.SU)(g.Gd),{key:0,"data-source":t.data},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(g.GN),{"value-field":"total"}),(0,n.Wm)((0,l.SU)(g.zx),{"argument-field":"date",type:"splinearea"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(g.FM),{visible:!0})])),_:1}),(0,n.Wm)((0,l.SU)(g.nh),{"argument-type":"datetime"}),(0,n.Wm)((0,l.SU)(g.Ck),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(g.kN),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(g.kD),{type:"currency",currency:"USD"})])),_:1})])),_:1}),(0,n.Wm)((0,l.SU)(g.bK),{visible:!1}),(0,n.Wm)((0,l.SU)(g.Iv),{height:270})])),_:1},8,["data-source"])):(0,n.kq)("",!0)])),_:1}))}});const h=y;var S=h,b=a(71030),W=a(3225),U=(0,n.aZ)({__name:"revenue-analysis-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Revenue Analysis","content-class":"sales-by-state grid"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(b.v4),{"data-source":t.data,height:290,"load-panel":{enabled:!1}},{salesBullet:(0,n.w5)((e=>[(0,n.Wm)((0,l.SU)(W._I),{"show-target":!1,"show-zero-level":!1,value:100*e.data.data?.percentage,"start-scale-value":0,"end-scale-value":100},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(W.D2),{enabled:!1}),(0,n.Wm)((0,l.SU)(W.Iv),{width:200,height:20})])),_:2},1032,["value"])])),default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(b.yP),{caption:"State","data-field":"stateName"}),(0,n.Wm)((0,l.SU)(b.yP),{alignment:"left",caption:"Sales","data-field":"total","data-type":"number",format:"currency","sort-order":"desc","hiding-priority":2}),(0,n.Wm)((0,l.SU)(b.yP),{alignment:"left",caption:"% Sold","data-field":"percentage",name:"percentN",format:"percent","hiding-priority":1}),(0,n.Wm)((0,l.SU)(b.yP),{alignment:"left",caption:"Percentage","data-field":"percentage",name:"percentB","cell-template":"salesBullet","css-class":"sales-bullet",width:200})])),_:1},8,["data-source"])])),_:1}))}}),k=a(40089);const x=(0,k.Z)(U,[["__scopeId","data-v-6b04a5c7"]]);var Z=x,D=a(13390),C=(0,n.aZ)({__name:"opportunities-ticker",props:{data:{default:()=>null}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(D["default"],{title:"Opportunities",icon:"datatrending",data:t.data,percentage:20.3},null,8,["data","percentage"]))}});const j=C;var I=j,M=(0,n.aZ)({__name:"revenue-total-ticker",props:{data:{default:()=>null}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(D["default"],{title:"Revenue Total",icon:"dataarea",data:t.data,percentage:-14.7},null,8,["data","percentage"]))}});const z=M;var B=z,N=(0,n.aZ)({__name:"conversion-ticker",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(D["default"],{title:"Conversion",total:"16%",percentage:-2.3,icon:"datausage",tone:"warning"},null,8,["percentage"]))}});const P=N;var $=P,T=(0,n.aZ)({__name:"leads-ticker",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(D["default"],{title:"Leads",total:"51",icon:"datapie",tone:"info",percentage:8.5},null,8,["percentage"]))}});const q=T;var H=q;const A={class:"view-wrapper"},R=(0,n.Uk)(" Dashboard "),G={class:"tiles"},K={class:"cards"};var F=(0,n.aZ)({__name:"analytics-dashboard",setup(e){const t=(0,l.iH)(null),a=(0,l.iH)(null),r=(0,l.iH)(null),d=(0,l.iH)(null),c=(0,l.iH)(!0),p=async(e,n)=>{c.value=!0,await Promise.all([(0,o.Uh)(e,n).then((e=>{t.value=e})),(0,o.ot)(e,n).then((e=>{d.value=e})),(0,o.X8)(e,n).then((e=>{a.value=e})),(0,o.ws)(e,n).then((e=>{r.value=e}))]).then((()=>{c.value=!1}))},m=([e,t])=>{p(e,t)};return(e,o)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,l.SU)(s.Z),{class:"view-wrapper-scroll"},{default:(0,n.w5)((()=>[(0,n._)("div",A,[(0,n.Wm)(u.Z,{"show-tabs":!0,onTabChange:o[0]||(o[0]=e=>m(e))},{default:(0,n.w5)((()=>[R])),_:1}),(0,n._)("div",G,[(0,n.Wm)(I,{data:t.value},null,8,["data"]),(0,n.Wm)(B,{data:a.value},null,8,["data"]),(0,n.Wm)($),(0,n.Wm)(H)]),(0,n._)("div",K,[(0,n.Wm)(S,{data:a.value},null,8,["data"]),(0,n.Wm)(_,{data:t.value},null,8,["data"]),(0,n.Wm)(Z,{data:r.value},null,8,["data"]),(0,n.Wm)(v,{data:d.value},null,8,["data"])])])])),_:1}),(0,n.Wm)((0,l.SU)(i.Gr),{container:".view-wrapper",position:{of:".dx-drawer-content"},visible:c.value,"show-pane":!0},null,8,["position","visible"])],64))}});const L=(0,k.Z)(F,[["__scopeId","data-v-b5021bda"]]);var V=L}}]);