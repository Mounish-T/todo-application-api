import express from 'express';
const router = express.Router();


// Making CRUD operations

// R - Read Tasks
    router.get('/', (req, res)=>{
        console.log('Get all available tasks');
    res.send("Reading...");
});

// C - Create Tasks
router.post('/', (req, res)=>{
    console.log('Create new task');
    res.send("Creating...");
});

// U - Update Tasks
router.put('/:id', (req, res)=>{
    console.log('Update the existing task');
    res.send("Updating...");
});

// D - Delete Tasks
router.delete('/:id', (req, res)=>{
    console.log('Delete the existing task');
    res.send("Deleting...");
});

export default router; 