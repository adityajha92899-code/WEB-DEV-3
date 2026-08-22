const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.get('/tours', tourController.getAllTours);
router.get('/tours/search', tourController.getToursByQuery);
router.get('/tours/:id', tourController.getTourById);
router.post('/tours', tourController.save);
router.put('/tours/:id', tourController.updateTour);

module.exports = router;