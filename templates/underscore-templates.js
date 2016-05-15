'use strict';
$(document).ready(function(){

  if(!TestControl.underscoreTemplates) return;

  var View = Backbone.View.extend({
    render: function() {
      var data = {lat:-27, long:153};
      var localTemplate = '<%= lat %> <%= long %>';
      var htmlTemplate = $('#latlon-template').html();
      var template = _.template(htmlTemplate);
      var html = template(data);
      this.$el.html(html);
      return this;
    }
  });

  var view = new View({el:'#console'});
  view.render();

});