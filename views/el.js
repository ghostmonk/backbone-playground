'use strict';
$(document).ready(function(){
  if(!TestControl.el) return;

  var ghostmonk = new Backbone.View({el:'#ghostmonk'});
  Utils.log(ghostmonk.el.innerText);
  //jquery object
  console.log(ghostmonk.$el);
});