const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// Router to get all tours
router.get('/tours', tourController.getAllTours);
// Router to get tours by query parameters. This must come before /:id.
router.get('/tours/search', tourController.getTourByQuery);
// Router to get a specific tour by ID
router.get('/tours/:id', tourController.getTourById);

router.post('/tours', tourController.saveTours);
router.put('/tours/:id', tourController.updateTour);

module.exports = router;

// in postman, use http://localhost:3000/api/tours to get all the tours