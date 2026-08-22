const tourModel = require("../model/tourModel");

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();

    res.json(tours);
};

// Get tour by ID
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);

    const tour = tourModel.getById(id);

    if (!tour) {
        return res.status(404).json({
            message: "Tour Not Found"
        });
    }

    res.json(tour);
};

// Get tours by query
const getToursByQuery = (req, res) => {
    const query = req.query.query || "";

    const tours = tourModel.getByQuery(query);

    res.json(tours);
};

module.exports = {
    getAllTours,
    getTourById,
    getToursByQuery
};