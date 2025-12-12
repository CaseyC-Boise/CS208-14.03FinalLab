// routes/about.js
const express = require("express");
const router = express.Router();

//Displays and Renders About Page
router.get("/", (req, res) => {
    res.render("about", { 
        title: "About Us - Downtown Donuts"
    });
});

module.exports = router;