const express = require("express");
const router = express.Router();
const Tasks = require("../../models/Tasks");

// Get the Tasks

router.get("/", (req, res) => {
  Tasks.find()
    .sort({ date: -1 })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json({ message: err }));
});

// Post the task
router.post("/", (req, res) => {
  const task = new Tasks({ task: req.body.task });
  task
    .save()
    .then((task) => res.json({ task }))
    .catch((err) => res.json({ message: err }));
});

// Delete the task
router.delete("/:id", (req, res) => {
  Tasks.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "success deleted" }))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
