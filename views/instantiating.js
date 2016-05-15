'use strict';
$(document).ready(function(){
  if(!TestControl.instantiating) return;

  var model = new Backbone.Model();
  model.set('content', 'The rain in Spain falls mostly on the plains.');

  var view = new Backbone.View({
    model: model,
    className: 'model-object'
  });

  $('body').prepend(view.el);
});