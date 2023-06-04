const getAllTasks = (req, res) => {
  res.send("All items");
}

const createTasks = (req, res) => {
  res.send("Task created");
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