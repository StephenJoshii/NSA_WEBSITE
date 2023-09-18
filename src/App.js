// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header"
import Events from './Components/Events';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/events' element={<Events/>}/>
      </Routes>
    </Router>
  );
}

export default App;
