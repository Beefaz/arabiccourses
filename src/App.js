import React from 'react';
import Navbar from './components/navbar/Navbar';

//import './App.css';

const App() {
    const navbarStyle = {
        height: '510px',
        position: 'sticky',
        backgroundImage: `url(${require("../../res/img/desert.jpg")})`,
        backgroundPosition: 'center'
    };
  return (
      <div style={navbarStyle}>
        <Navbar/>
      </div>
  );
}

export default App;
