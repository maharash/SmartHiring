import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HrLogin from "./pages/HrLogin";
import CandidateLogin from "./pages/CandidateLogin";
import CandidateForm from "./pages/CandidateForm";
import HrForm from "./pages/HrForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hr-login" element={<HrLogin />} />
        <Route path="/candidate-login" element={<CandidateLogin />} />
        <Route path="/candidate-form" element={<CandidateForm />} />
        <Route path="/hr-form" element={<HrForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
