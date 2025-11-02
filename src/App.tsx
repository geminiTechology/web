import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import BotProtection from './components/BotProtection';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { checkRefreshLimit } from './utils/botProtection';
import './App.css';

function App() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const protectionCheck = checkRefreshLimit();
    setIsBlocked(!protectionCheck.allowed);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <BotProtection />
          {!isBlocked && (
            <>
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
