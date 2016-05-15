'use strict';
$(document).ready(function(){
  if(!TestControl.collectionsIndex) return;

  var collection = new Backbone.Collection([
    {name:'thing'},
    {name:'other thing'}
  ]);

  Utils.log(collection.length);
  Utils.log(Utils.dump(collection.at(0)));
  Utils.log(Utils.dump(collection.at(1)));

  var Vehicle = Backbone.Model.extend({});
  var Vehicles = Backbone.Collection.extend({
      model: Vehicle,
      comparator: function(vehicle1, vehicle2) { //This will sort by color name.
        return vehicle1.get('color');
      }
    },{
      oneVehicle: function() {
        return new Vehicle({color:'green'});
      }
    }
  );
  var vehicles = new Vehicles([{color:'red'}, {color:'blue'}]);
  Utils.log(Utils.dump(vehicles.at(0)));
  Utils.log(Utils.dump(vehicles));

  var vehicle = Vehicles.oneVehicle();
  Utils.log(Utils.dump(vehicle));
});