const express = require('express');
const app = express()
const port = 3000;

const tasks = require("./routes/task");
const connectDB = require('./db/connect');

// Load Mongo_URI from .env
require('dotenv').config()

// Middleware

app.use(express.json());

// Routing
app.get('/', (req, res) => {
  res.send("Task Manager App");
})

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  }catch(err){
    console.log(err);
  }
}

start();