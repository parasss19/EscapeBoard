const express = require('express');
const app = express();
const cors = require("cors");

//Creating server
const server = require('http').createServer(app);

//Creating socket
const io = require('socket.io')(server, {
   cors : {
      origin: "http://localhost:5173",    //frontend url
   }
});


io.on("connection", (socket)=> {
   console.log("User connected");

   socket.on("user-joined", (data) => { 
      const { name, roomId, userId, host, presenter } = data;
      
      socket.join(roomId); 
       
      //When user joined 
      socket.emit("userIsJoined", { 
         success: true 
      });  
   }); 


   //Here we catch/Listen the "draw" event and Broadcast it to other clients
   socket.on('draw', (data) => {
      socket.broadcast.emit('canvasdraw', data);
   });
   

});


//seting port
const port  = process.env.PORT || 3000;

//Listen server
server.listen(port, ()=> {
    console.log(`Serve is running on ${port}`);
})
