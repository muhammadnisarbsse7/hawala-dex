import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { TonIcon } from "./SVG/TonIcon";
import { Wallet } from "ethers";
import WalletConnect from "./components/Wallet";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    // Simulate a delay to show the spinner (you can replace it with actual API calls or async logic)
    setTimeout(() => {
      setLoading(false); // Set loading to false after the app has loaded
    }, 2000);
  }, []);

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen dark:bg-[#0D1421] ${
          darkMode ? "dark" : ""
        }`}
      >
        {loading ? (
          // Spinner loader
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#FF3389]">
              {/* <TonIcon /> */}
            </div>
          </div>
        ) : (
          // Content to show when app has finished loading
          <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
              </Routes>
            </div>
            <Footer />
            {/* <Wallet/> */}
            {/* <WalletConnect /> */}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
