import { Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/home/Home'
import ProductDetail from './pages/productDetail/ProductDetail'
import Landing from './pages/landing/Landing';
import UserDetail from './pages/userDetail/UserDetail';
import PayForm from './pages/payForm/PayForm';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body-container">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/user/:id' element={<UserDetail />}/>
      <Route path='/payform' element={<PayForm />}/>
    </Routes>
</div>
  )
}

export default App
