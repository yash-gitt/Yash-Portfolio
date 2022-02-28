import React, { useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Education from './pages/Education';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick =()=>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
            <NavBar/>
        </div>
        <div className="nav-class" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
            <div className="content">
              <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/education" element={<Education/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/contact" element={<Contact/>} />
              </Routes>
            </div>
        </div>
    </div>
  )
}


export default App;