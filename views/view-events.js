'use strict';
$(document).ready(function(){
  if(!TestControl.viewEvents) return;

  var FormView = Backbone.View.extend({
    events: {
      'click .clickable': 'handleClick',
      'change': function() {
        Utils.log('handleChange');
      }
    },
    render: function() {
      this.$el.html('<input type="text" class="clickable" placeholder="clickable" /> <input type="text" />');
      return this;
    },
    handleClick: function() {
      Utils.log('handleClick');
    }
  });

  var formView = new FormView();
  $("#console").append(formView.render().el);
});