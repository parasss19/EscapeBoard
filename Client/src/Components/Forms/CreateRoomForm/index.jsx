import React, { useEffect, useState } from 'react'

const CreateRoom = ({passGenerator}) => {
  const [name, setName] = useState('');
  const [roomId , setRoomId] = useState('');


  //When we click on Generate room button 
  const handleCreateRoom = (e) => {
    e.preventDefault();

    //here we pass obj roomData which contain info like name,roomId, userId,host,presenter
    const roomData = {
      name,
      roomId,
      userId : passGenerator(),
      host : true,
      presenter : true,
    }
  }

  return (
    <form className='mt-3'>
        <div>
          <input 
          type="text"
          value={name}
          placeholder='Enter your name'
          className='border rounded-md outline-none w-full my-2 mr-2 px-2 py-1'
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='flex items-center mt-2'>
            <div>
              <input 
               type="text"
               value={roomId}
               placeholder='Generate room code'
               disabled
               className='border rounded-md outline-none my-2 mr-2 px-2 py-1 '
              />
            </div>
             
            <div className=''>
                <button 
                    type='button'  
                    className='border bg-red-500 hover:bg-red-600 text-white p-1 font-mono rounded-md mr-2'
                    onClick={() => setRoomId(passGenerator())}
                 >
                 generate
                </button>
     
                <button 
                    type='button' 
                    className='border bg-black/70 hover:bg-black/80 text-white  p-1 font-mono rounded-md' 
                    
                >
                 copy
                </button>
            </div>
        </div>

        <button 
          type='submit' 
          className='bg-blue-900 hover:bg-blue-700 text-white font-mono font-bold w-full mt-2 py-2'
          onClick={handleCreateRoom}
        > 
          Generate Room
        </button>

    </form>
  )
}

export default CreateRoom;
