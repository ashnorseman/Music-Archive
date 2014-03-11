/**
 * Author: Ash
 * Created: 2014/03/11
 * -------------------
 * app.get("/view/:by?");
 */

exports.show = (function (req, res) {
  var classify = req.params.by,
      viewType = "list";

  if (classify) {
    res.render("view/" + classify, {
      title: classify,
      viewType: viewType,
      pageHeading: "view by " + classify
    });
  } else {
    res.redirect("/view/genre");
  }
});
