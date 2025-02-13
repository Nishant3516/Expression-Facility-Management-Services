import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ServicePage from "./pages/ServicePage/ServicePage";
import OffersPage from "./pages/OffersPage/OffersPage";
import ScrollToTop from "./components/ScrollToTop";
import CareerPage from "./pages/Careers/Careers";

function App() {
  // Main
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/service/:serviceId" element={<ServicePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
