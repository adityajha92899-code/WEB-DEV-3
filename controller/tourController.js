const tourModel = require('../model/tourModel')

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
}

// Get a single tour by ID
const getTourById = (req, res) => {
    const tour = tourModel.getById(req.params.id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
};

// Get tours matching the supplied query parameters.
const getTourByQuery = (req, res) => {
    const query = req.query.name;
    const tours = tourModel.getByQuery(req.query);
    res.json(tours);
};

const getByQuery = (req, res) => {
    return tours.filter(tour => tour.name.includes(query));
}

const saveTours = (req, res) => {
    const tours = req.body;
    tourModel.save(tours);
    res.status(201).json({ message: 'Tours saved successfully' });
}


const updateTour = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    tourModel.updateTour(id, data);
    res.status(200).json({ message: 'Tour updated successfully' });
}

module.exports = {
    getAllTours,
    getTourById,
    getTourByQuery,
    saveTours
};