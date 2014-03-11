/**
 * Author: Ash
 * Created: 2014/03/09
 */

require.config({

  paths: {
    jQuery: "/js/lib/jquery-1.11.0",
    Underscore: "/js/lib/underscore-1.6.0",
    Backbone: "/js/lib/backbone-1.1.2"
  },

  shim: {
    "Backbone": ["jQuery", "Underscore"],
    "MusicArchive": ["Backbone"]
  }
});

require(["MusicArchive"], function (MusicArchive) {
  MusicArchive.initialize();
});
