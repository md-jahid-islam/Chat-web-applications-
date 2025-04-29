import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Registrations from './Pages/Registrations';
import Login from './Pages/Login';
import VerifyOtp from './Pages/VerifyOtp';
import ChatWeb from './Pages/ChatWeb';
import Forgotten from './Pages/Forgotten';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    < Route path='/' element = {<Registrations/>} />
    < Route path='/Login' element = {<Login/>} />
    < Route path='/VerifyOtp' element = {<VerifyOtp/>} />
    < Route path='/ChatWeb' element = {<ChatWeb/>} />
    < Route path='/Forgotten' element = {<Forgotten/>} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
