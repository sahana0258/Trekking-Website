import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Destination from './Components/Destination.jsx'
import Contact from './Components/Contact.jsx'

import Kudremukh from "./Pages/Kudremukh.jsx";
import Bandaje from './Pages/Bandaje.jsx';
import KumaraParvatha from './Pages/KumaraParvatha.jsx';
import Natravati from './Pages/Netravati.jsx';
import Kodachadri from './Pages/Kodachadri.jsx';
import Tadiandamol from './Pages/Tadiandamol.jsx';





function App() {
  return (
    <>

    <Router>
      <Routes>
       
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/kudremukh" element={<Kudremukh/>}></Route> 
        <Route path="/bandaje" element={<Bandaje/>}></Route>
        <Route path="/kumaraparvatha" element={<KumaraParvatha/>}></Route>
        <Route path="/netravati" element={<Natravati/>}></Route>
        <Route path="/kodachadri" element={<Kodachadri/>}></Route>
        <Route path="/tadiandamol" element={<Tadiandamol/>}></Route>   
      </Routes>
    </Router>
  </>
    
  );
}
export default App;