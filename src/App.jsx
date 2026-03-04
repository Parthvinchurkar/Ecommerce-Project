import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from "./components/ProtectedRoute"
import OrderSuccess from "./pages/OrderSuccess"
import Login from "./pages/Login"
import Wishlist from "./pages/Wishlist"
import Orders from "./pages/Orders"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout"element={<ProtectedRoute><Checkout /></ProtectedRoute> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/wishlist" element={<Wishlist />} />
<Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App