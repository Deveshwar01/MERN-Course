const express = require("express");
const router = express.Router();
const User = require("../model/User")

const {login , signup} = require("../controllers/auth");

router.post("/login",login);
router.post("/signup",signup);

module.exports = router;