const express = require('express')
const router = express.Router()
const {
    getCustomers,
    setCustomer,
    updatecustomer,
    deletecustomer,
    registerCustomer,
    loginCustomer,
    getAccessToken,
    logoutCustomer
} = require('../controllers/customerController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getCustomers).post(setCustomer)
// router.route('/:id').delete(deletecustomer).put(updatecustomer)
// auth
router.route('/register').post(registerCustomer)
router.route('/login').post(loginCustomer)
router.route('/token').post(getAccessToken)
router.route('/logout').delete(logoutCustomer)

module.exports = router