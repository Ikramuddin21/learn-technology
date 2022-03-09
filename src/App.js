import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import { createContext, useEffect, useState } from 'react';

export const ServicesContext = createContext({});

function App() {
  const [services, setServices] = useState([]);
  const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    
  return (
    <ServicesContext.Provider value={{useServices: [services, setServices], carts: [cart, setCart]}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          {/* <Route path='/cart' element={<About />} /> */}
          {/* <Route path='/contact' element={<About />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ServicesContext.Provider>
  );
}

export default App;
