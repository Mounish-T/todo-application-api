import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks.routes.js';
import connectDB from './lib/db.js';
import os from 'os';

const app = express();
const PORT = 1000; // Set the Port where the Server is Listening at
// const customIp = '0.0.0.0'; // Set the wifi Ip address to run the server

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      // Skip over non-IPv4 and internal addresses (like 127.0.0.1)
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'IP not found';
}

const customIp = getLocalIP();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connect the database
connectDB();

// 0.0.0.0 => open access -> By default, it run in the current wifi network
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