'use strict';

$(document).ready(function() {
  if(!TestControl.attributes) return;

  var Vehicle = Backbone.Model.extend({});

  var v = new Vehicle({ type: 'car' });
  Utils.dump(v);

  v.set('color', 'blue');
  Utils.dump(v);

  v.set({
    description: "<script>alert('script injection');</script>",
    weight: 1750
  });

  Utils.dump(v);
  Utils.log(v.escape('description'))

  var ford = new Vehicle({type: 'car'});

  Utils.log(ford.has('type'));
  Utils.log(ford.has('year'));
});
