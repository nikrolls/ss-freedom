class t{constructor(t,i,s=null){var o,h;this.target=t,this.follower=i,this.offset=s,this.follower.style.setProperty("--offset-top",(null===(o=this.offset)||void 0===o?void 0:o.top)||"0px"),this.follower.style.setProperty("--offset-right",(null===(h=this.offset)||void 0===h?void 0:h.right)||"0px")}startFollowing(){this.interval=window.setInterval(()=>this.updateScreenPosition(),10),this.follower.style.position="absolute",this.follower.style.top="calc(var(--target-top) + var(--scroll-y) - 1px + var(--offset-top))",this.follower.style.right="calc((var(--document-width) - var(--target-right)) + var(--scroll-x) - 1px + var(--offset-right))"}stopFollowing(){window.clearInterval(this.interval)}updateScreenPosition(){const t=this.target.getBoundingClientRect();this.follower.style.setProperty("--document-width",document.body.clientWidth+"px"),this.follower.style.setProperty("--target-top",t.top+"px"),this.follower.style.setProperty("--target-right",t.right+"px"),this.follower.style.setProperty("--scroll-y",window.scrollY+"px"),this.follower.style.setProperty("--scroll-x",window.scrollX+"px")}}export{t as E}