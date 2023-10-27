import { Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/home/Home'

import ProductDetail from './pages/productDetail/ProductDetail';
import Landing from './pages/landing/Landing';
import UserDetail from './components/userDetail/UserDetail';
import PayForm from './pages/payForm/PayForm';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import LogIn from './pages/logIn/LogIn';
import NotFound404 from './pages/404/notFound';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body-container">
    <Routes>

      <Route exact path="/" element={<LogIn />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/product/:id" element={<ProductDetail />} />
      <Route exact path='/user/:id' element={<UserDetail />}/>
      <Route exact path='/payform' element={<PayForm />}/>
      <Route exact path="/carrito" element={<ShoppingCart />} />   
     <Route exact path="*" element={<NotFound404/>}/>


    </Routes>
</div>
  )
}

export default App
