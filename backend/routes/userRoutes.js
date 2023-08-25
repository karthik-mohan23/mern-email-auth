const express = require("express");

// controller
const { createUser } = require("../controller/userController");
// validator
const { userValidator, validate } = require("../middlewares/validator");

const router = express.Router();

router.post("/sign-up", userValidator, validate, createUser);

module.exports = router;
