import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs";

const generator  = rough.generator();   //with the help of this we add the linear path 


function WhiteBoard({ canvasRef, ctxRef , elements, setElements, color, tool }) {
  const [isDrawing, setIsDrawing] = useState(false);     //it track if the user is drawing or not

  useEffect(() => {
  const canvas = canvasRef.current;       //Canvas Reference => [const canvas = canvasRef.current]; retrieves the current value of the canvasRef.
  const context = canvas.getContext('2d');    //Canvas Rendering Context => [const context = canvas.getContext('2d');] gets the 2D rendering context of the canvas. The 2D rendering context provides methods and properties for drawing on the canvas.
  
  //Setting h and w of canvas
  canvas.height = window.innerHeight * 2 ;
  canvas.width = window.innerWidth * 2;

  context.strokeStyle = color;
  context.lineWidth = 2;
  context.lineCap = "round";
  
  //ctxRef for Storing Context => [ctxRef.current = context] assigns the 2D rendering context (context) to a ref called ctxRef. Storing the context in a ref can be useful for accessing the context outside the useEffect scope, such as in other parts of the component or in other functions. 
  ctxRef.current = context
  }, [])
  

  //useEffect for color
  useEffect(() => {
    ctxRef.current.strokeStyle = color;
  }, [color])
  
 
  // it run whenever layout is change
  useLayoutEffect(()=>{
    //1 Rough.js Canvas Initialization => [rough.canvas(canvasRef.current)] initializes a canvas using the rough library, which is a library for creating hand-drawn-like graphics. This canvas is then stored in the roughCanvas variable.
    //2 Drawing Elements on the Rough Canvas:
    //elements.forEach(element => { ... }); iterates through each element in the elements array.
    //if (element.path) { ... } = Checks if the current element has a type pencil. This is a safety check to ensure that the element has the necessary information for drawing.
    //roughCanvas.linearPath(element.path); = Calls the linearPath method of the roughCanvas, drawing a linear path based on the element.path. The element.path is assumed to be a valid path for the linearPath method.
    
    const roughCanvas = rough.canvas(canvasRef.current);

    //When we draw line then so many lines drawn together so we want to del the previous line whenever we draw new line
    if (elements.length > 0) {
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }
    
    elements.forEach(element => {
      //For Pencil
      if (element.type === "Pencil") {
        roughCanvas.linearPath(
          element.path,
          //passing props for roughness(to remove jiggly effect) ,stroke, strokewidht
          {
            roughness: 0,
            strokeWidth: 3,
            stroke: element.stroke
          }
        );
      }

      //For Line
      else if (element.type === "Line") {
        roughCanvas.draw(
          generator.line(
            element.offsetX, 
            element.offsetY, 
            element.width, 
            element.height,
            //passing props for roughness(to remove jiggly effect) ,stroke, strokewidht
            {
              roughness: 0,
              strokeWidth: 3,
              stroke: element.stroke
            }
          )
        )
      }

      //For Rect
      else if (element.type === "Rect") {
        roughCanvas.draw( 
          generator.rectangle(
            element.offsetX, 
            element.offsetY, 
            element.width, 
            element.height,
            //passing props for roughness(to remove jiggly effect) ,stroke, strokewidht
            {
              roughness: 0,
              strokeWidth: 2,
              stroke: element.stroke
            }
          )
        )
      }

    });

  }, [elements])


  //offsetX, offsetY = track mouse movement
  const handleMouseDown = (e) => {
    const {offsetX, offsetY} = e.nativeEvent;    
    
    //For Pencil
    if(tool === "Pencil") {
      setElements((prevElem) => [ 
        ...prevElem,
        {
          type:"Pencil",
          offsetX,
          offsetY,
          path: [ [offsetX, offsetY] ],
          stroke: color
        }
      ])
    }

    //For Line
    else if(tool === "Line"){
      setElements((prevElem) => [
        ...prevElem,
        {
          type:"Line",
          offsetX,
          offsetY,
          width: offsetX,
          height: offsetY,
          stroke: color
        }
      ])
    }

    //For Rect
    else if(tool === "Rect"){
      setElements((prevElem) => [
        ...prevElem,
        {
          type:"Rect",
          offsetX,
          offsetY,
          
          //if we provide w and h as offsetX and offsetY then when we draw rect its w and h is equal to offsetX and offsetY 
          //we dont want that 
          width: 0,
          height: 0,
          stroke: color
        }
      ])
    }

    //When user mousedown then it means user start drawing 
    setIsDrawing(true)
  }


  const handleMouseMove = (e) => {
    const {offsetX, offsetY} = e.nativeEvent;
    if(isDrawing) {
      console.log(offsetX, offsetY);   //for testing only

      //For Pencil
      if(tool === "Pencil") {
      const {path} = elements[elements.length - 1];     //to get the path of last element
      const newPath = [...path, [offsetX, offsetY]];    //now update the path 

      setElements((prevElem) => (
          prevElem.map((elem, index)=>{
            if(index === elements.length - 1 ){
              return {
                ...elem,
                path: newPath,
              }
            }else {
              return elem;
            }
          })
      ))
      }

      //For Line
      else if(tool === "Line") {
        setElements((prevElem) => (
          prevElem.map((elem, index) => {
            if(index === elements.length - 1 ){
              return {
                ...elem,
                width: offsetX,
                height: offsetY,
              }
            }else {
              return elem;
            }
          })
        ))
      }

       //For Rect
       else if(tool === "Rect") {
        setElements((prevElem) => (
          prevElem.map((elem, index) => {
            if(index === elements.length - 1 ){
              return {
                ...elem,
              
                //Here we substract the elem offsetX and offsetY from w and h coz when we draw rect intially it take size
                //of offsetX and offsetY 
                width: offsetX - elem.offsetX,
                height: offsetY - elem.offsetY,
              }
            }else {
              return elem;
            }
          })
        ))
      }


    }
  }


  const handleMouseUp = (e) => {
    //When user mousedup then it means user stop drawing 
    setIsDrawing(false);
  }


  return (
    <div
      className="h-[450px] w-full mx-auto border border-red-300 max-w-[75%] my-10 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >

     <canvas ref={canvasRef} />
    </div>
  );
}

export default WhiteBoard;
