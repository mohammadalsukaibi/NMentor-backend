const asyncHandler = require("express-async-handler");

const Driver = require("../models/driverModel");

// @desc    Get drivers
// @route   GET /api/drivers
// @access  Private
const getDrivers = asyncHandler(async (req, res) => {
  const drivers = await Driver.find();
  res.status(200).json(drivers);
});

// @desc    Set driver
// @route   POST /api/drivers
// @access  Private
const setDriver = asyncHandler(async (req, res) => {

  const {fullName, licenseNumber, phoneNumber, DOB, gender, companyID} = req.body

  const driver = await Driver.create({
    fullName,
    licenseNumber,
    phoneNumber,
    DOB,
    gender,
    companyID,
  });
  res.json(driver);
});

// @desc    Update driver
// @route   PUT /api/drivers/:id
// @access  Private
const updateDriver = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update driver ${req.params.id}` });
});

// @desc    Delete driver
// @route   DELETE /api/drivers/:id
// @access  Private
const deleteDriver = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete driver ${req.params.id}` });
});

module.exports = {
  getDrivers,
  setDriver,
  updateDriver,
  deleteDriver,
};
