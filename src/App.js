import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './components/Course/Course';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/courses' element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
