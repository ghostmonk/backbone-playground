'use strict';
$(document).ready(function(){
  if(!TestControl.remove) return;
  //MAKE Doesn't work
  /*var el = new Backbone.View().make(
    'h3', {class: 'not-very-important'}, 'Preliminary Version'
  );
  Utils.log(el);*/

  var model = new Backbone.Model({
    content: 'Historical context'
  });

  var HeadingView = Backbone.View.extend({
    tagName: 'p',
    render: function(){
      this.$el.html(this.model.get('content'));
      return this;
    }
  });

  var view = new HeadingView({model: model});
  $("#console").append(view.render().el);

  var interval = setInterval(removeThing, 10000)

  function removeThing() {
    clearInterval(interval);
    view.remove();
  }
});