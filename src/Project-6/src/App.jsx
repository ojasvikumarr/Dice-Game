import { useState } from 'react'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import "@fontsource/ubuntu";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
