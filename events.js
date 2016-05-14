'use strict';
$(document).ready(function(){
  //return;
  var ford = new Backbone.Model({
    type: 'car',
    color: 'blue'
  });

  ford.on('change', function(){Utils.log('something changed');});
  ford.on('change:color', function(){ Utils.log("Color changed");});
  ford.on('change:type', function(){ Utils.log("Type changed");});

  ford.set('type', 'trunk');
  ford.set('color', 'purple');
});