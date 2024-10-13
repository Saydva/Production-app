import  { useState } from 'react'
import './App.css'
import AxiosDelleteOne from './components/axiosDelleteOne'
//import AxiosGetAllData from './components/axiosGetAll'
//import AxiosGetOne from './components/axiosGetOne'
import AxiosPostOne from './components/axiosPostOne'
import AxiosUpdateOne from './components/axiosUpdateOne'
import GetAll from './components/buttons and search/getall'
import GetOne from './components/buttons and search/getone'
// v2 app components

import SearchBar from './components/_searchbar'
import ButtonSend from './components/buttons and search/_buttonsearchbar.jsx'

// this line import arr for work with all data

import { animals } from './testingObjects/testObjectArr'
import Workquery from './components/buttons and search/_workquery'

const arr = [];

function App() {
  const [value, setValue] = useState("");
  const [send, setSend ] = useState("")
  const [set, onSet] = useState("")

  const Production = {
    query:arr,
  }

  if (!arr.includes(set) && set !== undefined && set !== null && set !== "")
    arr.push(set)
  
  // arr.push(set)

  return (
    <div className='App'> 
     <h1 className='searchbarh1'>Production app</h1>
      <div className="flexApp">    
        <div className="searchArr">             
          <h3>Set data to send into Production section</h3>
            <SearchBar
              options={animals}
              label="name"
              id="id"
              selectedVal={value}
              handleChange={(val) => setValue(val)}
              OnSend = {setSend}
            />

            <ButtonSend 
              OnSend = {send}
              OnSet={onSet}
              />
        </div>      
        <div className="workspace">
            <Workquery
              data = {Production.query}
              
            />
        </div>
      </div>
    </div>
  )
}

export default App
