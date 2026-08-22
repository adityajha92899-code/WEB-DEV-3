const fs = require('fs');
const path = require('path');
const toursFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const toursData = fs.readFileSync(toursFilePath, 'utf-8');
    return JSON.parse(toursData);
};

const getById = (id) => {
    const toursData = getAll();
    const tourId = Number(id);
    return toursData.find(tour => tour.id === tourId);
};

const getByQuery = (query) => {
    const toursData = getAll();
    return toursData.filter(tour =>
        Object.entries(query).every(([key, value]) =>
            tour[key] !== undefined &&
            String(tour[key]).toLowerCase() === String(value).toLowerCase()
        )
    );
};

const save = (tours) => {
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2));
};

// write post put delete functions here

const create = (tour) => {
    const toursData = getAll();
    toursData.push(tour);
    fs.writeFileSync(toursFilePath, JSON.stringify(toursData));
};

const update = (id, updatedTour) => {
    const toursData = getAll();
    const tourId = Number(id);
    const index = toursData.findIndex(tour => tour.id === tourId);
    if (index !== -1) {
        toursData[index] = { ...toursData[index], ...updatedTour };
        fs.writeFileSync(toursFilePath, JSON.stringify(toursData));
    }
};

const remove = (id) => {
    const toursData = getAll();
    const tourId = Number(id);
    const filteredTours = toursData.filter(tour => tour.id !== tourId);
    fs.writeFileSync(toursFilePath, JSON.stringify(filteredTours));
};

const save = (newTours) => {
    const tours = getAll();
    tours.push(...newTours);
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2));
}

const updateTour = (id, updatedTour) => {
    const tours = getAll();

    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return null; // Tour not found

    tours[index] = {id, ...updatedTour};
    
    fs.writeFileSync(toursFilePath, JSON.stringify(tours));

    return tours[index]; // Return the updated tour
    }
}

module.exports = {
    getAll,
    getById,
    getByQuery,
    create,
    update,
    remove,
    save
};

// index.js --> routes/tourRoutes.js --> controller/tourController.js --> model/tourModel.js