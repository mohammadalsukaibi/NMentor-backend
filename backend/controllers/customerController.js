const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Customer = require('../models/customerModel')
const RefreshTokens = require('../models/authModel')

// @desc    Register new customer
// @route   POST /api/customer/register
// @access  Public
const registerCustomer = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body

  if (!fullName || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if customer exists
  const userExists = await Customer.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const customer = await Customer.create({
    fullName,
    email,
    password: hashedPassword,
  })

  // create tokens
  const accessToken = generateAccessToken(customer._id)
  const refreshToken = generateRefreshToken(customer._id)
  await RefreshTokens.create({ refreshToken })

  if (customer) {
    res.status(201).json({
      _id: customer.id,
      fullName: customer.fullName,
      email: customer.email,
      accessToken: accessToken,
      refreshToken: refreshToken
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a customer
// @route   POST /api/customer/login
// @access  Public
const loginCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check for customer email
  const customer = await Customer.findOne({ email })
  // create tokens
  const accessToken = generateAccessToken(customer._id)
  const refreshToken = generateRefreshToken(customer._id)
  await RefreshTokens.create({ refreshToken })

  if (customer && (await bcrypt.compare(password, customer.password))) {
    res.json({
      _id: customer.id,
      fullName: customer.fullName,
      email: customer.email,
      accessToken: accessToken,
      refreshToken: refreshToken
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Authenticate a customer
// @route   POST /api/customer/login
// @access  Public
const logoutCustomer = asyncHandler(async (req, res) => {
  //delete refresh token from the database
  await RefreshTokens.deleteOne({refreshToken: req.body.token})
  res.sendStatus(204)
})


// @desc    Authenticate a customer
// @route   POST /api/customer/login
// @access  Public
const getAccessToken = asyncHandler(async (req, res) => {
  const refreshToken = req.body.token;

  if (refreshToken == null) return res.sendStatus(401)
  const token = await RefreshTokens.find({refreshToken: refreshToken}).count()
  if (token === 0) return res.sendStatus(403)

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    // console.log(user.id);
    const accessToken = generateAccessToken(user.id)
    res.json({ accessToken: accessToken })
  })
  
})


// @desc    Get customers
// @route   GET /api/customers

const getCustomers = asyncHandler(async (req, res) => {
  // console.log(req.customer);
  const customers = await Customer.find()
  res.json(customers);
})

// @desc    Set customer
// @route   POST /api/customers
// @access  Private
const setCustomer = asyncHandler(async (req, res) => {
  
  const {fullName, email, phoneNumber, DOB, gender, currentLocation} = req.body

  const customer = await Customer.create({
    fullName,
    email,
    phoneNumber,
    DOB,
    gender,
    currentLocation,
  })
  res.json(customer);
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

// Generate JWT
const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m',
  })
}

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  getCustomers,
  setCustomer,
  updatecustomer,
  deletecustomer,
  registerCustomer,
  loginCustomer,
  getAccessToken,
  logoutCustomer
};
