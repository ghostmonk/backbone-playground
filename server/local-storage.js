'use strict';
$(document).ready(function(){
  if(!TestControl.localStorage) return;

  var Person = Backbone.Model.extend({});

  var People = Backbone.Collection.extend({
    model:Person,
    localStorage: new Backbone.LocalStorage("People")
  });

  var family = new People([
    {name:'Nicholas Hiller', position:'Dad', age:40},
    {name:'Tracey Huot', position:'Mom', age:37},
    {name:'Lucas Hiller-Huot', position:'1st Son', age:9},
    {name:'Logan Hiller-Huot', position:'2nd Son', age:6},
    {name:'Aila Hiller-Huot', position:'1st Daughter', age:3},
  ]);

  var nicholas = family.at(0);
  var tracey = family.at(1);
  var lucas = family.at(2);
  var logan = family.at(3);
  var aila = family.at(4);

  family.at(0).save();
  family.at(1).save();
  family.at(2).save();
  family.at(3).save();
  family.at(4).save();

  family.fetch({
    success: function() {
      Utils.log(Utils.dump(family));
    }
  });
});