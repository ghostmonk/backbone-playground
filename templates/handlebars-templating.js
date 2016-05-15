'use strict';
$(document).ready(function(){
  if(!TestControl.handlebarsTemplating) return;

  var source = '<p> Latitude: {{lat}}</p>';
  var compiled = Handlebars.compile(source);
  var rendered = compiled({lat: -27});

  Utils.log(rendered);
});