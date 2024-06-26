"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[5690,1047,5429],{26562:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});a(69375);var o=a(94271),i=a(56789),n=a(26823),l=a(79049),s=a(79847),d=a(15581),r=a(44896),u=a(48274),c=a(84884);const f={class:"policy-info"},p={class:"dx-button-text"},v={key:1},m={class:"login-link"};var b=(0,o.pM)({__name:"create-account-form",props:{redirectLink:{},buttonLink:{}},setup(e){const t=e,a=(0,r.rd)(),b=(0,n.KR)(!1),g=(0,n.Kh)({email:"",password:""}),k=async()=>{const{email:e,password:o}=g;b.value=!0;const i=await u.l.createAccount(e,o);b.value=!1,i.isOk?a.push(t.buttonLink):(0,d.A)(i.message,"error",2e3)};function _(e){return e.value===g.password}return(e,a)=>{const d=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("form",{class:"create-account-form",onSubmit:(0,i.D$)(k,["prevent"])},[(0,o.bF)((0,n.R1)(l.Ay),{"form-data":g,disabled:b.value},{createAccount:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.Lk)("span",p,[b.value?((0,o.uX)(),(0,o.Wv)((0,n.R1)(s.A),{key:0,width:"24px",height:"24px",visible:!0})):(0,o.Q3)("",!0),b.value?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("span",v,"Create a new account"))])])])),default:(0,o.k6)((()=>[(0,o.bF)((0,n.R1)(l.KV),{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email",value:"jheart@dx-email.com"}},{default:(0,o.k6)((()=>[(0,o.bF)((0,n.R1)(l.az),{message:"Email is required"}),(0,o.bF)((0,n.R1)(l.Ll),{message:"Email is invalid"}),(0,o.bF)((0,n.R1)(l.jd),{visible:!1})])),_:1}),(0,o.bF)((0,n.R1)(l.KV),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password",value:"password"}},{default:(0,o.k6)((()=>[(0,o.bF)((0,n.R1)(l.az),{message:"Password is required"}),(0,o.bF)((0,n.R1)(l.jd),{visible:!1})])),_:1}),(0,o.bF)((0,n.R1)(l.KV),{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password",value:"password"}},{default:(0,o.k6)((()=>[(0,o.bF)((0,n.R1)(l.az),{message:"Password is required"}),(0,o.bF)((0,n.R1)(l.CC),{message:"Passwords do not match","validation-callback":_}),(0,o.bF)((0,n.R1)(l.jd),{visible:!1})])),_:1}),(0,o.bF)((0,n.R1)(l.KV),null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",f,[(0,o.eW)(" By creating an account, you agree to the "),(0,o.bF)(d,{to:t.redirectLink},{default:(0,o.k6)((()=>[(0,o.eW)(" Terms of Service ")])),_:1},8,["to"]),(0,o.eW)(" and "),(0,o.bF)(d,{to:t.redirectLink},{default:(0,o.k6)((()=>[(0,o.eW)(" Privacy Policy ")])),_:1},8,["to"])])])),_:1}),(0,o.bF)((0,n.R1)(l.I),null,{default:(0,o.k6)((()=>[(0,o.bF)((0,n.R1)(l.$3),{width:"100%",type:"default",template:"createAccount","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"]),(0,o.Lk)("div",m,[(0,o.eW)(" Have an account? "),(0,o.bF)(d,{to:t.redirectLink},{default:(0,o.k6)((()=>[(0,o.eW)(" Sign In ")])),_:1},8,["to"])]),(0,o.bF)(c["default"])],32)}}}),g=a(56132);const k=(0,g.A)(b,[["__scopeId","data-v-487710f4"]]);var _=k},84884:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var o=a(94271),i=a(26823),n=a(73843),l=a(35911);const s=e=>((0,o.Qi)("data-v-1e6aac99"),e=e(),(0,o.jt)(),e),d={class:"oauth-button-container"},r=s((()=>(0,o.Lk)("p",null,"or",-1)));var u=(0,o.pM)({__name:"login-oauth",setup(e){const{currentTheme:t}=l.B,a=(0,o.EW)((()=>"dark"===t.value?"outlined":"contained"));return(e,t)=>((0,o.uX)(),(0,o.CE)("div",d,[r,(0,o.bF)((0,i.R1)(n.A),{width:"100%",icon:"icons/google-logo.svg",text:"Login with Google","styling-mode":a.value},null,8,["styling-mode"]),(0,o.bF)((0,i.R1)(n.A),{width:"100%",icon:"icons/microsoft-logo.svg",text:"Login with Microsoft","styling-mode":a.value},null,8,["styling-mode"])]))}}),c=a(56132);const f=(0,c.A)(u,[["__scopeId","data-v-1e6aac99"]]);var p=f},39605:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var o=a(94271),i=a(32350),n=a(26562),l=(0,o.pM)({__name:"sign-up-form",setup(e){return(e,t)=>((0,o.uX)(),(0,o.Wv)(i["default"],{title:"Sign Up"},{default:(0,o.k6)((()=>[(0,o.bF)(n["default"],{"redirect-link":"/sign-in-form","button-link":"/sign-up-form"})])),_:1}))}}),s=a(56132);const d=(0,s.A)(l,[["__scopeId","data-v-0171cc50"]]);var r=d}}]);