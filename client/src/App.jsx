import { useState } from "react"
import "./App.css"

function App() {
  const[button , SetButton] = useState(false)


let buttonState = (event)=>{
  event.preventDefault()
  SetButton(value => !value)
console.log(event.target.value);
}

  return(
    <form action="">
      <h1>Build data page</h1>
      <h4>Piece build</h4>
      <label htmlFor="name">Name</label>
      <input id= "name" type="text" />
      <label htmlFor="Standart time">Standart time</label>
      <input id="Standart time" type="text" />
      <label htmlFor="PartOfPiece">Part Of Piece</label><button id="PartOfPiece" >Par of piece</button>
      <label htmlFor="Piece"></label>
      <button id="Piece" value={button} onClick={buttonState}>Elem. piece</button>
    </form>
  )
}

export default App
