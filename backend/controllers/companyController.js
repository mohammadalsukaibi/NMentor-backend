const asyncHandler = require('express-async-handler')

const Company = require("../models/companyModel");

// @desc    Get companies
// @route   GET /api/companies
// @access  Private
const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find();
  res.status(200).json(companies);
})

// @desc    Set company
// @route   POST /api/companies
// @access  Private
const setCompany = asyncHandler(async (req, res) => {

  const company = await Company.create({
    name: req.body.name,
    drivers: req.body.drivers,
    buses: req.body.buses,
    neighborhoods: req.body.neighborhoods,
  });

  res.status(200).json(company);

})

// @desc    Update company
// @route   PUT /api/companies/:id
// @access  Private
const updateCompany = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update company ${req.params.id}` });
})

// @desc    Delete company
// @route   DELETE /api/companies/:id
// @access  Private
const deleteCompany = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete company ${req.params.id}` });
})

module.exports = {
  getCompanies,
  setCompany,
  updateCompany,
  deleteCompany,
};
