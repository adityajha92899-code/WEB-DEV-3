const express = require("express");
const packages = require("./data/tour.js");

const app = express();
let port = 7000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/packages", (req, res) => {
  const { des } = req.query;

  if (des) {
    const filtered = packages.filter((pkg) =>
      pkg.name.includes(des) || pkg.description.includes(des)
    );
    return res.json(filtered);
  }

  res.json(packages);
});

app.get("/packages/:id", (req, res) => {
  const packageId = parseInt(req.params.id);
  const package = packages.find((pkg) => pkg.id === packageId);
  if (package) {
    res.json(package);
  } else {
    res.status(404).json({ error: "Package not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});