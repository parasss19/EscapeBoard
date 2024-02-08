import React, { useCallback, useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "../src/Components/HomePage";
import Forms from "../src/Components/Forms"; // For join/create room
import RoomPage from "../src/Components/RoomPage"; //WhiteBoard

const App = () => {

  //Paasword generator function
  const passGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 12; i++) { // Assuming length 10 for now
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    return pass; // Return the generated password
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="room" element={<Forms passGenerator={passGenerator} />} />
          <Route path="room/:roomId" element={<RoomPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
