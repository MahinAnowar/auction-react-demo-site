import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Mainbody from './Components/Mainbody/Mainbody'
import { ToastContainer } from 'react-toastify'; // 1. Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // 2. Import the CSS


function App() {
 



  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Mainbody></Mainbody>
      <Footer></Footer>

      <div id="cursor-follower-icon" className="cursor-follower-base"></div>
      <ToastContainer
        position="top-right" // Position toasts in the top-right corner
        autoClose={3000} // Auto close after 3 seconds (3000ms)
        hideProgressBar={false} // Show the progress bar
        newestOnTop={false}
        closeOnClick // Close toast when clicked (optional)
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover // Pause timer when hovered
        theme="light" // Or "dark" or "colored"
        // progressStyle={{ background: 'linear-gradient(to right, lightgreen, cyan, hotpink)' }} // Example gradient - adjust as needed!
      />
    </>
  )
}

export default App
