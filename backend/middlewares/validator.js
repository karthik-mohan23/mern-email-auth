const { check, validationResult } = require("express-validator");

exports.userValidator = [
  //only when the condition fails message will be shown
  check("name").trim().not().isEmpty().withMessage("Name is missing"),
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 characters long"),
];

// function is used to gather the validation errors from the
//  request after applying validation rules to the incoming data.
exports.validate = (req, res, next) => {
  // used to extract the validation errors as an array
  const result = validationResult(req).array();
  if (result.length) {
    return res.json({ error: result[0].msg });
  }

  next();
};
