const express = require("express");
const router = express.Router();

const isAuth = require("../middelWares/auth");

const authenticationControlles = require("../controllers/authintication");
const profileControlles = require("../controllers/profile");

router.post("/login", authenticationControlles.userLogin);
router.get("/profile", isAuth, profileControlles);

module.exports = router;
