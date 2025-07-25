import React, { useState, useEffect } from 'react';
import ElegantLoader from './components/loaders/ElegantLoader';
import HomePage from './pages/HomePage';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <ElegantLoader />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {!loading && <HomePage />}
      </div>
    </>
  );
}