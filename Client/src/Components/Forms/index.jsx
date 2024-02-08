import JoinRoom from './JoinRoomForm';
import CreateRoom from './CreateRoomForm'

const Forms = () => {
  return (
    <div className='flex justify-center items-center h-[70vh] my-12 gap-x-36'>
          {/* Left col= Create Room */}
          <div className="w-[380px] h-60 pt-2 px-4 mt-5 border border-blue-900 rounded-md">
            <h1 className=' text-center font-mono text-3xl text-blue-900 font-bold'>Create Room</h1> 
            <CreateRoom />
           </div>

          {/* Right col= Join Room */}
          <div className="w-[380px] h-60 pt-2 px-4 mt-5 border border-blue-900 rounded-md">
            <h1 className=' text-center font-mono text-3xl text-blue-900 font-bold'>Join Room</h1> 
            <JoinRoom />
          </div>
    </div>
  )
}

export default Forms;

