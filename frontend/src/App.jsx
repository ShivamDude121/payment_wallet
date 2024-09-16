import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import SendMoney from './pages/sendmoney'
import PageNotFound from './pages/404'





function App() {
  return (
    <>
       <BrowserRouter>
      
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path='/error' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
