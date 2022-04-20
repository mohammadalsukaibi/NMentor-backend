const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/customers', require('./routes/customerRoutes'))
app.use('/api/drivers', require('./routes/driverRoutes'))
app.use('/api/buses', require('./routes/busRoutes'))
app.use('/api/companies', require('./routes/companyRoutes'))
app.use('/api/packages', require('./routes/packageRoutes'))

app.listen(port, () => console.log("server running on port", port))