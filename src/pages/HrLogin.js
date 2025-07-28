import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const HrLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setError('');
    if (email === "mayurpatil54@gmail.com" && password === "Mayur@123") {
      alert("✅ Login successful as HR");
      localStorage.setItem("role", "hr");
      localStorage.setItem("email", email);
      navigate("/hr-form");
    } else {
      setError("❌ Invalid HR credentials");
    }
  };

  const handleReset = () => {
    setResetSent(true);
  };

  return (
    <div className="login-page">
      {!showReset ? (
        <>
          <h2>HR Login</h2>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn-primary" onClick={handleLogin}>
            Login
          </button>
          <p
            style={{
              textAlign: 'right',
              marginTop: '10px',
              cursor: 'pointer',
              color: '#7c3aed',
              fontWeight: '500',
            }}
            onClick={() => setShowReset(true)}
          >
            Forgot Password?
          </p>
        </>
      ) : (
        <>
          <h2>Reset Password</h2>
          {resetSent ? (
            <p style={{ color: '#10b981', textAlign: 'center' }}>
              ✅ Reset link sent to your email!
            </p>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your HR email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button className="btn-primary" onClick={handleReset}>
                Send Reset Link
              </button>
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '10px',
                  cursor: 'pointer',
                  color: '#9333ea',
                  fontWeight: '500',
                }}
                onClick={() => {
                  setShowReset(false);
                  setResetSent(false);
                }}
              >
                🔙 Back to Login
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HrLogin;
