

const index = () => {
  return (
    <div className="flex gap-x-36">
        {/* Left col= Join Room */}
        <div className="flex justify-center w-1/2 h-60 pt-2 px-4 mt-5 border border-blue-900 rounded-md">
         <h1 className="font-mono text-4xl text-blue-900 font-semibold"> Join Room</h1>
        </div>

        {/* Right col= Create Room */}
        <div className="flex justify-center w-1/2 h-60 pr-2 px-4 mt-5 border border-blue-900 rounded-md">
          <h1 className="font-mono text-4xl text-blue-900 font-semibold">Create Room</h1>
        </div>
    </div>
  )
}

export default index

