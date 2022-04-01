const express = require("express");
const router = express.Router();
const {
    getBuses,
    setBus,
    updateBus,
    deleteBus,
} = require("../controllers/busController");

router.route("/").get(getBuses).post(setBus);
router.route("/:id").delete(updateBus).put(deleteBus);

module.exports = router;
