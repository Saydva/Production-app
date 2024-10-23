import { useState } from "react"
import "./App.css"

function App() {
  const [set , Setset] = useState();
  const [text , setText] = useState("No data sendet")
  const [matarray, setmatarray ] = useState([])
  const [catarray, setcatarray] = useState([])
  const[message, setMessage] = useState("Send data");
  const [buildObj, setbuildObj] = useState({
    name:"No Name",
    stTime:"No Time",
    basicPart:null,
    category:"No category",
    material:"No materials",
    })

  let classesY ;
  let classesN ;
  let validation;

  let redClass = "red";
  let greenClass= "green";
  let error = "error"  

  

  let pSet = ()=>{    
    Setset(set => !set)      
    }

let result ;

    if (set == true){
      result = "Basic Part"
    } else if(set == false){
      result = "Not !! Basic Part"
    } else {
      result = "Please choise"
    }

    if(buildObj.basicPart == null){
      classesN="";
      classesN="";
    }
    if(set == true){
      classesY = greenClass;
      classesN = "";
    } 
    if (set == false){
      classesY = "";
      classesN = redClass;
    }

  let setObjName = (event)=>{  
    buildObj.name = event.target.value
    }
  
  let setObjStTime = (event)=>{  
   buildObj.stTime = event.target.value
   }

    let saveObj = (event)=>{
      buildObj.basicPart = set;    
    event.preventDefault();    
    setText(
    <div>
      <p>{result}</p>
      <p>{buildObj.name}</p>
      <p>{buildObj.stTime}</p>
      <p>{buildObj.category}</p>
      <p>{buildObj.material}</p>
    </div>)
  }

  let materialPush = (event)=>{
    event.preventDefault();
    matarray.push("new material");
    console.log(matarray);
    setmatarray(matarray)
    buildObj.material = matarray;
    saveObj(event);
  }

  let catpush = (event)=>{
    event.preventDefault();
    catarray.push("new cat");
    setcatarray(catarray)
    console.log(catarray);
    buildObj.category = catarray;
    saveObj(event);
  }

  

let confirm =(event)=>{
  event.preventDefault();
  if(buildObj.name == "No Name" || buildObj.stTime == "No time" || buildObj.basicPart == null){
    setMessage (<><div>Please enter name, stTime </div><div> and choise Basic Part</div></>)
    console.log(message.length);
  } else {
  setMessage("You sendet a data")
  setbuildObj(buildObj)
  console.log(buildObj);}
}
  
  if (message.length != 9){validation = error}
   
console.log(buildObj);

 return(
 <div className="title">
  <h1>Build data page</h1>
  <div className="container">
    <div className="formContainer">
      <form action="">        
        <h4>Piece build</h4>
        <p className="question">Is it a basic part?</p>      
        <div className="line">
          <p className={classesY} onClick={pSet}>Yes</p>
          <p className={classesN} onClick={pSet}>No</p>
        </div>
        <label htmlFor="name">Name</label>
        <input id= "name" type="text" onChange={setObjName} />
        <label htmlFor="Standart time">Standart time</label>
        <input id="Standart time" type="text" onChange={setObjStTime}/>        
        <button onClick={saveObj}>Save data</button>
        <label htmlFor="category">category</label>
        <input id="category" type="text" /> <button onClick={catpush}>Send category</button>
        <label htmlFor="materials">materials</label>
        <input id="materials" type="text" />
        <button onClick={materialPush}>Send materials</button>
      </form>
    </div>
    <div className="objPrew">
      <h4>Prewiev data</h4>
      <div className="obj">{text}</div>
      <button onClick={confirm}>Confirm data</button>
      <div className={validation}>{message}</div>
    </div>
  </div>
  </div>
  )
}

export default App
