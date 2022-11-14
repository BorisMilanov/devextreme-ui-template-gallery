"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[3431,4973],{20788:function(e,t,n){
/*!
 * devextreme-vue
 * Version: 22.1.5
 * Build date: Fri Sep 02 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxTo=t.DxShowSubmenuMode=t.DxShowFirstSubmenuMode=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxItem=t.DxHide=t.DxFrom=t.DxDelay=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxMenu=void 0;var o=l(n(2323)),u=n(35535),a=n(35535),i=u.createComponent({props:{accessKey:String,activeStateEnabled:Boolean,adaptivityEnabled:Boolean,animation:Object,cssClass:String,dataSource:{},disabled:Boolean,disabledExpr:[Function,String],displayExpr:[Function,String],elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hideSubmenuOnMouseLeave:Boolean,hint:String,hoverStateEnabled:Boolean,items:Array,itemsExpr:[Function,String],itemTemplate:{},onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemRendered:Function,onOptionChanged:Function,onSelectionChanged:Function,onSubmenuHidden:Function,onSubmenuHiding:Function,onSubmenuShowing:Function,onSubmenuShown:Function,orientation:String,rtlEnabled:Boolean,selectByClick:Boolean,selectedExpr:[Function,String],selectedItem:{},selectionMode:String,showFirstSubmenuMode:[Object,String],showSubmenuMode:[Object,String],submenuDirection:String,tabIndex:Number,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:adaptivityEnabled":null,"update:animation":null,"update:cssClass":null,"update:dataSource":null,"update:disabled":null,"update:disabledExpr":null,"update:displayExpr":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hideSubmenuOnMouseLeave":null,"update:hint":null,"update:hoverStateEnabled":null,"update:items":null,"update:itemsExpr":null,"update:itemTemplate":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemRendered":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:onSubmenuHidden":null,"update:onSubmenuHiding":null,"update:onSubmenuShowing":null,"update:onSubmenuShown":null,"update:orientation":null,"update:rtlEnabled":null,"update:selectByClick":null,"update:selectedExpr":null,"update:selectedItem":null,"update:selectionMode":null,"update:showFirstSubmenuMode":null,"update:showSubmenuMode":null,"update:submenuDirection":null,"update:tabIndex":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=o.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},item:{isCollectionItem:!0,optionName:"items"},showFirstSubmenuMode:{isCollectionItem:!1,optionName:"showFirstSubmenuMode"},showSubmenuMode:{isCollectionItem:!1,optionName:"showSubmenuMode"}}}});t.DxMenu=i;var d=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var r=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=r,r.$_optionName="at";var p=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=p,p.$_optionName="boundaryOffset";var s=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=s,s.$_optionName="collision";var m=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:Number,show:Number}});t.DxDelay=m,m.$_optionName="delay";var c=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=c,c.$_optionName="from",c.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var b=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=b,b.$_optionName="hide",b.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var g=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:beginGroup":null,"update:closeMenuOnClick":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:items":null,"update:selectable":null,"update:selected":null,"update:template":null,"update:text":null,"update:visible":null},props:{beginGroup:Boolean,closeMenuOnClick:Boolean,disabled:Boolean,html:String,icon:String,items:Array,selectable:Boolean,selected:Boolean,template:{},text:String,visible:Boolean}});t.DxItem=g,g.$_optionName="items",g.$_isCollectionItem=!0;var f=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=f,f.$_optionName="my";var h=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=h,h.$_optionName="offset";var S=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=S,S.$_optionName="position",S.$_expectedChildren={at:{isCollectionItem:!1,optionName:"at"},boundaryOffset:{isCollectionItem:!1,optionName:"boundaryOffset"},collision:{isCollectionItem:!1,optionName:"collision"},my:{isCollectionItem:!1,optionName:"my"},offset:{isCollectionItem:!1,optionName:"offset"}};var v=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=v,v.$_optionName="show";var C=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:delay":null,"update:name":null},props:{delay:[Number,Object],name:String}});t.DxShowFirstSubmenuMode=C,C.$_optionName="showFirstSubmenuMode",C.$_expectedChildren={delay:{isCollectionItem:!1,optionName:"delay"}};var x=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:delay":null,"update:name":null},props:{delay:[Number,Object],name:String}});t.DxShowSubmenuMode=x,x.$_optionName="showSubmenuMode",x.$_expectedChildren={delay:{isCollectionItem:!1,optionName:"delay"}};var y=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=y,y.$_optionName="to",t["default"]=i},64393:function(e,t,n){
/*!
 * devextreme-vue
 * Version: 22.1.5
 * Build date: Fri Sep 02 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxCursorOffset=t.DxSortable=void 0;var o=l(n(42696)),u=n(35535),a=n(35535),i=u.createComponent({props:{allowDropInsideItem:Boolean,allowReordering:Boolean,autoScroll:Boolean,boundary:{},container:{},cursorOffset:[Object,String],data:{},dragDirection:String,dragTemplate:{},dropFeedbackMode:String,elementAttr:Object,filter:String,group:String,handle:String,height:[Function,Number,String],itemOrientation:String,moveItemOnDrop:Boolean,onAdd:Function,onDisposing:Function,onDragChange:Function,onDragEnd:Function,onDragMove:Function,onDragStart:Function,onInitialized:Function,onOptionChanged:Function,onRemove:Function,onReorder:Function,rtlEnabled:Boolean,scrollSensitivity:Number,scrollSpeed:Number,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:allowDropInsideItem":null,"update:allowReordering":null,"update:autoScroll":null,"update:boundary":null,"update:container":null,"update:cursorOffset":null,"update:data":null,"update:dragDirection":null,"update:dragTemplate":null,"update:dropFeedbackMode":null,"update:elementAttr":null,"update:filter":null,"update:group":null,"update:handle":null,"update:height":null,"update:itemOrientation":null,"update:moveItemOnDrop":null,"update:onAdd":null,"update:onDisposing":null,"update:onDragChange":null,"update:onDragEnd":null,"update:onDragMove":null,"update:onDragStart":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onRemove":null,"update:onReorder":null,"update:rtlEnabled":null,"update:scrollSensitivity":null,"update:scrollSpeed":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=o.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={cursorOffset:{isCollectionItem:!1,optionName:"cursorOffset"}}}});t.DxSortable=i;var d=a.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxCursorOffset=d,d.$_optionName="cursorOffset",t["default"]=i},79702:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var l=n(73396),o=n(44870),u=n(87139),a=(n(43579),n(71793)),i=n(45903),d=n(64393),r=n(6224),p=n(20788),s=n(50629);const m={class:"list"},c={class:"list-title dx-theme-text-color"},b={class:"add-task"};var g=(0,l.aZ)({__name:"task-list-kanban",props:{tasks:{default:()=>[]}},emits:["add-task"],setup(e,{emit:t}){const n=e,g=a.Ww,f=[{icon:"more",items:[{text:"Add card"},{text:"Copy list"},{text:"Move list"}]}],h=e=>{const t=[];return g.forEach((n=>{const l=e.filter((e=>e.status===n));t.push({name:n,cards:l})})),t},S=(0,l.Fl)((()=>n.tasks?h(n.tasks):[]));function v(e){const{fromIndex:t,toIndex:n}=e,l=S.value.splice(t,1)[0];S.value.splice(n,0,l)}function C(e){const{fromData:t,fromIndex:n}=e;e.itemData=t.cards[n]}function x(e){const{fromData:t,toData:n,fromIndex:l,toIndex:o,itemData:u}=e;u.status=n.name,t.cards.splice(l,1),n.cards.splice(o,0,u)}const y=e=>{t("add-task")};return(e,t)=>((0,l.wg)(),(0,l.j4)((0,o.SU)(i.DxScrollView),{class:"scrollable-board",direction:"horizontal","show-scrollbar":"always"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(d.DxSortable),{class:"sortable-lists","item-orientation":"horizontal",handle:".list-title",onReorder:v},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,o.SU)(S),(e=>((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",c,[(0,l._)("span",null,(0,u.zw)(e.name),1),(0,l.Wm)((0,o.SU)(p.DxMenu),{items:f})]),(0,l.Wm)((0,o.SU)(i.DxScrollView),{class:"scrollable-list",direction:"vertical","show-scrollbar":"always"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(d.DxSortable),{class:"sortable-cards",group:"cardsGroup",data:e,onDragStart:C,onReorder:x,onAdd:x},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.cards,(e=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s["default"],{class:"dx-card",task:e},null,8,["task"])])))),256))])),_:2},1032,["data"]),(0,l._)("div",b,[(0,l.Wm)((0,o.SU)(r.DxButton),{icon:"plus",text:"Add Task","styling-mode":"text",onClick:y})])])),_:2},1024)])))),256))])),_:1})])),_:1}))}}),f=n(40089);const h=(0,f.Z)(g,[["__scopeId","data-v-7b334e88"]]);var S=h}}]);