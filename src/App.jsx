import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Discussions from './pages/discussions';
import Write from './pages/write';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Discussions' element={<Discussions />}></Route>
          <Route path='/Write' element={<Write />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App