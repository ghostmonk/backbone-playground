var Utils = {
  dump: function(obj) {
    return JSON.stringify(obj.toJSON());
  },
  log: function(output) {
    $("#console").append(output + "<br />");
  }
}
