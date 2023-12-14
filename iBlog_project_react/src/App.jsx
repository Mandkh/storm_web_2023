import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Sidebar from './components/sideBar'
import Header from './components/Header'
import  Content from './components/Content'
import card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <card />
      <Home />
      <Header />
      <Content />
      <Sidebar />
    </div>
  )
}

export default App
