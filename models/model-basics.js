'use strict';
$(document).ready(function(){
  if(!TestControl.modelBasics) return;

  var Vehicle = Backbone.Model.extend({
    initialize: function() {
      console.log("INIT");
    },
    summary: function() {
      return "Vehicles are not static";
    },
    asString: function() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    summary: function() {
      return "Vehicles are for travelling.";
    }
  });

  var v = new Vehicle({
    wheels: "4",
    cylinders: "4"
  });

  var Car = Vehicle.extend();
  var car = new Car({
    seats: "4"
  });

  console.log(v.asString());
  console.log(car.asString());
  console.log(car instanceof Car);
  console.log(car instanceof Vehicle);
  console.log(Vehicle.summary());
  console.log(v.summary());
});