import React from "react";
import Header from "./components/Header";
import './App.css'
import HeroBox from "./components/Hero";
import StoreSum from "./components/StoreSum";
import StoreImg from "./components/StoreImages";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
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