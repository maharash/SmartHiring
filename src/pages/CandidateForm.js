import React, { useState } from "react";
import '../App.css';

const CandidateForm = () => {
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, education, skills, jobRole, resume });
    alert('✅ Profile submitted successfully');
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Candidate Profile Form</h2>
      <form onSubmit={handleSubmit} className="candidate-form">
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Education</label>
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          required
        />

        <label>Skills (comma separated)</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />

        <label>Job Role</label>
        <input
          type="text"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          required
        />

        <label>Upload Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          required
        />

        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CandidateForm;
