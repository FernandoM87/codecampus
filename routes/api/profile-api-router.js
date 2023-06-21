const express = require("express");
const controller = require("../../controllers/api/profile-api-controller");
const router = express.Router();

router.post('/complete-step', controller.completeStep);

module.exports = router;