const express = require("express");
const { newContact } = require('../controllers/contactController.js');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authenticator");

const router = express.Router();

router.route('/contact/new').post(isAuthenticatedUser, newContact);

module.exports = router;
