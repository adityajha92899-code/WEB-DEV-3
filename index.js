const express = require("express");

const app = express();

const tourRoute = require("./routes/tourRoute");

app.use(express.json());

// Tour routes
app.use("/api", tourRoute);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});