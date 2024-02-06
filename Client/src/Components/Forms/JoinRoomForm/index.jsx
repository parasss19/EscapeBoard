import React from "react";

const index = () => {
  return (
    <form className="mt-3">
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          className="border rounded-md outline-none w-full my-2 mr-2 px-2 py-1"
        />
      </div>

      <div className="mt-2">
          <input
            type="text"
            placeholder="Enter room code"
            className="border rounded-md outline-none w-full my-2 mr-2 px-2 py-1"
          />
      </div>

      <button type="submit" className="bg-blue-900 hover:bg-blue-700 text-white font-mono font-bold w-full mt-2 py-2"> Join Room </button>
    </form>
  );
};

export default index;
