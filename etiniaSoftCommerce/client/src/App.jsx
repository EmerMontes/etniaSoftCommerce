import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import ProductDetail from './pages/productDetail/ProductDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body-container">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:id" element={<ProductDetail />} />
      <Route path="/create" element={<Create />} />
    </Routes>
</div>
  )
}

export default App
