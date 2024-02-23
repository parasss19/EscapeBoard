import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const JoinRoom = ({passGenerator, socket, setUserData}) => {

  const [name, setName] = useState('');
  const [roomId , setRoomId] = useState('');

  const navigate = useNavigate();

  //When we click on Join room button 
  const handleJoinRoom = (e) => {
    e.preventDefault();
    const roomData = {
      name,
      roomId,
      userId : passGenerator(),
      host : false,
      presenter : false,
    };   

    setUserData(roomData);  
    navigate(`/${roomId}`);  
    // console.log(roomData)
    socket.emit("user-joined", roomData);
  }

  return (
    <form className="mt-3">
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          className="border rounded-md outline-none w-full my-2 mr-2 px-2 py-1"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mt-2">
          <input
            type="text"
            value={roomId}
            placeholder="Enter room code"
            className="border rounded-md outline-none w-full my-2 mr-2 px-2 py-1"
            onChange={(e) => setRoomId(e.target.value)}
          />
      </div>

      <button 
        type="submit" 
        className="bg-blue-900 hover:bg-blue-700 text-white font-mono font-bold w-full mt-2 py-2"
        onClick={handleJoinRoom}
      > 
        Join Room 
      </button>
    </form>
  );
};

export default JoinRoom;
