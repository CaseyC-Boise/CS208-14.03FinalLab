// routes/comments.js
const express = require("express");
const router = express.Router();


//Displays all existing comments in database from newest to oldest
router.get("/", (req, res) => {
    req.db.query("SELECT * FROM comments ORDER BY created_at DESC", (err, results) => {
        if (err) { //Error Handler
            console.error("Error loading comments:", err);
            return res.render("comments", { 
                comments: [], 
                title: "Customer Comments - Downtown Donuts",
                error: "Unable to load comments at this time."
            });
        }
        res.render("comments", { //Successful Case. Renders Existing Comments
            comments: results,
            title: "Customer Comments - Downtown Donuts",
            error: null
        });
    });
});

//Handles Comment Submission
router.post("/", (req, res) => {
    const { name, message } = req.body; //Gets User's Name and Message

    if (!name || !message || name.trim() === "" || message.trim() === "") { //Verifies Data Input
        return res.redirect("/comments?error=missing");
    }

    const sanitizedName = name.trim().substring(0, 255); //Removes any extra spaces and limits to 255 chars
    const sanitizedMessage = message.trim().substring(0, 1000); // Same as above but w/ 1000 chars

    //Inserts Comments into Database
    req.db.query(
        "INSERT INTO comments (name, message) VALUES (?, ?)",
        [sanitizedName, sanitizedMessage],
        (err) => { //Error Handler
            if (err) {
                console.error("Insert error:", err);
                return res.redirect("/comments?error=insert");
            }
            res.redirect("/comments"); // Reloads Page so updated comment is visible
        }
    );
});

module.exports = router;