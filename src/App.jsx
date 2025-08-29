import { useState } from 'react'
import Home from './Pages/Home/Home'
import "./App.css"



function App() {

  const [state, setState] = useState(null);
  return (
    <div className='App'>
      <Home />

    </div>
  )
}

export default App
