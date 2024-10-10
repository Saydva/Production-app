import  { useState } from 'react'
import './App.css'
import AxiosDelleteOne from './components/axiosDelleteOne'
//import AxiosGetAllData from './components/axiosGetAll'
//import AxiosGetOne from './components/axiosGetOne'
import AxiosPostOne from './components/axiosPostOne'
import AxiosUpdateOne from './components/axiosUpdateOne'
import GetAll from './components/buttons and search/getall'
import GetOne from './components/buttons and search/getone'
import SearchBar from './components/searchbar'
import { animals } from './testingObjects/testObjectArr'


function App() {
  const [value, setValue] = useState("Select option...");


  return (
    <>      
      <h1>Prod app</h1>
        <section className='rightside'>
          <section>
        <GetAll/>
        </section>
        
        </section>
        <section className="leftside"><section>
          <GetOne/>
        </section>
        <section>
          <h3>Search new</h3>
          <SearchBar
        options={animals}
        label="name"
        id="id"
        selectedVal={value}
        handleChange={(val) => setValue(val)}
      />
        </section>
        <section>
          <AxiosPostOne/>
        </section>
        <section>
          <AxiosUpdateOne/>
        </section>
         <section>
          <AxiosDelleteOne/>
         </section>
         </section>
        
    </>
  )
}

export default App
