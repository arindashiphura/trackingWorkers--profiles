const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      default: '',
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    kin1: {
      type: String,
      required: false,
    },
    kin2: {
      type: String,
      required: false,
    },
    availableDays: [
      {
        type: String,
      },
    ],
    gender: {
      type: String,
      required: false,
    },
    occupation: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Profile', ProfileSchema); 