var Utils = {
  dump: function(obj) {
    console.log(JSON.stringify(obj.toJSON()));
  },
  log: function(output) {
    $("#console").append(output + "<br />");
  }
}
