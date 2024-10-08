import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ServiceProvider from './components/ServiceProvider/ServiceProvider';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/contact"  element={<Contact />} />
      <Route path="/service-provider"  element={<ServiceProvider />} />
      <Route path="/partners" element={<Partners />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
