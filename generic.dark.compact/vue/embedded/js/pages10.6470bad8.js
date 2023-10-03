"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[7362,6868,4208],{42301:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var o=a(73396),i=a(49242),n=a(44870),l=a(94969),s=a.n(l),r=a(15255),d=a.n(r),u=a(53898),c=a(22483),m=a(16914),p=a(78804);const f=["onSubmit"],v={class:"policy-info"},w=(0,o.Uk)(" By creating an account, you agree to the "),g=(0,o.Uk)(" Terms of Service "),_=(0,o.Uk)(" and "),x=(0,o.Uk)(" Privacy Policy "),k={class:"dx-button-text"},U={key:1},S={class:"login-link"},b=(0,o.Uk)(" Have an account? "),h=(0,o.Uk)(" Sign In ");var W=(0,o.aZ)({__name:"create-account-form",props:{redirectLink:null,buttonLink:null},setup(e){const t=e,a=(0,c.tv)(),r=(0,n.iH)(!1),W=(0,n.qj)({email:"",password:""}),y=async()=>{const{email:e,password:o}=W;r.value=!0;const i=await m.Y.createAccount(e,o);r.value=!1,i.isOk?a.push(t.buttonLink):(0,u.Z)(i.message,"error",2e3)};function D(e){return e.value===W.password}return(e,a)=>{const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("form",{class:"create-account-form",onSubmit:(0,i.iM)(y,["prevent"])},[(0,o.Wm)((0,n.SU)(s()),{"form-data":W,disabled:r.value},{createAccount:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("span",k,[r.value?((0,o.wg)(),(0,o.j4)((0,n.SU)(d()),{key:0,width:"24px",height:"24px",visible:!0})):(0,o.kq)("",!0),r.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",U,"Create a new account"))])])])),default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(l.DxItem),{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email",value:"jheart@corp.com"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(l.DxRequiredRule),{message:"Email is required"}),(0,o.Wm)((0,n.SU)(l.DxEmailRule),{message:"Email is invalid"}),(0,o.Wm)((0,n.SU)(l.DxLabel),{visible:!1})])),_:1},8,["editor-options"]),(0,o.Wm)((0,n.SU)(l.DxItem),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password",value:"password"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(l.DxRequiredRule),{message:"Password is required"}),(0,o.Wm)((0,n.SU)(l.DxLabel),{visible:!1})])),_:1}),(0,o.Wm)((0,n.SU)(l.DxItem),{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password",value:"password"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(l.DxRequiredRule),{message:"Password is required"}),(0,o.Wm)((0,n.SU)(l.DxCustomRule),{message:"Passwords do not match","validation-callback":D}),(0,o.Wm)((0,n.SU)(l.DxLabel),{visible:!1})])),_:1}),(0,o.Wm)((0,n.SU)(l.DxItem),null,{default:(0,o.w5)((()=>[(0,o._)("div",v,[w,(0,o.Wm)(u,{to:t.redirectLink},{default:(0,o.w5)((()=>[g])),_:1},8,["to"]),_,(0,o.Wm)(u,{to:t.redirectLink},{default:(0,o.w5)((()=>[x])),_:1},8,["to"])])])),_:1}),(0,o.Wm)((0,n.SU)(l.DxButtonItem),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(l.DxButtonOptions),{width:"100%",type:"default",template:"createAccount","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"]),(0,o._)("div",S,[b,(0,o.Wm)(u,{to:t.redirectLink},{default:(0,o.w5)((()=>[h])),_:1},8,["to"])]),(0,o.Wm)(p["default"])],40,f)}}}),y=a(40089);const D=(0,y.Z)(W,[["__scopeId","data-v-53955b81"]]);var L=D},78804:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var o=a(73396),i=a(44870),n=a(6224),l=a.n(n),s=a(10199);const r=e=>((0,o.dD)("data-v-1e6aac99"),e=e(),(0,o.Cn)(),e),d={class:"oauth-button-container"},u=r((()=>(0,o._)("p",null,"or",-1)));var c=(0,o.aZ)({__name:"login-oauth",setup(e){const{currentTheme:t}=s.H,a=(0,o.Fl)((()=>"dark"===t.value?"outlined":"contained"));return(e,t)=>((0,o.wg)(),(0,o.iD)("div",d,[u,(0,o.Wm)((0,i.SU)(l()),{width:"100%",icon:"icons/google-logo.svg",text:"Login with Google","styling-mode":(0,i.SU)(a)},null,8,["styling-mode"]),(0,o.Wm)((0,i.SU)(l()),{width:"100%",icon:"icons/microsoft-logo.svg",text:"Login with Microsoft","styling-mode":(0,i.SU)(a)},null,8,["styling-mode"])]))}}),m=a(40089);const p=(0,m.Z)(c,[["__scopeId","data-v-1e6aac99"]]);var f=p},83279:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var o=a(73396),i=a(42398),n=a(42301),l=(0,o.aZ)({__name:"sign-up-form",setup(e){return(e,t)=>((0,o.wg)(),(0,o.j4)(i["default"],{title:"Sign Up"},{default:(0,o.w5)((()=>[(0,o.Wm)(n["default"],{"redirect-link":"/sign-in-form","button-link":"/sign-up-form"})])),_:1}))}}),s=a(40089);const r=(0,s.Z)(l,[["__scopeId","data-v-0171cc50"]]);var d=r}}]);