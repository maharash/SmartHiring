import React, { useState } from "react";
import "../App.css";

const HrForm = () => {
  const [requirement, setRequirement] = useState('');
  const [experience, setExperience] = useState('');
  const [showResults, setShowResults] = useState(false);

  const dummyCandidates = [
    {
      name: "Vishal Patil",
      education: "BE Computer",
      skills: "React, Node.js",
      jobRole: "Frontend Developer",
      experience: "Fresher"
    },
    {
      name: "Amit Singh",
      education: "B.Tech IT",
      skills: "Java, Spring Boot",
      jobRole: "Backend Developer",
      experience: "2 years"
    },
    {
      name: "Sneha Desai",
      education: "MCA",
      skills: "Python, Django",
      jobRole: "Full Stack Developer",
      experience: "1 year"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const filteredCandidates = dummyCandidates.filter(
    (candidate) =>
      candidate.jobRole.toLowerCase().includes(requirement.toLowerCase()) &&
      candidate.experience.toLowerCase().includes(experience.toLowerCase())
  );

  return (
    <div className="form-container" style={{
      maxWidth: "600px",
      margin: "50px auto",
      padding: "30px",
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      animation: "fadeInUp 0.6s ease-in-out"
    }}>
      <h2 style={{ textAlign: "center", color: "#4f46e5", marginBottom: "25px" }}>
        🧑‍💼 HR Requirement Form
      </h2>

      <form onSubmit={handleSubmit} className="hr-form" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="📋 Requirement (e.g. Frontend Developer)"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="styled-input"
          required
        />
        <input
          type="text"
          placeholder="⏳ Experience (e.g. Fresher or 2+ years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="styled-input"
          required
        />
        <button type="submit" className="btn-primary">
          🔍 Search Candidates
        </button>
      </form>

      {showResults && (
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ textAlign: "center", color: "#10b981", marginBottom: "20px" }}>
            🎯 Matching Candidates
          </h3>
          {filteredCandidates.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {filteredCandidates.map((candidate, index) => (
                <li key={index} style={{
                  padding: "18px 20px",
                  borderRadius: "12px",
                  background: "#f9fafb",
                  marginBottom: "16px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                  borderLeft: "5px solid #7c3aed"
                }}>
                  <h4 style={{ marginBottom: "8px", color: "#4f46e5" }}>{candidate.name}</h4>
                  <p><strong>🎓 Education:</strong> {candidate.education}</p>
                  <p><strong>🧠 Skills:</strong> {candidate.skills}</p>
                  <p><strong>💼 Role:</strong> {candidate.jobRole}</p>
                  <p><strong>📅 Experience:</strong> {candidate.experience}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ textAlign: "center", color: "#999" }}>No candidates match the given criteria.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HrForm;
