const asyncHandler = require("express-async-handler");

const Bus = require("../models/busModel");

// @desc    Get buses
// @route   GET /api/buses
// @access  Private
const getBuses = asyncHandler(async (req, res) => {
  const buses = await Bus.find();
  res.status(200).json(buses);
});

// @desc    Set bus
// @route   POST /api/buses
// @access  Private
const setBus = asyncHandler(async (req, res) => {
  const bus = await Bus.create({
    plateNumber: req.body.plateNumber,
    MaxCapacity: req.body.MaxCapacity,
    driver: req.body.driver,
    companyID: req.body.companyID,
  });
  res.status(200).json(bus);
});

// @desc    Update bus
// @route   PUT /api/buses/:id
// @access  Private
const updateBus = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update bus ${req.params.id}` });
});

// @desc    Delete bus
// @route   DELETE /api/buses/:id
// @access  Private
const deleteBus = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete bus ${req.params.id}` });
});

module.exports = {
  getBuses,
  setBus,
  updateBus,
  deleteBus,
};
