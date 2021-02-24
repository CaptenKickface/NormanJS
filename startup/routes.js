const click = require("../routes/click");
const data = require("../routes/data");


module.exports = function(app){
  app.use("/click", click);
  app.use("/data", data);
}