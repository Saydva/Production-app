import './App.css'
import AxiosDelleteOne from './components/axiosDelleteOne'
//import AxiosGetAllData from './components/axiosGetAll'
//import AxiosGetOne from './components/axiosGetOne'
import AxiosPostOne from './components/axiosPostOne'
import AxiosUpdateOne from './components/axiosUpdateOne'
import GetAll from './components/buttons and search/getall'
import GetOne from './components/buttons and search/getone'

function App() {
  

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
