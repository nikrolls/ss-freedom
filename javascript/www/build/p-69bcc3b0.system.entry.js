System.register(["./p-051874e1.system.js","./p-0eb69758.system.js","./p-dc301314.system.js"],(function(t){"use strict";var e,o,r,n,i;return{setters:[function(t){e=t.r;o=t.h;r=t.g},function(t){n=t.E},function(t){i=t.E}],execute:function(){var a='*{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif}a{color:#207ab7;-webkit-transition:color 300ms;transition:color 300ms;text-decoration:none}a:hover{color:#1c6ca1;text-decoration:underline}a:active{color:#185d8c}*{-webkit-box-sizing:border-box;box-sizing:border-box}@-webkit-keyframes spin-anti{from{-webkit-transform:rotate(360deg);transform:rotate(360deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes spin-anti{from{-webkit-transform:rotate(360deg);transform:rotate(360deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:solid 1px lightgrey;border-radius:3px;border-top-right-radius:0;-webkit-box-shadow:0 0 1rem rgba(0, 0, 0, 0.1);box-shadow:0 0 1rem rgba(0, 0, 0, 0.1);background-color:white;padding:0.5rem;line-height:0;-webkit-transition:background-color 300ms;transition:background-color 300ms}button:hover{background-color:lightgrey}ion-icon{font-size:1.25rem}ion-icon[aria-label~=alert]{color:#b72020}ion-icon[aria-label~=warning]{color:#ffb720}ion-icon[aria-label~=information]{color:#207ab7}';var s=t("ss_freedom_object_alert_button",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){var t=n.getObjectData(this.element).hasOptions?{right:"3rem"}:null;this.elementFollower=new i(this.element,this.host,t);this.elementFollower.startFollowing()};t.prototype.componentDidUnload=function(){this.elementFollower.stopFollowing()};t.prototype.openAlert=function(){var t=this.alertData();var e=t.error||t.warning||t.info;if(e.length>1){e=e.map((function(t){return"• "+t}))}alert(e.join("\n"))};t.prototype.alertData=function(){var t=n.getObjectData(this.element);return t.alerts};t.prototype.iconName=function(){var t=this.alertData();if(t.error){return"alert"}else if(t.warning){return"warning"}else if(t.info){return"information-circle"}};t.prototype.render=function(){var t=this;return o("button",{onClick:function(){return t.openAlert()}},o("ion-icon",{name:this.iconName()}))};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());s.style=a}}}));