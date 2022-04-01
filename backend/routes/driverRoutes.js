const express = require("express");
const router = express.Router();
const {
  getDrivers,
  setDriver,
  updateDriver,
  deleteDriver,
} = require("../controllers/driverController");

router.route("/").get(getDrivers).post(setDriver);
router.route("/:id").delete(updateDriver).put(deleteDriver);

module.exports = router;
