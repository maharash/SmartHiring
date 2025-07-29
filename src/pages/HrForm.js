import React, { useState } from "react";
import { getAllCandidates } from "../services/dataService";
import "../App.css";

const HrForm = () => {
  const [requirement, setRequirement] = useState("");
  const [experience, setExperience] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [chatWith, setChatWith] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [resumeToView, setResumeToView] = useState(null);
  const [resumeURL, setResumeURL] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const all = getAllCandidates();
    const filtered = all.filter((c) => {
      const roleMatch =
        requirement === "" || c.jobRole?.toLowerCase().includes(requirement.toLowerCase());
      const expMatch =
        experience === "" || c.experience?.toLowerCase().includes(experience.toLowerCase());
      return roleMatch && expMatch;
    });
    setFilteredCandidates(filtered);
  };

  const handleChat = (name) => {
    setChatWith(name);
    setChatMessages([]);
  };

  const handleSendChat = () => {
    if (currentMessage.trim()) {
      setChatMessages((prev) => [...prev, { sender: "HR", text: currentMessage }]);
      setCurrentMessage("");
    }
  };

  const handleViewResume = (url) => {
    setResumeURL(url);
    setResumeToView(true);
  };

  const handleSendMail = (email) => {
    const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(mailLink, "_blank");
  };

  return (
    <div className="hr-main-container" style={{ display: "flex", gap: "30px", alignItems: "flex-start", margin: "40px" }}>
      
      {/* Left Side: Form */}
      <div className="hr-form-section" style={{ flex: "1" }}>
        <h2 className="form-title">HR Requirement Form</h2>

        <form className="hr-form" onSubmit={handleSearch}>
          <div className="input-row" style={{ display: "flex", gap: "15px" }}>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label className="input-label">Requirement</label>
              <input
                type="text"
                placeholder="e.g. React Developer"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="outlined-input"
              />
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label className="input-label">Experience</label>
              <input
                type="text"
                placeholder="e.g. 1 year"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="outlined-input"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary search-btn">🔍 Search</button>
        </form>

        {chatWith && (
          <div className="chatbox-container">
            <h3 className="chat-title">Chat with {chatWith}</h3>
            <div className="chat-messages">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="chat-message">
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input-section">
              <input
                type="text"
                value={currentMessage}
                placeholder="Type your message..."
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="outlined-input"
              />
              <button className="btn-primary" onClick={handleSendChat}>
                ➤
              </button>
            </div>
          </div>
        )}

        {resumeToView && (
          <div className="chatbox-container">
            <h3 className="chat-title">📄 Viewing Resume</h3>
            <iframe
              title="Resume Viewer"
              src={resumeURL}
              style={{ width: "100%", height: "400px", borderRadius: "8px" }}
            />
          </div>
        )}
      </div>

      {/* Right Side: Results */}
      <div className="hr-candidate-section" style={{ flex: "2" }}>
        <h3 style={{ marginBottom: "20px" }}>🧾 Matched Candidates</h3>
        <div className="results-container">
          {filteredCandidates.length === 0 ? (
            <p>🔎 No matching candidates found.</p>
          ) : (
            filteredCandidates.map((candidate, index) => (
              <div className="candidate-card" key={index}>
                <h4>{candidate.name}</h4>
                <p><strong>Education:</strong> {candidate.education}</p>
                <p><strong>Skills:</strong> {candidate.skills}</p>
                <p><strong>Role:</strong> {candidate.jobRole}</p>
                <p><strong>Experience:</strong> {candidate.experience}</p>
                {candidate.resumeURL && (
                  <p>
                    <strong>Resume:</strong>{" "}
                    <button
                      className="btn-outline"
                      onClick={() => handleViewResume(candidate.resumeURL)}
                    >
                      📄 View Resume
                    </button>
                  </p>
                )}
                <div className="action-buttons">
                  <button className="btn-light" onClick={() => handleSendMail(candidate.email)}>
                    ✉️ Send Mail
                  </button>
                  <button className="btn-outline" onClick={() => handleChat(candidate.name)}>
                    💬 Chat
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HrForm;
