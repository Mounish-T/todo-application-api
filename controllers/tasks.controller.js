import Task from "../models/task.model.js";

export const taskGet = (req, res)=>{
    res.send("Reading...")
};

export const taskCreate = async (req, res)=>{
    const newTask = new Task({
        task_name: req.body.task_name
    })
    try {
        const task = await newTask.save();
        return res.status(201).json(task);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
    return res.json(newTask);
    
};

export const taskUpdate = (req, res)=>{
    console.log('Update the existing task');
    res.send("Updating...");
};

export const taskDelete = (req, res)=>{
    console.log('Delete the existing task');
    res.send("Deleting...");
};
