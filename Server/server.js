const express = require('express');
const app = express();

//Creating server
const server = require('http').createServer(app);

//Creating socket
const { Server } = require('socket.io');
const io = new Server(server);

//routes
app.get('/', (req, res) => {
   res.send("hello from server")
})

//socket connection (when new user join run this )
io.on("connection", (socket)=> {
    console.log("User connected");
})


//seting port
const port  = process.env.PORT || 5000;

//Listen server
server.listen(port, ()=> {
    console.log('server is running')
})
