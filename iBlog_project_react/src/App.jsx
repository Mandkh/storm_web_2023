import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import  Content from './components/Content'
import SideBar from './components/Side-Bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
      {/* <Header />
      <Content />
      <SideBar /> */}
    </div>
  )
}

export default App
