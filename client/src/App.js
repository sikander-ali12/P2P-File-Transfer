import React, { useState } from 'react';
import './App.css';
import Mfooter from './components/Mfooter';
import MyHeader from './components/MyHeader';
import MyBody from './components/MyBody';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <MyHeader toggleTheme={toggleTheme} darkMode={darkMode} />
      <MyBody />
      <Mfooter />
    </div>
  );
}

export default App;
