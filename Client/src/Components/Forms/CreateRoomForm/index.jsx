import React from 'react'
import { Form } from 'react-router-dom'

const index = () => {
  return (
    <form className='mt-3'>
        <div>
          <input 
          type="text"
          placeholder='Enter your name'
          className='border rounded-md outline-none w-full my-2 mr-2 px-2 py-1'
          />
        </div>

        <div className='flex items-center mt-2'>
            <div>
              <input 
               type="text"
               placeholder='Generate room code'
               className='border rounded-md outline-none my-2 mr-2 px-2 py-1 '
              />
            </div>
             
            <div className=''>
                <button type='button' className='border bg-red-800 text-white p-1 font-mono rounded-md mr-2' >
                 generate
                </button>
     
                <button type='button' className='border bg-black text-white  p-1 font-mono rounded-md' >
                 copy
                </button>
            </div>
        </div>

        <button type='submit' className='bg-blue-900 text-white font-mono font-bold w-full mt-2 py-2'> Generate Room</button>
    </form>
  )
}

export default index
