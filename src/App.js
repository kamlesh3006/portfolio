import { React, useState, useEffect } from 'react';
import ElegantLoader from './components/loaders/ElegantLoader';
import HomePage from './pages/HomePage';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* The static noise div has been removed. */}
      {loading ? <ElegantLoader /> : <HomePage />}
    </>
  );
}
