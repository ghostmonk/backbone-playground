'use strict';
$(document).ready(function(){
  if(!TestControl.validation) return;

  var Vehicle = Backbone.Model.extend({
    defaults: {color:'blue'},
    validate: function(attrs) {
      var validColors = ['white', 'red', 'blue', 'yellow'];
      var colorIsValid = function (attrs) {
        if (!attrs.color) return true;
        return _(validColors).include(attrs.color);
      };

      if (!colorIsValid(attrs)) {
        return "color must be one of: " + validColors.join(", ");
      }
    }
  });

  var car = new Vehicle();
  car.on('invalid', function(model, error) {Utils.log(error);});
  car.set('foo', 'bar');
  car.set('color', 'purple', {validate: true});
  car.set({color: 'mauve'}, {validate: true});
  Utils.log(car.get('color'))

  //JSON stringify serialization
  var attrs = car.toJSON();
  console.log(attrs);
  Utils.log(JSON.stringify(attrs));
});
