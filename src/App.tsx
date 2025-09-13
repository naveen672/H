import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Colleges from './pages/Colleges';
import SchoolDetail from './pages/SchoolDetail';
import KyathanahalliDetail from './pages/KyathanahalliDetail';
import AgaraMamballiDetail from './pages/AgaraMamballiDetail';
import KagalvadiDetail from './pages/KagalvadiDetail';
import TalakaduDetail from './pages/TalakaduDetail';
import ThayuruDetail from './pages/ThayuruDetail';
import Contact from './pages/Contact';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/school-detail" element={<SchoolDetail />} />
            <Route path="/kyathanahalli-detail" element={<KyathanahalliDetail />} />
            <Route path="/agara-mamballi-detail" element={<AgaraMamballiDetail />} />
            <Route path="/kagalvadi-detail" element={<KagalvadiDetail />} />
            <Route path="/talakadu-detail" element={<TalakaduDetail />} />
            <Route path="/thayuru-detail" element={<ThayuruDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;