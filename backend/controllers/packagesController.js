const asyncHandler = require('express-async-handler')

// @desc    Get packages
// @route   GET /api/packages
// @access  Private
const getPackages = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get package" });
})

// @desc    Set package
// @route   POST /api/packages
// @access  Private
const setPackage = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "please add a package" });
  }
  res.status(200).json({ message: "set package" });
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
