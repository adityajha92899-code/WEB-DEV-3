const tourModel = require('../model/tourModel');

const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

const getTourById = (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tourModel.getById(id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour Not Found' });
    }
    res.json(tour);
};

const getToursByQuery = (req, res) => {
    const { query } = req.query;
    const tours = tourModel.getByQuery(query);
    res.json(tours);
};

const save = (req, res) => {
    const tour = req.body;
    tourModel.save(tour);
    res.status(201).json({ message: 'Tour created successfully' });
};
const updateTour = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedTour = tourModel.update(id, updatedData);
    if (!updatedTour) {
        return res.status(404).json({ message: 'Tour Not Found' });
    }
    res.json(updatedTour);
};

module.exports = {
    getAllTours,
    getTourById,
    getToursByQuery,
    save,
    updateTour
};  
