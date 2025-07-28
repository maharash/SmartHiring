import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">SmartHire</div>
      <div>
        <button className="btn-light" onClick={() => navigate("/hr-login")}>
          HR Login
        </button>
        <button className="btn-outline" onClick={() => navigate("/candidate-login")}>
          Candidate Login
        </button>
      </div>
    </header>
  );
};

export default Header;
