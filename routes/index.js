// routes/index.js
const express = require("express");
const router = express.Router();

//Displays and Renders Home Page
router.get("/", (req, res) => {
    res.render("index", { 
        title: "Downtown Donuts - Fresh Donuts Daily Since 1992"
    });
});

module.exports = router;