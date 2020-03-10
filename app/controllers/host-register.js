const HostRegistrationModel = require("../models/host-register.js");

exports.getAllHosts = async (req, res) => {
  console.info("get all hosts get called");
  try {
    console.log(HostRegistrationModel);

    const userData = await HostRegistrationModel.find();
    console.log(userData);

    res.json(userData);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.getHostData = (req, res) => {
  console.log("user id is");
  console.log(req.params.userId);
  console.log(HostRegistrationModel);
  try {
    HostRegistrationModel.findOne({ userId: req.params.userId }).then(user => {
      console.log("User from login", user);
      if (!user) res.sendStatus(204);
      else {
        res.status(200).send({
          user
        })
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message || "Some error occurred while getting."
    });
  }
};
exports.postHostData = async (req, res) => {
  console.log("user id is..:");
  console.log(req.body.userId);
  try {
    const hostRegistrationData = await new HostRegistrationModel({
      siteTitle: req.body.siteTitle,
      maxSiteWidth: req.body.maxSiteWidth,
      maxSiteLength: req.body.maxSiteLength,
      maxSiteHeight: req.body.maxSiteHeight,
      hostPosition: req.body.hostPosition,
      noOfAdultsAllowed: req.body.noOfAdultsAllowed,
      noOfChildrenAllowed: req.body.noOfChildrenAllowed,
      noOfPetsAllowed: req.body.noOfPetsAllowed,
      additionalAdultsAllowed: req.body.additionalAdultsAllowed,
      additionalChildrenAllowed: req.body.additionalChildrenAllowed,
      additionalPetsAllowed: req.body.additionalPetsAllowed,
      maxPets: req.body.maxPets,
      additionalRatePerAdult: req.body.additionalRatePerAdult,
      additionalRatePerChild: req.body.additionalRatePerChild,
      additionalRatePerPet: req.body.additionalRatePerPet,
      power: req.body.power,
      water: req.body.water,
      distanceFromWaterSource: req.body.distanceFromWaterSource,
      isSewerAvailable: req.body.isSewerAvailable,
      isTrashAvailable: req.body.isTrashAvailable,
      hostSiteDescription: req.body.hostSiteDescription,
      siteBaseRatePerAdult: req.body.siteBaseRatePerAdult,
      siteBaseRatePerChild: req.body.siteBaseRatePerChild,
      userId: req.body.userId
    });
    await hostRegistrationData.save();
    res.json({ hostRegistrationData });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Note."
    });
  }
};

// exports.postHostData = (req,res) => {
//     const hostData =  new HostRegistrationModel({
//       siteTitle: req.body.siteTitle,
//       maxSiteWidth: req.body.maxSiteWidth,
//       maxSiteLength: req.body.maxSiteLength,
//       maxSiteHeight: req.body.maxSiteHeight,
//       hostPosition: req.body.hostPosition,
//       noOfAdultsAllowed: req.body.noOfAdultsAllowed,
//       noOfChildrenAllowed: req.body.noOfChildrenAllowed,
//       noOfPetsAllowed: req.body.noOfPetsAllowed,
//       additionalAdultsAllowed: req.body.additionalAdultsAllowed,
//       additionalChildrenAllowed: req.body.additionalChildrenAllowed,
//       additionalPetsAllowed: req.body.additionalPetsAllowed,
//       maxPets: req.body.maxPets,
//       additionalRatePerAdult: req.body.additionalRatePerAdult,
//       additionalRatePerChild: req.body.additionalRatePerChild,
//       additionalRatePerPet: req.body.additionalRatePerPet,
//       power: req.body.power,
//       water: req.body.water,
//       distanceFromWaterSource: req.body.distanceFromWaterSource,
//       isSewerAvailable: req.body.isSewerAvailable,
//       isTrashAvailable: req.body.isTrashAvailable,
//       hostSiteDescription: req.body.hostSiteDescription,
//       siteBaseRatePerAdult: req.body.siteBaseRatePerAdult,
//       siteBaseRatePerChild: req.body.siteBaseRatePerChild,
//       userId: req.body.userId
//     });

//   // Save host in the database
//   hostData.save()
//   .then(data => {
//       res.send(data);
//   }).catch(err => {
//       res.status(500).send({
//           message: err.message || "Some error occurred while creating the host data."
//       });
//   });
// }