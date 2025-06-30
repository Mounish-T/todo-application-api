import express from 'express';
import { taskCreate, taskDelete, taskGet, taskUpdate } from '../controllers/tasks.controller.js';
const router = express.Router();


// Making CRUD operations

// R - Read Tasks
router.get('/', taskGet);

// C - Create Tasks
router.post('/', taskCreate);

// U - Update Tasks
router.put('/:id', taskUpdate);

// D - Delete Tasks
router.delete('/:id', taskDelete);

export default router; 