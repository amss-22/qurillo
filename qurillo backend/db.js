const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  image: String,
});

const notifySchema = Mongoose.Schema({
  head: String,
  iconImage:String,
  date:String,
  time:String,
  new:Boolean,
  des:String,

});
const userModel = Mongoose.model("user", userSchema);
const notificationModel = Mongoose.model("notification", notifySchema);

module.exports = {
  userModel,
  notificationModel
};
