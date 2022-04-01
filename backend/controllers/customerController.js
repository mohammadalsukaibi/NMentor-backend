const asyncHandler = require('express-async-handler')

const Customer = require('../models/customerModel')

// @desc    Get customers
// @route   GET /api/customers
// @access  Private
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find()
  res.status(200).json(customers);
})

// @desc    Set customer
// @route   POST /api/customers
// @access  Private
const setCustomer = asyncHandler(async (req, res) => {
  // if (!req.body.text) {
  //   res.status(400).json({ message: "please add a customer" });
  // }

  const customer = await Customer.create({
    fullName: req.body.fullName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    DOB: req.body.DOB,
    gender: req.body.gender,
    currentLocation: req.body.currentLocation,
  })
  res.status(200).json(customer);
})

// @desc    Update customer
// @route   PUT /api/customers/:id
// @access  Private
const updatecustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update customer ${req.params.id}` });
})

// @desc    Delete customer
// @route   DELETE /api/customers/:id
// @access  Private
const deletecustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete customer ${req.params.id}` });
})

module.exports = {
  getCustomers,
  setCustomer,
  updatecustomer,
  deletecustomer,
};
