import React, { useEffect,useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { ThemeProvider } from 'styled-components';
import { StyledComponentsTheme } from './styledComponents';
import{ThemeContext} from "./context/ThemeContext"


export default function App() {
  const {themeName} = useContext(ThemeContext)
  console.log("themeName: ",themeName)

  return (
    
      <ThemeProvider theme={StyledComponentsTheme[themeName]}>
        {/* ThemeProvider styled-components içerisinden geliyor.. */}
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<UserProfile />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    
  );
}
