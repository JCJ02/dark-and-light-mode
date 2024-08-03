import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {  
  const [theme, setTheme] = useState(false);
  const setMode = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    document.title = "Switch Mode Application";
  }, [])
  return (
    <div
      className={`${theme && "dark"}`}
    >
      <Home switchMode={setMode}/>
      <Footer />
    </div>
  );
};

export default App;