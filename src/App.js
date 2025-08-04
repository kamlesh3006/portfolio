import { React, useState, useEffect } from 'react';
import ElegantLoader from './components/loaders/ElegantLoader';
import HomePage from './pages/HomePage';
import './App.css'; 

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Wait for everything to load, then start animations
      setLoading(false);
      setTimeout(() => setShowContent(true), 100); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {/* The preloader remains the same */}
      {loading && <ElegantLoader />}

      {/* Curtain Overlays */}
      {!loading && (
        <>
          <div className="curtain left"></div>
          <div className="curtain right"></div>
        </>
      )}

      {/* Your main content with its fade-in effect */}
      <div className={showContent ? 'content-fade-in' : 'content-hidden'}>
        <HomePage />
      </div>
    </>
  );
}