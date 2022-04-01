const express = require('express')
const router = express.Router()
const {
    getCustomers,
    setCustomer,
    updatecustomer,
    deletecustomer,
} = require('../controllers/customerController')


router.route('/').get(getCustomers).post(setCustomer)
router.route('/:id').delete(deletecustomer).put(updatecustomer)

module.exports = router