import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Header from "./components/Header";
import './App.css'
import HeroBox from "./components/Hero";
import StoreSum from "./components/StoreSum";
import StoreImg from "./components/StoreImages";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

ReactGA.initialize('G-JDSQ81CLFF');

export default function App() {
  useEffect(() => {
    // Trigger a pageview event on each page render
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
  <ChakraProvider>
  <div className="main-content">
    <div className="landing">
      <div className="header">
        <Header />
      </div>
      <div className="hero">
        <HeroBox />
      </div>
    </div>
    <div className="summary">
      <StoreSum />
    </div>
    <div className="storeimg">
      <StoreImg />
    </div>
    <div className="footer">
    <Footer />
    </div>
  </div>
  </ChakraProvider>
  )
}