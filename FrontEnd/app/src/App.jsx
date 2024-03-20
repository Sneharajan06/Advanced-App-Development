import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from '../Components/login'
import Register from '../Components/register'
import Navbar from '../Components/Navbar'
import Homepage from '../Components/homepage'
import Products from '../Components/Products'
import Watch from '../Components/Watch'
import Sidebar from '../Components/Sidebar'
import Data from '../Components/Data'
import Customize from '../Components/Customize'
import Profile from '../Components/Profile'
import Cart from '../Components/Cart'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reg" element={<Register/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="/side" element={<Sidebar/>}/>
        <Route path='/data' element={<Data/>} />
        <Route path='/cus' element={<Customize/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
        

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App