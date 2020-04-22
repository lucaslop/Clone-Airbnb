const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/upload");
const SessionController = require("./controller/SessionController");
const SpotController = require("./controller/SpotController");
const DashBoardController = require("./controller/DashboardController");
const routes = express.Router();
const upload = multer(multerConfig);

routes.post("/sessions", SessionController.store);
routes.get("/sposts", DashBoardController.show);
routes.post("/spots", upload.single("thumbmail"), SpotController.store);
routes.get("/spots", SpotController.index);

module.exports = routes;
