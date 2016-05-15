'use strict';
$(document).ready(function() {

  if(!TestControl.cors) return;

  var Book = Backbone.Model.extend({
    url: 'http://withouttheloop.com:3002/books'
  })

  var midnight = new Book({
    title:'Midnight in the garden of good and evil',
    author:'John Berendt'
  });

  midnight.save({}, {
    success: function() {Utils.log("done");},
    error: function() {Utils.log("error");}
  });

  //saving collections
  var Person = Backbone.Model.extend({});
  var People = Backbone.Collection.extend({
    model: Person,
    url:'http://localhost:3002/people'
  });
  var people = new People();
  people.create({name:'Tom', age:50});

  //getting collections
  people.fetch();

  //Getting a single person
  var person = new Person({id:0});
  people.add(person);
  person.fetch({
    success: function() {
      Utils.log(Utils.dump(person));
    }
  });

  //Save a single person
  var nicholas = new Person({
    name:'Nicholas', age:40
  });
  people.add(nicholas);
  nicholas.save();

  nicholas.fetch({
    success:function() {
      nicholas.set({age:22});
      nicholas.save();
    }
  });

  nicholas.destroy();
});