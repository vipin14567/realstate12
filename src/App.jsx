import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import House from './pages/House';
import SignUp from './components/SignUp';
import AboutData from './pages/AboutData';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <div className='w-full overflow-hidden '>
      <ToastContainer/>
      <div className='bg-gray-500'>
      <Navbar/>
      </div>
      
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path= '/house' element={<House />} />
        <Route path='signup&login' element={<SignUp />} />
        <Route path='aboutdata' element ={<AboutData />}/>
      </Routes>
    
    </div>
  )
}

export default App