import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Mainbody from './Components/Mainbody/Mainbody'


function App() {
 



  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Mainbody></Mainbody>
      <Footer></Footer>

      <div id="cursor-follower-icon" className="cursor-follower-base"></div>
    </>
  )
}

export default App
