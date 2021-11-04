const { Schema, model } = require("mongoose");

const resetTokenSchema = new Schema({
  createdAt: { type: Date, expires: 1800, default: Date.now() },
  token: { type: String, required: true },
});

const UserSchema = new Schema(
  {
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    lowercaseEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    billingAddresses: { type: Array, default: [], required: true },
    shippingAddresses: { type: Array, default: [], required: true },
  },
  { timestamps: true }
);

module.exports = {
  User: model("user", UserSchema),
  ResetToken: model("resetToken", resetTokenSchema),
};
