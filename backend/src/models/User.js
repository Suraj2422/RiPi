const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["rider", "pilot"],
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    // Only for PILOTS (drivers)
    vehicleDetails: {
      vehicleNumber: { type: String },
      vehicleModel: { type: String },
      seatsAvailable: { type: Number },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
