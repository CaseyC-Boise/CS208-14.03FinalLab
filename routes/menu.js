// routes/menu.js
const express = require("express");
const router = express.Router();

//Displays and Renders Menu Page
router.get("/", (req, res) => {
    res.render("menu", { 
        title: "Our Menu - Downtown Donuts"
    });
});

module.exports = router;