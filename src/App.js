import './App.css';
import Navbar from './comonents/Navbar';
import Menu from './comonents/Menu';
import About from './comonents/About';
import Home from './comonents/Home';
import Contact from './comonents/Contact';
import { Routes, Route } from 'react-router-dom'
import Login from './comonents/Login';
import Sign from './comonents/Sign';
import Services from './comonents/Services';
import Item from './comonents/Item';


function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/I' element={<Item />} />
        <Route path='/S' element={<Services />} />
      </Routes>

    </>
  );
}

export default App;
