/**
 * Author: Ash
 * Created: 2014/03/09
 * -------------------
 * app.get("/");
 */

exports.show = (function (req, res) {

  res.render("design-system", {
    title: "Design System"
  });
});
