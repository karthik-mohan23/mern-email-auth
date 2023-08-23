const express = require("express");

// controller
const { createUser } = require("../controller/userController");

const router = express.Router();

router.post("/sign-up", createUser);

module.exports = router;
