import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AllServices from './Pages/AllServices/AllServices';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import ServiceProvider from './context/ServiceProvider';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

function App() {

  return (
    <ServiceProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<AllServices />} />
          <Route path='/service/:serviceId' element={<ServiceDetails />} />
          <Route path='/blog' element={<AllBlogs />} />
          <Route path='/blog/:blogId' element={<BlogDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ServiceProvider>
  );
}

export default App;
