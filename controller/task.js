const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {

    // Retrieves all task from db
    const task = await Task.find({});
    res.status(200).json({task});

  } catch (err) {
    res.status(500).json({msg: err});
  }
}

const createTasks = async (req, res) => {
  try{
    const task = await Task.create(req.body);
    res.status(201).json({task});

  }catch(err){
    res.status(500).json({msg: err})
  }
}

const getTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findOne({_id: id});

    if (!task){
      res.status(404).json({msg: `No task with ID: ${id}`}); 
    }else{
      res.status(200).json({task});
    }
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const updateTask = (req, res) => {
  res.send("Updated task");
}

const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findOneAndDelete({_id: id});
    if (!task){
      res.status(404).json({msg: `No task with ID: ${id}`}); 
    }else{
      res.status(200).json({task});
    }
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
}