const fs = require("fs");
const path = require("path");

const toursFilePath = path.join(__dirname, "../data/tour.json");

// Get all tours
const getAll = () => {
    const toursData = fs.readFileSync(toursFilePath, "utf-8");

    return JSON.parse(toursData);
};

// Get tour by ID
const getById = (id) => {
    const tours = getAll();

    return tours.find((tour) => tour.id === id);
};

// Get tours by query
const getByQuery = (query) => {
    const tours = getAll();

    return tours.filter((tour) =>
        tour.name.toLowerCase().includes(query.toLowerCase())
    );
};

// Save tours
const save = (tours) => {
    fs.writeFileSync(
        toursFilePath,
        JSON.stringify(tours, null, 2)
    );
};

module.exports = {
    getAll,
    getById,
    getByQuery,
    save
};