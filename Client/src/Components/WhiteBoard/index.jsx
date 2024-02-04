import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs";

const generator  = rough.generator();   //with the help of this we add the linear path 


function index({ canvasRef, ctxRef , elements, setElements }) {
  const [isDrawing, setIsDrawing] = useState(false);     //it track if the user is drawing or not

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx
  }, [])
 
  // it run whenever layout is change
  useLayoutEffect(()=>{
    const roughCanvas = rough.canvas(canvasRef.current)

    elements.forEach(element => {
      roughCanvas.linearPath(element.path);
    });
  }, [elements])


  //offsetX, offsetY = track mouse movement
  const handleMouseDown = (e) => {
    const {offsetX, offsetY} = e.nativeEvent;    
    setElements((prevElem) => [ 
      ...prevElem,
      {
        type:"Pencil",
        offsetX,
        offsetY,
        path: [ [offsetX, offsetY] ],
        stroke: 'black'
      }
    ])
    
    //When user mousedown then it means user start drawing 
    setIsDrawing(true)
  }


  const handleMouseMove = (e) => {
    const {offsetX, offsetY} = e.nativeEvent;
    if(isDrawing) {
      console.log(offsetX, offsetY);

      //to get the path of last element
      const {path} = elements[elements.length - 1];

      //now update the path 
      const newPath = [...path, [offsetX, offsetY]];

      setElements((prevElem) => (
        prevElem.map((elem, index)=>{
          if(index === elements.length - 1 ){
               return {
                ...elem,
                path: newPath
               }
          }else {
            return elem;
          }
        })
      ))
    }
  }


  const handleMouseUp = (e) => {
    //When user mousedup then it means user stop drawing 
    setIsDrawing(false);
  }


  return (
    <div>
      {/* {JSON.stringify(elements)} */}
     <canvas
       ref={canvasRef}
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
       onMouseUp={handleMouseUp}
       className="h-100vh w-full mx-auto border border-red-300 max-w-[70%] my-10">
     </canvas>
    </div>
  );
}

export default index;
