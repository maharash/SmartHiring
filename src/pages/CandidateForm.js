import React, { useEffect, useState } from "react";
import { saveCandidate, getAllCandidates, deleteCandidate, updateCandidate } from "../services/dataService";
import "../App.css";

const CandidateForm = () => {
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [experience, setExperience] = useState('');
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
      resumeURL: resumeURL
    };

    if (editIndex !== -1) {
      updateCandidate(editIndex, newCandidate);
      setEditIndex(-1);
    } else {
      saveCandidate(newCandidate);
    }

    setCandidates(getAllCandidates());

    setName('');
    setEducation('');
    setSkills('');
    setJobRole('');
    setExperience('');
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
    setResume(null); // resume can't be loaded back in file input
    setEditIndex(index);
  };

  return (
    <div className="main-container">
      <div className="form-wrapper">
        <h2 className="form-title">Candidate Profile Form</h2>
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

          <button type="submit" className="btn-primary">{editIndex !== -1 ? "Update" : "Submit"}</button>
        </form>
      </div>

      <div className="results-container">
        <h3>🧾 Submitted Candidates</h3>
        {candidates.length === 0 ? (
          <p>No candidate submitted yet.</p>
        ) : (
          candidates.map((candidate, index) => (
            <div className="candidate-card" key={index}>
              <h4>{candidate.name}</h4>
              <p><strong>Education:</strong> {candidate.education}</p>
              <p><strong>Skills:</strong> {candidate.skills}</p>
              <p><strong>Role:</strong> {candidate.jobRole}</p>
              <p><strong>Experience:</strong> {candidate.experience}</p>
              {candidate.resumeName && (
                <p><strong>Resume:</strong> <a href={candidate.resumeURL} target="_blank" rel="noreferrer">View</a></p>
              )}
              <div className="action-buttons">
                <button className="btn-outline" onClick={() => handleEdit(index)}>✏️ Edit</button>
                <button className="btn-light" onClick={() => handleDelete(index)}>🗑 Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CandidateForm;
