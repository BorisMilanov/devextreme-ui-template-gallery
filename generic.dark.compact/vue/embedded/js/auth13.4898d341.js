"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4440],{7002:function(e,l,a){a.d(l,{T:function(){return t},m:function(){return n}});const t={"element-attr":{class:"form-editor"},"input-attr":{class:"form-editor-input"},"styling-mode":"filled","value-change-event":"keyup input change"},{"value-change-event":o,...n}=t},58719:function(e,l,a){a.d(l,{F:function(){return o},b:function(){return t}});const t=["Salaried","Commission","Terminated"],o={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},39980:function(e,l,a){a.r(l),a.d(l,{default:function(){return x}});var t=a(73396),o=a(44870),n=a(19647),u=a(94969),d=a(58719),i=a(13817),m=a(87139),r=a(78517);const s=e=>((0,t.dD)("data-v-62015cc8"),e=e(),(0,t.Cn)(),e),c=s((()=>(0,t._)("span",null,"Drag and drop a photo here or click the area to select it from a folder",-1))),p=[c];var f=(0,t.aZ)({__name:"form-photo-uploader",setup(e){const l=(0,o.iH)(!1),a=(0,o.iH)(),n=e=>{e.dropZoneElement===a.value&&(l.value=!0)},u=e=>{e.dropZoneElement===a.value&&(l.value=!1)};return(e,d)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",{id:"dropzone",ref_key:"dropzone",ref:a,class:(0,m.C_)(l.value?"dx-theme-accent-as-border-color":"dx-theme-border-color")},p,2),(0,t.Wm)((0,o.SU)(r.DxFileUploader),{"drop-zone":a.value,"dialog-trigger":a.value,multiple:!1,"show-file-list":!1,visible:!1,accept:"image/*","upload-mode":"instantly",onDropZoneEnter:n,onDropZoneLeave:u},null,8,["drop-zone","dialog-trigger"])],64))}}),v=a(40089);const g=(0,v.Z)(f,[["__scopeId","data-v-62015cc8"]]);var _=g,U=(0,t.aZ)({__name:"contact-new-form",setup(e){const l=(0,o.iH)({...d.F});return(e,a)=>((0,t.wg)(),(0,t.j4)((0,o.SU)(u.DxForm),{class:"plain-styled-form","screen-by-width":(0,o.SU)(n.JW)},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxItem),{"item-type":"group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxColCountByScreen),{xs:1,sm:1,md:1,lg:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{class:"uploader"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(_)])])),_:1})])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"item-type":"group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxColCountByScreen),{xs:1,sm:2,md:2,lg:2}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{label:"First Name",modelValue:l.value.firstName,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.firstName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{label:"Last Name",modelValue:l.value.lastName,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.lastName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{label:"Company",modelValue:l.value.company,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.company=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{label:"Position",modelValue:l.value.position,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.position=e),"is-editing":!0},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"item-type":"group","css-class":"contact-fields-group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxColCountByScreen),{xs:1,sm:2,md:2,lg:2}),(0,t.Wm)((0,o.SU)(u.DxItem),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{label:"Assigned to",modelValue:l.value.manager,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.manager=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{modelValue:l.value.phone,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value.phone=e),"is-editing":!0,icon:"tel",mask:"+1(000)000-0000"},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{modelValue:l.value.email,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.email=e),"is-editing":!0,icon:"email",validators:[{type:"email"},{type:"required"}]},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{modelValue:l.value.address,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value.address=e),"is-editing":!0,icon:"home"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["screen-by-width"]))}});const V=U;var x=V},13817:function(e,l,a){a.d(l,{Z:function(){return s}});var t=a(73396),o=a(44870),n=a(16453),u=a(36657),d=a(7002),i=(0,t.aZ)({__name:"form-textbox",props:{modelValue:{default:null},isEditing:{type:Boolean,default:!1},label:{default:""},icon:{default:""},mask:{default:""},validationGroup:{default:""},validators:{default:()=>[{type:"required"}]}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,i=(0,t.Fl)({get(){return a.modelValue},set(e){l("update:modelValue",e)}});return(l,a)=>((0,t.wg)(),(0,t.j4)((0,o.SU)(n.DxTextBox),(0,t.dG)({label:e.label,modelValue:(0,o.SU)(i),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,o.dq)(i)?i.value=e:null),"read-only":!e.isEditing,mask:e.mask},(0,o.SU)(d.T)),{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxValidator),{"validation-rules":e.validators,"validation-group":e.validationGroup},null,8,["validation-rules","validation-group"]),e.icon?((0,t.wg)(),(0,t.j4)((0,o.SU)(n.DxButton),{key:0,options:{icon:e.icon,elementAttr:{class:"form-editor-icon"}},name:"icon",location:"before"},null,8,["options"])):(0,t.kq)("",!0)])),_:1},16,["label","modelValue","read-only","mask"]))}}),m=a(40089);const r=(0,m.Z)(i,[["__scopeId","data-v-266590d2"]]);var s=r}}]);