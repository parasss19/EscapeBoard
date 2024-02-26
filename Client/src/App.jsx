import React, { useCallback, useEffect, useState } from "react";
import {io} from "socket.io-client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";    //For routing  
import Layout from "./Layout";
import HomePage from "../src/Components/HomePage";
import Forms from "../src/Components/Forms"; // For join/create room
import RoomPage from "../src/Components/RoomPage";
import About from "../src/Components/About";



//Websocket
//pass the backend url
const socket = io.connect("http://localhost:3000", { 
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
}); 


const App = () => {

  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    //Catch "userIsJoined" event to check userjoined or not
    socket.on("userIsJoined", (data) => {
      if (data.success) {
        console.log("UserJoined");
        setUsers(data.users);
      } else {
        console.log("Error");
      }
    });

    //Catch "onlineUsers" event to show num of online users
    socket.on("onlineUsers", (data) => {
      setUsers(data);
    })
  }, []);


  //Paasword generator function
  const passGenerator = () => { 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 12; i++) {
      // Assuming length 10 for now
      let char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char);
    }
    return pass; // Return the generated password
  };

  // Function to generate and set password
  //  const generateAndSetPass = () => {
  //   setPass(passGenerator());
  // };


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="room" element={
              <Forms
                passGenerator={passGenerator}
                socket={socket}
                setUserData={setUserData}
                // pass={pass}
                // setPass={setPass}
                // generateAndSetPass={generateAndSetPass}
              />
            }
          />
          <Route path="/:roomId" element={
              <RoomPage
                userData={userData}
                socket={socket}
                users = {users}
              />
            } 
          />
        </Route>
      </Routes>
      
    </Router>
  );
};

export default App;
