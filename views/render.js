'use strict';
$(document).ready(function(){

  if(!TestControl.rendering) return;

  var RefreshingView = Backbone.View.extend({
    initialize: function() {
      this.model.on('change', function() {
        this.render();
      }, this);
    },
    render: function() {
      this.$el.html(this.model.get('text'));
      return this;
    }
  });

  var model = new Backbone.Model({text: new Date().toString()});
  var view = new RefreshingView({model: model, el: '#console'});
  view.render();

  setInterval(function(){
    model.set({text: new Date().toString()});
  }, 1000);
});
