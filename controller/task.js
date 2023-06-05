const Task = require('../models/task');

const getAllTasks = (req, res) => {
  res.send("All items");
}

const createTasks = async (req, res) => {
  try{
    const task = await Task.create(req.body);
    res.status(201).json({task});

  }catch(err){
    res.status(500).json({msg: err})
  }
}

const getTask = (req, res) => {
  res.send("Got specific task");
}

const updateTask = (req, res) => {
  res.send("Updated task");
}

const deleteTask = (req, res) => {
  res.send("Deleted task");
}

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
}