import './App.css'
import AxiosDelleteOne from './components/axiosDelleteOne'

import AxiosGetAllData from './components/axiosGetAll'
import AxiosGetOne from './components/axiosGetOne'
import AxiosPostOne from './components/axiosPostOne'
import AxiosUpdateOne from './components/axiosUpdateOne'

function App() {
  

  return (
    <>      
      <h1>Prod app</h1>
        <section>
        <AxiosGetAllData/>
        </section>
        <section>
          <AxiosGetOne/>
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
    </>
  )
}

export default App
