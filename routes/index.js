const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes");

router.use("/auth", AuthRoutes);
const TourRoutes = require("./tour_routes");

router.get("/", (req, res) => res.send("Welcome"));

router.use("/tours", TourRoutes);

module.exports = router;
