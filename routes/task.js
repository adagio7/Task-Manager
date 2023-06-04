const express = require('express');
const {getAllTasks, createTasks, getTask, updateTask, deleteTask} = require("../controller/task");

const router = express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;