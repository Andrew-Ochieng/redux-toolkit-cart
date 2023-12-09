import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Cart from './pages/cart'
import './styles/index.scss'
import UseFetch from './components/useFetch'


const App = () => {
  const { data: products, loading } = UseFetch('https://fakestoreapi.com/products')
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home products={products} loading={loading}/>} />
          <Route path="/cart" element={<Cart products={products} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App