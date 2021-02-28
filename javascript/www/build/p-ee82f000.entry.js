import{r as o,h as t,g as r}from"./p-6096c7c7.js";import"./p-fbc84a9a.js";import{E as e}from"./p-5019ae7a.js";import{E as n}from"./p-64abae57.js";const a=class{constructor(t){o(this,t)}componentDidLoad(){const o={top:"0px",right:"0px"};n.getObjectData(this.element).hasOptions&&(o.right="3rem"),this.elementFollower=new e(this.element,this.host,o),this.elementFollower.startFollowing()}disconnectedCallback(){this.elementFollower.stopFollowing()}openAlert(){const o=this.alertData;let t=o.error||o.warning||o.info;t.length>1&&(t=t.map((o=>`• ${o}`))),alert(t.join("\n"))}get alertData(){return n.getObjectData(this.element).alerts}get iconName(){const o=this.alertData;return o.error?"alert":o.warning?"warning":o.info?"information-circle":void 0}render(){return t("button",{onClick:()=>this.openAlert()},t("ion-icon",{name:this.iconName}))}get host(){return r(this)}};a.style='*{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif}a{color:#207ab7;transition:color 300ms;text-decoration:none}a:hover{color:#1c6ca1;text-decoration:underline}a:active{color:#185d8c}*{box-sizing:border-box}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}button{appearance:none;border:solid 1px lightgrey;border-radius:3px;border-top-right-radius:0;box-shadow:0 0 1rem rgba(0, 0, 0, 0.1);background-color:white;padding:0.5rem;line-height:0;transition:background-color 300ms}button:hover{background-color:lightgrey}ion-icon{font-size:1.25rem}ion-icon[aria-label~=alert]{color:#b72020}ion-icon[aria-label~=warning]{color:#ffb720}ion-icon[aria-label~=information]{color:#207ab7}';export{a as ss_freedom_object_alert_button}