import { model, Schema } from "mongoose";

// Schema
const taskSchema = new Schema({
    task_name: String
})  

// model
const Task = model("tasks", taskSchema);

export default Task;