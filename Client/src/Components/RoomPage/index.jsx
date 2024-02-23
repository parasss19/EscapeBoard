import { useRef, useState } from "react";
import WhiteBoard from "../WhiteBoard";

const RoomPage = ({userData, socket}) => {

  //As whiteboard is in different component so we pass reference of canvas and ctx(context) in whiteboard component
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [elements, setElements] = useState([]);

  const [tool, setTool] = useState("Pencil");
  const [color, setColor] = useState('#000000');

  //history array is used for redo and elements array used for undo
  const [history, setHistory] = useState([]);

  const [isActive, setIsActive] = useState();


  //Clear canvas
  const handleCanvasClear =  () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d'); 

    context.fillRect = "white";
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    setElements([]);
  }
  
  //UNDO
  const handleUndo = () => {
    //remove the second last element from elements array
    setElements((prevElem) => (
      prevElem.slice(0, prevElem.length - 1)
    ))
    //Now add the removed element in history array
    setHistory((prevHistory) => [
      ...prevHistory,
      elements[elements.length - 1]
    ])
  }
  

  //REDO
  const handleRedo = () => {
    //Now add the removed element in elements array
    setElements((prevElem) => [
      ...prevElem,
      history[history.length - 1]
    ])
    //remove the second last element from history array
    setHistory((prevHistory) => (
      prevHistory.slice(0, prevHistory.length - 1)
    ))
  }

  return (
    <div className="row  mt-3 ">
      
      {/* TITLE */}
      <h1 className="text-center py-5 font-mono font-bold text-4xl text-blue-700 uppercase mt-1">Think <span className="text-red-800">"create"</span> draw 🚀 
        {/* <span className="font-light text-base"> Users :1</span>  */}
      </h1>
       
       
      {/* TOOLS */}
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
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
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
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
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
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
            />
          </div>

        </div>
      
        {/* This div wrap color */}
          <div className="flex items-center ">
            <label htmlFor="color" className="mr-1 font-mono font-semibold">Select Color : </label>
            <input
              type="color"
              name="tool"
              value={color}
              id="color"
              className=""
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        
        {/*UNDO / REDO Button */}
          <div className="flex gap-3">
            <button 
                disabled = {elements.length === 0}
                className="bg-blue-700 hover:bg-blue-900  text-white rounded-md px-2 py-1 font-mono font-bold"
                onClick={() => handleUndo()}
            > Undo
            </button>

            <button 
                disabled = {history.length < 1} 
                className="bg-blue-700 hover:bg-blue-900  text-white rounded-md px-2 py-1 font-mono font-bold"
                onClick={() => handleRedo()}
            > Redo 
            </button>   
          </div>
          
        <button onClick={handleCanvasClear} className="bg-red-800 hover:bg-red-700 text-white rounded-md px-2 py-1 font-mono font-bold"> Clear Canvas </button>    
      
      </div>
      

      {/* CANVAS/WHITEBOARD */}
      <WhiteBoard 
        canvasRef={canvasRef} 
        ctxRef={ctxRef} 
        elements={elements} 
        setElements={setElements}
        tool={tool}
        color={color}
        userData={userData}
        socket={socket}
      />
      
    </div>
  );
};

export default RoomPage;
