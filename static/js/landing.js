Ext.onReady(function() {
  var parseResponse = function(responseText) {
    var breakAt = responseText.indexOf("\n");
    if (breakAt >= 0 && responseText.length - 1 > breakAt) {
      return {
        title: responseText.substr(0, breakAt),
        msg: responseText.substr(breakAt)
      };
    }
    return null;
  }

  Ext.Ajax.request({
    url: "motd",
    success: function(response) {
      var motd = parseResponse(response.responseText);
      if (motd) {
        Ext.Msg.show({
          title: motd.title,
          msg: motd.msg,
          buttons: Ext.Msg.OK,
          cls: 'motd',
          width: 600
        });
      }
    }
  });
});
