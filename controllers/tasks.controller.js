export const taskGet = (req, res)=>{
    res.send("Reading...")
};

export const taskCreate = (req, res)=>{
    console.log('Create new task');
    res.send("Creating...");
};

export const taskUpdate = (req, res)=>{
    console.log('Update the existing task');
    res.send("Updating...");
};

export const taskDelete = (req, res)=>{
    console.log('Delete the existing task');
    res.send("Deleting...");
};