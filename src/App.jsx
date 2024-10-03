import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
// import SwapBtc from "./components/SwapBtc";
// import BuyHawala from "./components/BuyHawala";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {" "}
      {/* Make sure Router wraps all routes and components */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/buyhawala" element={<BuyHawala />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
