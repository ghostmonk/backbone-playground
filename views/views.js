'use strict';
$(document).ready(function(){
  if(!TestControl.views) return;

  var V = Backbone.View.extend({
    tagName: 'li',
    id: 'thing',
    className: 'active',
    attributes: {
      'data-value': 12345
    }
  });

  var view = new V();
  $('body').prepend(view.el);

  //Accessing an existing view
  var ExistingView = Backbone.View.extend({});
  var existing = new ExistingView({el :'#console'});
  existing.$el.css('background-color', 'CornflowerBlue');
});