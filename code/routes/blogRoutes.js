// we use the Express router to split our routes into different files and manage them in small groups of routes that belong together. It makes our app modular and easier to update each part later on.

const express = require("express");
const router = express.Router(); // instance of the router
const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);

// POST request
router.post("/", blogController.blog_create_post);

// GET create blog form and render the view
router.get("/create", blogController.blog_create_get);

// GET individual blog post
router.get("/:id", blogController.blog_details);

// DELETE blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
// export the router so our blog route handlers can be applied to the express app
