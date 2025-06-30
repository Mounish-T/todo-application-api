import { model, Schema } from "mongoose";

// Schema
const taskSchema = new Schema({
    task_name: {
        type: String,
        required: true, // Validation
        unique: true
    }
});  

// model
const Task = model("tasks", taskSchema);

export default Task;