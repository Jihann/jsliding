!function(t,i,s){"use strict";function e(t){var s=this;this.settings={exposeWidth:160},h(this.settings,t),this.doc=i,this.box=this.doc.getElementById("slider"),this.imgs=this.box.getElementsByTagName("img"),this.imgLen=this.imgs.length,this.boxWidth="",this.imgWidth="",this.translate="",this.init();for(var e=0,n=this.imgs.length;n>e;e++){var s=this;!function(t){s.imgs[t].onmouseover=function(){s.setImgsPos();for(var i=1;t>=i;i++)s.imgs[i].style.left=parseInt(s.imgs[i].style.left,10)-s.translate+"px"}}(e)}}e.prototype={init:function(){var t=this;this.imgWidth=this.imgs[0].offsetWidth,this.boxWidth=this.imgWidth+(this.imgLen-1)*this.settings.exposeWidth,this.box.style.width=this.boxWidth+"px",this.translate=this.imgWidth-this.settings.exposeWidth,t.setImgsPos()},setImgsPos:function(){for(var t=this,i=1,s=t.imgLen;s>i;i++)t.imgs[i].style.left=t.imgWidth+t.settings.exposeWidth*(i-1)+"px"}};var h=function(t,i){for(var s in i)(i.hasOwnProperty(s)||t.hasOwnProperty(s))&&(t[s]=i[s])};t.Slider=e}(window,document,void 0);