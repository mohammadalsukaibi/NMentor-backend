const asyncHandler = require('express-async-handler')

const Package = require("../models/packageModel");

// @desc    Get packages
// @route   GET /api/packages
// @access  Private
const getPackages = asyncHandler(async (req, res) => {
  const packages = await Package.find();
  res.status(200).json(packages);
})

// @desc    Set package
// @route   POST /api/packages
// @access  Private
const setPackage = asyncHandler(async (req, res) => {
  const package = await Package.create({
    companyID: req.body.companyID,
    duration: req.body.duration,
    price: req.body.price,
    destination: req.body.destination,
    maxCustomerNumber: req.body.maxCustomerNumber,
    minCustomerNumber: req.body.minCustomerNumber,
  });
  res.status(200).json(package);
})

// @desc    Update package
// @route   PUT /api/packages/:id
// @access  Private
const updatePackage = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update package ${req.params.id}` });
})

// @desc    Delete package
// @route   DELETE /api/packages/:id
// @access  Private
const deletePackage = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete package ${req.params.id}` });
})

module.exports = {
  getPackages,
  setPackage,
  updatePackage,
  deletePackage,
};
