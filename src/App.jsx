import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Registrations from './Pages/Registrations';
import Login from './Pages/Login';
import VerifyOtp from './Pages/VerifyOtp';
import ChatWeb from './Pages/ChatWeb';
import Forgotten from './Pages/Forgotten';
import Group from './Pages/Group';
import Layouts from './Components/Layouts/Layouts';
import LogOut from './Pages/LogOut';
import People from './Pages/People';

 function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layouts/>}>
    < Route path='/ChatWeb' element = {<ChatWeb/>} />
    < Route path='/Registrations' element = {<Registrations/>} />
    < Route path='/Login' element = {<Login/>} />
    < Route path='/VerifyOtp' element = {<VerifyOtp/>} />
    < Route path='/Group' element = {<Group/>} />
    < Route path='/People' element = {<People/>} />
    < Route path='/Forgotten' element = {<Forgotten/>} />
    < Route path='/LogOut' element = {<LogOut/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
 }

 export default App
