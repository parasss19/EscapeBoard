const express = require('express');
const app = express();
const cors = require("cors");

const {addUser} = require("./utils/users");

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

   //catch "user-joined" event to get num of user joined to io
   socket.on("user-joined", (data) => { 
      const { name, roomId, userId, host, presenter } = data;
      
      socket.join(roomId);      

      //To show num of user joined
      const users = addUser(data);
       
      //When user joined 
      socket.emit("userIsJoined", { 
         success: true,
         users
      });  
         
      //Broadcast num of users joined
      socket.broadcast.to(roomId).emit("onlineUsers", users);

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
