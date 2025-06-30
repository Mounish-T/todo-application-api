const express = require('express');

const app = express();
const PORT = 1000;

app.listen(PORT, ()=>{
    console.log(`The Server is running at http://127.0.0.1:${Port}`);
})

app.get('/', (req, res)=>{
    res.send("This is the Initial route of the Server");
})

