var e=function(e){var t=this;e=Object.assign({container:null,default:"light",toggle:null,remember:"darken-mode",class:"darken",variables:{}},e),this.dark=!1,e.remember&&localStorage.getItem(e.remember)&&(e.default=localStorage.getItem(e.remember)),e.toggle&&document.querySelector(e.toggle).addEventListener("click",function(e){e.preventDefault(),t.toggle()}),document.addEventListener("darken-dark",function(){e.container?document.querySelector(e.container).classList.add(e.class):document.body.classList.add(e.class);for(var r=e.container?document.querySelector(e.container):document.documentElement,n=0,a=Object.entries(e.variables);n<a.length;n+=1){var o=a[n];r.style.setProperty(o[0],o[1][1])}e.remember&&localStorage.setItem(e.remember,t.dark?"dark":"light")},!1),document.addEventListener("darken-light",function(){e.container?document.querySelector(e.container).classList.remove(e.class):document.body.classList.remove(e.class);for(var r=e.container?document.querySelector(e.container):document.documentElement,n=0,a=Object.entries(e.variables);n<a.length;n+=1){var o=a[n];r.style.setProperty(o[0],o[1][0])}e.remember&&localStorage.setItem(e.remember,t.dark?"dark":"light")},!1),"light"===e.default?this.off():"dark"===e.default&&this.on()};e.prototype.toggle=function(){this.dark=!this.dark,this.dark?document.dispatchEvent(new Event("darken-dark")):document.dispatchEvent(new Event("darken-light"))},e.prototype.on=function(){this.dark=!0,document.dispatchEvent(new Event("darken-dark"))},e.prototype.off=function(){this.dark=!1,document.dispatchEvent(new Event("darken-light"))},module.exports=e;
