const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String, // e.g., electrician, plumber
    required: true,
  },
  location: String,
  hourlyRate: Number,
  rating: {
    type: Number,
    default: 0,
  },
  description: String,
});

module.exports = mongoose.model("ServiceProvider", serviceProviderSchema);
