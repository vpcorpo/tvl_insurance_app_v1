import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TravelContent from './pages/TravelContent';
import ContactUs from './pages/ContactUs';
import EmergencyAssistance from './pages/EmergencyAssistance';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel-content" element={<TravelContent />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/emergency-assistance" element={<EmergencyAssistance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
