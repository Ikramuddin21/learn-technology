import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import data from './temp/data.json';
import AllServices from './components/AllServices/AllServices';
import Cart from './components/Cart/Cart';

export const ServicesContext = createContext({});

function App() {

  const [cart, setCart] = useState([]);

  return (
    <ServicesContext.Provider value={{services: data.services, carts: [cart, setCart]}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<AllServices />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/contact' element={<About />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ServicesContext.Provider>
  );
}

export default App;
