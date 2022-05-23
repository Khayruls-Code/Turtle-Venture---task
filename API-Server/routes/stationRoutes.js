const express = require("express")
const { createStation, getAllStations, updateStation, deleteStation } = require("../controllers/stationControllers")
const router = express.Router()

router.route('/station/new').post(createStation)
router.route('/stations').get(getAllStations)
router.route('/station/:id').put(updateStation).delete(deleteStation)


module.exports = router;