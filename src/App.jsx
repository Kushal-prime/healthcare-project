import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PreventiveHealthcare from './pages/PreventiveHealthcare';
import CommunityEngagement from './pages/CommunityEngagement';
import ImmediateAssistance from './pages/ImmediateAssistance';
import InformationAwareness from './pages/InformationAwareness';
import AdvancingHealthcare from './pages/AdvancingHealthcare';
import ContactAbout from './pages/ContactAbout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preventive-healthcare" element={<PreventiveHealthcare />} />
            <Route path="/community-engagement" element={<CommunityEngagement />} />
            <Route path="/immediate-assistance" element={<ImmediateAssistance />} />
            <Route path="/information-awareness" element={<InformationAwareness />} />
            <Route path="/advancing-healthcare" element={<AdvancingHealthcare />} />
            <Route path="/contact-about" element={<ContactAbout />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
