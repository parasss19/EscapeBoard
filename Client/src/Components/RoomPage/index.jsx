import { useRef, useState } from "react";
import WhiteBoard from "../WhiteBoard";

const index = () => {

  //As whiteboard is in different component so we pass reference of canvas and ctx in whiteboard component
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [elements, setElements] = useState([]);

  const [tool, setTool] = useState("Pencil");
  const [color, setColor] = useState('black');
  

  return (
    <div className="row h-[100vh] mt-3 ">
      <h1 className="text-center py-5 font-mono font-bold text-4xl text-blue-700 uppercase mt-1">Think <span className="text-red-800">"create"</span> draw 🚀 
        {/* <span className="font-light text-base"> Users :1</span>  */}
      </h1>

      {/*Parent container*/}
      <div className=" bg-red-300/45 flex justify-between items-center max-w-[70%] mx-auto rounded-lg px-3 py-2">
        {/* This div wrap all the tools */}
        <div className=" flex gap-4 items-center">
          <div>
            <label htmlFor="Pencil" className="mr-1 font-mono font-semibold">Pencil</label>
            <input
              type="radio"
              name="tool"
              value="Pencil"
              checked = {tool === "Pencil"}
              id="Pencil"
              className=""
              onChange={() => setTool(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="Line" className="mr-1 font-mono font-semibold">Line</label>
            <input
              type="radio"
              name="tool"
              checked = {tool === "Line"}
              value="Line"
              id="Line"
              className=""
              onChange={() => setTool(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Rect" className="mr-1 font-mono font-semibold">Rectangle</label>
            <input
              type="radio"
              name="tool"
              checked = {tool === "Rect"}
              value="Rect"
              id="Rect"
              className=""
              onChange={() => setTool(e.target.value)}
            />
          </div>

        </div>

        {/* This div wrap color and buttons */}
          <div className="flex items-center ">
            <label htmlFor="color" className="mr-1 font-mono font-semibold">Select Color : </label>
            <input
              type="color"
              name="tool"
              value={color}
              id="color"
              className=""
              onChange={() => setColor(e.target.value)}
            />
          </div>
        
        {/* Button */}
          <div className="flex gap-3">
            <button className="bg-blue-700 hover:bg-blue-900  text-white rounded-md px-2 py-1 font-mono font-bold"> Undo</button>
            <button className="bg-blue-700 hover:bg-blue-900 text-white rounded-md px-2 py-1 font-mono font-bold"> Redo </button>   
          </div>
          
        <button className="bg-red-800 hover:bg-red-700 text-white rounded-md px-2 py-1 font-mono font-bold"> Clear Canvas </button>    
      </div>
      
      <WhiteBoard 
        canvasRef={canvasRef} 
        ctxRef={ctxRef} 
        elements={elements} 
        setElements={setElements}
      />
      
    </div>
  );
};

export default index;
