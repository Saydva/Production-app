import './App.css'
import FetchData from './components/dataFetch'

function App() {
  

  return (
    <>      
      <h1>Prod app</h1>
      <div className="data">
        <h4>Your data here</h4>
        <FetchData/>
        </div>    
    </>
  )
}

export default App
