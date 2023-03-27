import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import { useState } from 'react';
import React, { Usestate } from 'react';
function App() {
  const [mode, setMode] = useState('light');   //where my app is dark moide or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
    }

  }
  return (
    <>
      <Navbar title="SanBUDDY" home="ADITI " mode={mode} toggleMode={toggleMode} />
      <div className="container my-3 ">
        <Textarea mode={mode}/>
      </div>
    </>
  );
}

export default App;
