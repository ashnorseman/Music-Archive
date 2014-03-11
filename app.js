/**
 * Author: Ash
 * Created: 2014/03/09
 */

var express = require("express"),
    app = express(),
    swig = require("swig"),
    port = process.env.PORT || 3000,

    // Routes
    index = require("./routes/index"),
    view = require("./routes/view");

// Configuration
app.configure(function () {
  app.engine("html", swig.renderFile);
  app.set("view engine", "html");
  app.set("views", __dirname + "/views");

  // Debug mode only
  app.set("view cache", false);
  swig.setDefaults({
    cache: false
  });

  app.use(express.static(__dirname + "/public"));
  app.use(express.favicon());
});

// Routing
app.get("/", index.show);
app.get("/view/:by?", view.show);

// Start listening
app.listen(port);
