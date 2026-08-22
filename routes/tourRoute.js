const express = require("express");

const router = express.Router();

const tourController = require("../controller/tourController");

// Get all tours
router.get("/", tourController.getAllTours);

// Search tours
router.get("/search", tourController.getToursByQuery);

// Get tour by ID
router.get("/:id", tourController.getTourById);

module.exports = router;