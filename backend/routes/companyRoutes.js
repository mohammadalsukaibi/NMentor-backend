const express = require("express");
const router = express.Router();
const {
  getCompanies,
  setCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

router.route("/").get(getCompanies).post(setCompany);
router.route("/:id").delete(deleteCompany).put(updateCompany);

module.exports = router;
