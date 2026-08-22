const tourModel = require("../model/tourModel");

const getAllTours = (req, res) => {
  const tours = tourModel.getAllTours();
  res.json(tours);
};
module.exports = {
  getAllTours,
};