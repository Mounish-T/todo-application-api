import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks.routes.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 1000; // Set the Port where the Server is Listening at
const customIp = '192.168.50.85'; // Set the custom Ip address to run the server

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connect the database
connectDB();

app.listen(PORT, customIp, ()=>{
    console.log(`The Server is running at http://${customIp}:${PORT}`);
})

// Initial Route
app.get('/', (req, res)=>{
    try {
        res.status(200).send("This is the Initial route of the Server");
    } catch (error) {
        res.status(404).json({
            message: "Server is not connected"
        });
    }
})

// Making CRUD operations
app.use('/tasks', tasksRoutes);  // Middlewares 