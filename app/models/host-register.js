const mongoose = require("mongoose");
// const amenitiesSchema = require("../models/Amenities");

const AmenititesSchema = new mongoose.Schema({
  amenitiesName: {
    type: String,
    required: true
  },
  amenitiesPrice: {
    type: Number,
    required: true
  },
  isChecked: {
    type: Boolean,
    default: false
  }
});
const HostRegistrationSchema = mongoose.Schema({
  userId: {
    type: String,
    required: false
  },
  siteTitle: {
    type: String,
    required: false
  },
  maxSiteWidth: {
    type: Number,
    required: false
  },
  maxSiteLength: {
    type: Number,
    required: false
  },
  maxSiteHeight: {
    type: Number,
    required: false
  },
  hostPosition: {
    type: String,
    required: false
  },
  noOfAdultsAllowed: {
    type: Number,
    required: false
  },
  noOfChildrenAllowed: {
    type: Number,
    required: false
  },
  noOfPetsAllowed: {
    type: Number,
    required: false
  },
  additionalAdultsAllowed: {
    type: Number,
    required: false
  },
  additionalChildrenAllowed: {
    type: Number,
    required: false
  },
  additionalPetsAllowed: {
    type: Number,
    required: false
  },
  availablePower: {
    type: String,
    required: false
  },
  additionalRatePerAdult: {
    type: Number,
    required: false
  },
  additionalRatePerChild: {
    type: Number,
    required: false
  },
  additionalRatePerPet: {
    type: Number,
    required: false
  },
  water: {
    type: String,
    required: false
  },
  distanceFromWaterSource: {
    type: String,
    required: false
  },
  isSewerAvailable: {
    type: String,
    required: false
  },
  isTrashAvailable: {
    type: String,
    required: false
  },
  hostSiteDescription: {
    type: String,
    required: false
  },
  siteBaseRatePerAdult: {
    type: Number,
    required: false
  },
  siteBaseRatePerChild: {
    type: Number,
    required: false
  },
  siteAddress1: {
    type: String,
    required: false
  },
  siteAddress2: {
    type: String,
    required: false
  },
  siteCity: {
    type: String,
    required: false
  },
  siteState: {
    type: String,
    required: false
  },
  siteZip: {
    type: String,
    required: false
  },
  siteCountry: {
    type: String,
    required: false
  },
  propertyType: {
    type: String,
    required: false
  },
  rvPad: {
    type: String,
    required: false
  },
  maxLength: {
    type: Number,
    required: false
  },
  maxWidth: {
    type: Number,
    required: false
  },
  maxHeight: {
    type: Number,
    required: false
  },
  // amenitites: [AmenititesSchema],
  pets: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model(
  "HostRegistration",
  HostRegistrationSchema
);
