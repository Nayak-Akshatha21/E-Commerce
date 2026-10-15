import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './Pages/ProductList'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ProductDetail from './Pages/ProductDetail'
import Footer from './components/Footer'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <div className='min-h-screen bg-gray-900 font-sans'>
          <Navbar/>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App
