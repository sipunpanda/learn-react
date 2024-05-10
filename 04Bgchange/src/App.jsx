import { useState } from "react"

function App() {
  let [color,setColor] = useState("aqua")
 

  return (
    <>
     <div className="w-full h-screen duration-200 flex justify-center"
     style={{backgroundColor: color}}
     >
      <div className="flex flex-wrap justify-center inset-x-0 px-2 h-10"

      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button 
          onClick={()=> setColor("red")}
          className="outline-none px-4 rounded"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={()=> setColor("green")}
          className="outline-none px-4 rounded" 
          style={{backgroundColor: "green"}}
          >green
          </button>
          <button
          onClick={()=> setColor("yellow")}
          className="outline-none px-4 rounded"
          style={{backgroundColor: "yellow"}}
          >yellow
          </button>
          <button 
          onClick={()=> setColor("blue")}
          className="outline-none px-4 rounded"
          style={{backgroundColor: "blue"}}
          >blue
          </button>
          <button
          onClick={()=> setColor("black")}
          className="outline-none px-4 text-violet-100 rounded"
          style={{backgroundColor: "black"}}
          >black
          </button>
          <button
          onClick={()=> setColor("purple")}
          className="outline-none px-4 text-violet-100 rounded"
          style={{backgroundColor: "purple"}}
          >purple
          </button>
          <button
          onClick={()=> setColor("grey")}
          className="outline-none px-4 text-violet-100 rounded"
          style={{backgroundColor: "grey"}}
          >grey
          </button>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
