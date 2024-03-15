import React from 'react';
import './App.css';
import Login from './components/login'; 
import Register from './components/register';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
       <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/nav' element={<Navbar/>}/>
          </Routes>
        </BrowserRouter>
       </div>
    )
}

export default App