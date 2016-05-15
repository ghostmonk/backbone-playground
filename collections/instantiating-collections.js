'use strict';
$(document).ready(function(){
  if(!TestControl.instantiatingCollections) return;

  //Simple creation
  var collection = new Backbone.Collection();
  Utils.log(Utils.dump(collection));

  //Custom collection
  var Vehicles = Backbone.Collection.extend({});
  var collection = new Vehicles([
    new Backbone.Model({label:'A', amt:2}),
    {label:'B', amt:1},
    {label:'C', amt:7}
  ]);

  //EVENTS
  collection.on('add', function(model, col, options){
    Utils.log('added ' + model.get('label'));
  });

  collection.on('remove', function(model, col, options) {
    Utils.log('removed ' + model.get('label') + ' at index ' + options.index );
  });

  collection.on('change', function(model, options){
    Utils.log(Utils.dump(model) + ' changed');
  });

  collection.on('change:label', function(model, options){
    Utils.log("Label changed on " + Utils.dump(model));
  });

  collection.add(new Backbone.Model({label:'D', amt:5}));
  //You do not have to explicitly use a Backbone model
  collection.add({label:'E', amt:6}, {silent: true});
  collection.add({label:'F', amt:4});
  //You can add arrays as well.. same rules about Backdone models apple
  collection.add([{label:'G', amt:9}, {label:'H', amt:2}], {at: 1});
  collection.remove(collection.at(1));
  Utils.log(Utils.dump(collection.at(collection.length - 1)));

  //Getting by CID... client identifier.

  var newModel = new Backbone.Model({label:'I', amt:8});
  collection.add(newModel);
  var cid = newModel.cid;
  Utils.log(Utils.dump(collection.get({cid: cid})));

  newModel.set('amt', 56);
  newModel.set('label', "HOLY COW");

  Utils.log(Utils.dump(collection));

  //For Each
  collection.forEach(function(model){
    Utils.log(model.get('label'));
  });

  //Map
  var mappedCollection = collection.map(function(model) {
    return model.get('label').toLowerCase();
  });
  Utils.log(mappedCollection);

  //Reduce
  var totalAmt = collection.reduce(function(memo, item){
    return memo + item.get('amt');
  }, 0);
  Utils.log("Total amount: " + totalAmt);

  //Find
  var found = collection.find(function(model){
    if(model.get('label') === "H")
      return model;
  });
  Utils.log(Utils.dump(found));

});