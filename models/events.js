'use strict';
$(document).ready(function(){
  if(!TestControl.events) return;

  var Vehicle = Backbone.Model.extend({
    defaults: {
      'color': 'white',
      'type': 'car'
    }
  });
  var Car = Vehicle.extend();

  var ford = new Car({ type: 'truck', color: 'blue'});
  var defaultCar = new Car({});

  Utils.dump(ford);
  Utils.dump(defaultCar);

  ford.on('change', function(){Utils.log('something changed');});
  ford.on('change:color', function(){ Utils.log("Color changed");});
  ford.on('change:type', function(){ Utils.log("Type changed");});

  ford.set('type', 'trunk');
  ford.set('color', 'purple');

  //Identity stuff
  Utils.log("CID:" + ford.cid);
  Utils.log("ID:" + ford.id);
  Utils.log("Is New:" + ford.isNew());
});