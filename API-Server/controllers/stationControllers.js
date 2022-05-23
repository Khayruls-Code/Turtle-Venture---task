const Station = require("../models/stationsModels");

exports.createStation = async (req, res, next) => {
  const station = await Station.create(req.body)
  res.status(201).json({
    success: true,
    station
  })
}

exports.getAllStations = async (req, res) => {
  const stations = await Station.find()
  res.status(200).json({
    success: true,
    stations
  })
}

exports.updateStation = async (req, res) => {
  let station = await Station.findById(req.params.id)
  if (!station) {
    return res.station(404).json({
      success: false,
      message: "station not found"
    })
  }
  station = await Station.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    success: true,
    station
  })
}

exports.deleteStation = async (req, res) => {
  const station = await Station.findById(req.params.id)
  if (!station) {
    return res.status(404).json({
      success: false,
      message: "station not found"
    })
  }

  await station.remove()

  res.status(200).json({
    success: true,
    message: "station deleted successfully"
  })

}