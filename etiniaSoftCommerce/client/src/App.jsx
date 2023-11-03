import { Routes, Route} from 'react-router-dom';
//import { useState } from 'react';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import UserDetail from './components/userDetail/UserDetail';
import PayForm from './pages/payForm/PayForm';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import LogIn from './pages/logIn/LogIn';
import NotFound404 from './pages/404/notFound';
import Favorites from './components/favorites/Favorites';
import Form from './pages/Forms/Form/Form';
import ConfirmTokenForm from './pages/logIn/ConfirmTokenForm';
import RegisterForm from './pages/logIn/registerForm';



function App() {

  return (
    <div className="body-container">
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/product/:id' element={<ProductDetail />} />
      <Route exact path='/user' element={<LogIn />} />
      <Route exact path='/user/:id' element={<UserDetail />}/>
      <Route exact path='/payform' element={<PayForm />}/>
      <Route exact path='/carrito' element={<ShoppingCart />} /> 
      <Route exact path='favorites' element={<Favorites/>} />  
      <Route exact path='/Form' element={<Form/>}/>
      <Route exact path='/RegisterForm' element={<RegisterForm/>}/>
      <Route exact path='/ConfirmTokenForm' element={<ConfirmTokenForm/>}/>


      <Route exact path='*' element={<NotFound404/>}/>
    </Routes>
   </div>
  )
}

export default App
