const express = require("express");
const app = express();
const PORT = process.env.PORT || 4040;

// This displays message that the server running and listening to specified port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 

app.get("/api",(req, res)=>{
    res.send({express: 'your express backend is connected to react'})
})