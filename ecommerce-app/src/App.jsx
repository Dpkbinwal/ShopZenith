import './App.css'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './modules/Main'
import NotFound from './components/NotFound'
import Products from './modules/Products'
import Product from './modules/Product'
import Cart from './modules/Cart'
import Checkout from './modules/Checkout'
import Auth from './modules/Auth'
import Dashboard from './modules/Dashboard'
import AppLayout from './components/AppLayout'
import AddProduct from './modules/AddProduct'
import Register from './modules/Register'
import About from './modules/About'
import Contact from './modules/Contact'

const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    element: <Main />,
  },
  {
    path: '/products',
    key: 'PRODUCTS',
    element: <Products />,
  },
  {
    path: '/products/:id',
    key: 'PRODUCT',
    element: <Product />,
  },
  {
    path: '/cart',
    key: 'CART',
    element: <Cart />,
  },
  {
    path: '/checkout',
    key: 'CHECKOUT',
    element: <Checkout />,
  },
  {
    path: '/login',
    key: 'LOGIN',
    element: <Auth />,
  },
  {
    path: '/register',
    key: 'REGISTER',
    element: <Register/>,
  },
  {
    path: '/about',
    key: 'ABOUT',
    element: <About/>,
  },
  {
    path: '/contact',
    key: 'CONTACT',
    element: <Contact/>,
  },
]


const ProtectedRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : (<Navigate to={'/login'} />)
}

function App() {
  const token = localStorage.getItem('token') || null;

  return (
    <BrowserRouter>
      <Routes>
        {
          ROUTES.map(({ path, key, element }) => (
            <Route path={path} key={key} element={
              <>
                <Navbar />
                {element}
                <Footer />
              </>
            } />
          ))
        }

        <Route
          path='/admin'
          element={
            <>
              {/* <Navigate to={'dashboard'} /> */}
              {/* <Outlet /> */}
              <ProtectedRoute isLoggedIn={token} />
            </>
          }>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
