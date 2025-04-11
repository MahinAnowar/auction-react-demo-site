import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Mainbody from './Components/Mainbody/Mainbody'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


function App() {
 



  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Mainbody></Mainbody>
      <Footer></Footer>

      <div id="cursor-follower-icon" className="cursor-follower-base"></div>
      <ToastContainer
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick 
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
        theme="light" 
      />
    </>
  )
}

export default App
