import Task from "../models/task.model.js";

export const taskGet = async (req, res)=>{
    try {
        const allTasks = await Task.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
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

export const taskUpdate = async (req, res)=>{
    try {
        const updatedTask = await Task.findOneAndUpdate(
            // From Record
            {
                _id: req.params.id
            },
            // To Record
            {
                task_name: req.body.task_name
            },
            // Set Options => [if new = true or returnDocumet = 'after' -> return the updated document]. 
            //                [if upsert = true -> no document matches, it will insert ]
            {
                // returnDocument: 'after' => if it set 'before' it will return old document
                new: true,
            }
        );
        res.status(200).json(updatedTask);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const taskDelete = (req, res)=>{
    console.log('Delete the existing task');
    res.send("Deleting...");
};
