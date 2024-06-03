import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Admin } from './pages/Admin';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <footer>

        </footer>
      </div>
    </Router>
  );
}

export default App
