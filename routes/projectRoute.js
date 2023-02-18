const express = require("express");

//router
const router = express.Router();

//GET all projects
router.get("/", (req, res) => {
  res.json({ messege: "GET all projects" });
});

//GET a single project
router.get("/:id", (req, res) => {
  res.json({ messege: "GET a single project" });
});

//POST a new project
router.post("/", (req, res) => {
  res.json({ messege: "POST a new project" });
});

//DELETE a project
router.delete("/:id", (req, res) => {
  res.json({ messege: "DELETE a project" });
});

//UPDATE a project
router.patch("/:id", (req, res) => {
  res.json({ messege: "PATCH a project" });
});

module.exports = router;
