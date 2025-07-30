import React, { useEffect, useState } from "react";
import {
  saveCandidate,
  getAllCandidates,
  deleteCandidate,
  updateCandidate,
} from "../services/dataService";
import "../App.css";


const CandidateForm = () => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const stored = getAllCandidates();
    setCandidates(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let resumeURL = "";
    if (resume) {
      resumeURL = URL.createObjectURL(resume);
    }

    const newCandidate = {
      name,
      education,
      skills,
      jobRole,
      experience,
      resumeName: resume?.name || "",
      resumeURL,
    };

    if (editIndex !== -1) {
      updateCandidate(editIndex, newCandidate);
      setEditIndex(-1);
    } else {
      saveCandidate(newCandidate);
    }

    setCandidates(getAllCandidates());
    setName("");
    setEducation("");
    setSkills("");
    setJobRole("");
    setExperience("");
    setResume(null);
    alert("✅ Candidate saved successfully");
  };

  const handleDelete = (index) => {
    deleteCandidate(index);
    setCandidates(getAllCandidates());
  };

  const handleEdit = (index) => {
    const c = candidates[index];
    setName(c.name);
    setEducation(c.education);
    setSkills(c.skills);
    setJobRole(c.jobRole);
    setExperience(c.experience);
    setResume(null);
    setEditIndex(index);
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      padding: "2rem",
      gap: "2rem",
      flexWrap: "wrap"
    }}>
      {/* Left: Form */}
      <div style={{
        flex: "1",
        minWidth: "300px",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h2>📝 Candidate Profile Form</h2>
        <form onSubmit={handleSubmit} className="candidate-form">
          <label>Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Education</label>
          <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} required />

          <label>Skills (comma separated)</label>
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} required />

          <label>Job Role</label>
          <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} required />

          <label>Experience</label>
          <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} required />

          <label>Upload Resume</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />

          <button type="submit" className="btn-primary" style={{ marginTop: "10px" }}>
            {editIndex !== -1 ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* Right: Submitted Candidates */}
      <div style={{
        flex: "1",
        minWidth: "300px",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>

        <h2>🧾 Submitted Candidates</h2>
        {candidates.length === 0 ? (
          <p>No candidates submitted yet.</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {candidates.map((candidate, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 200px",
                  background: "linear-gradient(135deg, #a377c7ff, #eeedefff)",
                  padding: "1.5rem",
                  borderRadius: "16px",
                  border: "none",
                  //boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  color: "#fff",
                  transition: "0.3s ease, box-shadow 0.3s ease",
                  transform: "translateY(0)",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
                  borderleft: "5px solid #10b981;"

                }}

              >
                <h4>{candidate.name}</h4>
                <p><strong>Education:</strong> {candidate.education}</p>
                <p><strong>Skills:</strong> {candidate.skills}</p>
                <p><strong>Role:</strong> {candidate.jobRole}</p>
                <p><strong>Experience:</strong> {candidate.experience}</p>
                {candidate.resumeName && (
                  <p><strong>Resume:</strong> <a href={candidate.resumeURL} target="_blank" rel="noreferrer">View</a></p>
                )}
                <div style={{ marginTop: "10px" }}>
                  <button onClick={() => handleEdit(index)} style={{ marginRight: "10px" }}>
                    ✏️ Edit
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    🗑 Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateForm;
