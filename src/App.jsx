import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import NFCdetail from './pages/NFCdetail';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Product from './pages/Product';
import ViewDetail from "./pages/ViewDetail";






function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/Product" element={<Product />} />
             <Route path="/NFCdetail" element={<NFCdetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/view" element={<ViewDetail />} />
            <Route path="/contact" element={<Contact />} />

       


          </Routes>
        </main>
      
      </div>
    </Router>
  );
}

export default App;