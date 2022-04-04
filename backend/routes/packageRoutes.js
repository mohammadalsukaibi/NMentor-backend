const express = require("express");
const router = express.Router();
const {
  getPackages,
  setPackage,
  updatePackage,
  deletePackage,
} = require("../controllers/packagesController");

router.route("/").get(getPackages).post(setPackage);
router.route("/:id").delete(deletePackage).put(updatePackage);

module.exports = router;
