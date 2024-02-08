import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from "./Layout";
import HomePage from "../src/Components/HomePage";
import Forms from "../src/Components/Forms";         // For join/create room
import RoomPage from "../src/Components/RoomPage";   //WhiteBoard

const App = () => {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path='' element={<HomePage />} />
          <Route path="room" element={<Forms />} />
          <Route path="room/:roomId" element={<RoomPage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
