import React from 'react';
import Question from '../components/Question';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
