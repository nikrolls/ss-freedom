System.register(["./p-44199f6a.system.js"],function(t){"use strict";var e,o,i;return{setters:[function(t){e=t.r;o=t.h;i=t.g}],execute:function(){var s=function(){function t(t){e(this,t)}t.prototype.openOptionsWidget=function(){if(!this.optionsWidget){this.optionsWidget=document.createElement("ss-freedom-object-options-panel");this.optionsWidget.setAttribute("object-class",this.objectClass);this.optionsWidget.setAttribute("object-id",this.objectId);this.optionsWidget.style.position="absolute";this.optionsWidget.style.top=this.host.style.top;this.optionsWidget.style.right=this.host.style.right}document.body.appendChild(this.optionsWidget);this.host.remove()};t.prototype.render=function(){var t=this;return o("button",{onClick:function(){return t.openOptionsWidget()}},o("ion-icon",{name:"settings"}))};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"button{-webkit-appearance:none;border:0;outline:1px solid grey;background-color:#fff;color:#000;padding:.5rem;line-height:0;-webkit-transition:background-color .3s;transition:background-color .3s}button:hover{background-color:#d3d3d3}ion-icon{font-size:1.25rem}"},enumerable:true,configurable:true});return t}();t("ss_freedom_object_options_button",s)}}});