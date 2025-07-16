const express = require("express");
const router = express.Router();
const ServiceProvider = require("../models/ServiceProvider");

// GET all service providers
router.get("/", async (req, res) => {
  try {
    const providers = await ServiceProvider.find();
    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new service provider
router.post("/", async (req, res) => {
  const { name, serviceType, location, hourlyRate, rating, description } =
    req.body;

  const newProvider = new ServiceProvider({
    name,
    serviceType,
    location,
    hourlyRate,
    rating,
    description,
  });

  try {
    const savedProvider = await newProvider.save();
    res.status(201).json(savedProvider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
