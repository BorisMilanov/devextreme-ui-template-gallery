"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[9405],{63025:function(e,t,a){a.d(t,{e:function(){return w}});var i=a(9783),n=a(72602),s=a(77344),l=i.$K,r=i.J_,o=i.mf,c="min",u="max",d="minVisible",f="maxVisible",v="base",p="axisType";function m(e,t){return t<e}function g(e,t){return t>e}function h(e,t,a,i){var n=l(t);l(e)?n&&i(e,t)&&a(t):n&&a(t)}var w=function(e){e&&(0,n.l)(this,e)},y=w;y.prototype={constructor:y,addRange:function(e){var t=this,a=t.categories,i=e.categories,n="discrete"===t[p],r=function(a,i){h(t[a],e[a],(function(e){t[a]=e}),i)},o=function(e,a,i){h(t[e],t[a],(function(a){l(t[e])&&(t[e]=a)}),i)},w=function(a){t[a]=t[a]||e[a]};return w("invert"),w("containsConstantLine"),w(p),w("dataType"),w("isSpacedMargin"),"logarithmic"===t[p]?w(v):t[v]=void 0,r(c,m),r(u,g),n?(w(d),w(f)):(r(d,m),r(f,g)),r("interval",m),n||(o(c,d,m),o(c,f,m),o(u,f,g),o(u,d,g)),t.categories=void 0===a?i:i?(0,s.Tw)(a.concat(i)):a,"logarithmic"===t[p]&&(w("allowNegatives"),r("linearThreshold",m)),t},isEmpty:function(){return(!l(this[c])||!l(this[u]))&&(!this.categories||0===this.categories.length)},correctValueZeroLevel:function(){var e=this;if(r(e[u])||r(e[c]))return e;function t(t,a){e[t]<0&&e[a]<0&&(e[a]=0),e[t]>0&&e[a]>0&&(e[t]=0)}return t(c,u),t(d,f),e},sortCategories(e){if(!1!==e&&this.categories)if(Array.isArray(e)){var t=e.map((e=>e.valueOf())),a=this.categories.filter((e=>-1===t.indexOf(e.valueOf())));this.categories=e.concat(a)}else{var i=!o(e);i&&"string"!==this.dataType?e=(e,t)=>e.valueOf()-t.valueOf():i&&(e=!1),e&&this.categories.sort(e)}}}},70823:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(73396),n=a(44870),s=a(83835),l=a.n(s),r=(0,i.aZ)({__name:"card-menu",props:{items:null,visible:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,i.wg)(),(0,i.j4)((0,n.SU)(l()),{items:t.items,visible:t.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const o=r;var c=o},52801:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var i=a(73396),n=a(44870),s=a(69119),l=a(93527),r=a(65311),o=(0,i.aZ)({__name:"revenue-analysis-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,i.wg)(),(0,i.j4)(r["default"],{title:"Revenue Analysis","content-class":"sales-by-state grid"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,n.SU)(s.DxDataGrid),{"data-source":t.data,height:290,"load-panel":{enabled:!1}},{salesBullet:(0,i.w5)((({data:e})=>[(0,i.Wm)((0,n.SU)(l.DxBullet),{"show-target":!1,"show-zero-level":!1,value:100*e.data?.percentage,"start-scale-value":0,"end-scale-value":100},{default:(0,i.w5)((()=>[(0,i.Wm)((0,n.SU)(l.DxTooltip),{enabled:!1}),(0,i.Wm)((0,n.SU)(l.DxSize),{width:200,height:20})])),_:2},1032,["value"])])),default:(0,i.w5)((()=>[(0,i.Wm)((0,n.SU)(s.DxColumn),{caption:"State","data-field":"stateName"}),(0,i.Wm)((0,n.SU)(s.DxColumn),{alignment:"left",caption:"Sales","data-field":"total","data-type":"number",format:"currency","sort-order":"desc","hiding-priority":2}),(0,i.Wm)((0,n.SU)(s.DxColumn),{alignment:"left",caption:"% Sold","data-field":"percentage",name:"percentN",format:"percent","hiding-priority":1}),(0,i.Wm)((0,n.SU)(s.DxColumn),{alignment:"left",caption:"Percentage","data-field":"percentage",name:"percentB","cell-template":"salesBullet",cssClass:"sales-bullet",width:200})])),_:1},8,["data-source"])])),_:1}))}}),c=a(40089);const u=(0,c.Z)(o,[["__scopeId","data-v-aef18c7c"]]);var d=u},65311:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=a(73396),n=a(87139),s=a(70823);const l={class:"card-wrapper"},r={class:"header"},o={key:0,class:"title"},c={key:0,class:"content"};var u=(0,i.aZ)({__name:"card-analytics",props:{title:null,contentClass:{default:""},showData:{type:Boolean,default:!0},isMenuVisible:{type:Boolean,default:!0}},setup(e){const t=e,a=[{text:"Configure"},{text:"Remove"}];return(u,d)=>((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",{class:(0,n.C_)(["card",t.contentClass])},[(0,i._)("div",r,[(0,i.Wm)(s.Z,{visible:t.isMenuVisible,class:"overflow-menu",items:a},null,8,["visible"]),t.title?((0,i.wg)(),(0,i.iD)("div",o,(0,n.zw)(t.title),1)):(0,i.kq)("",!0),(0,i.WI)(u.$slots,"filter")]),e.showData?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.WI)(u.$slots,"default")])):(0,i.kq)("",!0)],2)]))}}),d=a(40089);const f=(0,d.Z)(u,[["__scopeId","data-v-9348c1d6"]]);var v=f}}]);