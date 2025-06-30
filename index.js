import express from 'express';
import tasksRoutes from './routes/tasks.routes.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 1000; // Set the Port where the Server is Listening at

// Connect the database
connectDB();

app.listen(PORT, ()=>{
    console.log(`The Server is running at http://127.0.0.1:${PORT}`);
})

// Initial Route
app.get('/', (req, res)=>{
    res.send("This is the Initial route of the Server");
})

// Making CRUD operations
app.use('/tasks', tasksRoutes);  // Middlewares 