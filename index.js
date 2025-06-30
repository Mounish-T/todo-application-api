const express = require('express');

const app = express();
const PORT = 1000; // Set the Port where the Server is Listening at

app.listen(PORT, ()=>{
    console.log(`The Server is running at http://127.0.0.1:${PORT}`);
})

// Initial Route
app.get('/', (req, res)=>{
    res.send("This is the Initial route of the Server");
})

// Making CRUD operations

// R - Read Tasks
app.get('/tasks', (req, res)=>{
    console.log('Get all available tasks');
    res.send("Reading...");
});

// C - Create Tasks
app.post('/tasks', (req, res)=>{
    console.log('Create new task');
    res.send("Creating...");
});

// U - Update Tasks
app.put('/tasks', (req, res)=>{
    console.log('Update the existing task');
    res.send("Updating...");
});

// D - Delete Tasks
app.delete('/tasks', (req, res)=>{
    console.log('Delete the existing task');
    res.send("Deleting...");
});