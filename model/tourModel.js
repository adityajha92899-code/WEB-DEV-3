const fs = require("fs");
const path = require("path");
const toursFilePath = path.join(__dirname, "../data/tour.json");
const getAllTours = () => {
  const toursData = fs.readFileSync(toursFilePath, "utf-8");
  return JSON.parse(toursData);
};
const getbyId = (id) => {
  const tours = getAllTours();
  return tours.find((tour) => tour.id === id);
};
module.exports = {
  getAllTours,
  getbyId,
};