import React from "react";

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="grid">
        <div className="card">
          <h3>Role-Based Access</h3>
          <p>Secure login for both HR professionals and candidates with role-specific functionality.</p>
        </div>
        <div className="card">
          <h3>Advanced Search</h3>
          <p>Search by job roles, skills, and experience levels.</p>
        </div>
        <div className="card">
          <h3>Profile Security</h3>
          <p>Lock job roles to ensure data integrity.</p>
        </div>
        <div className="card">
          <h3>Dashboard Analytics</h3>
          <p>Comprehensive dashboards for both HR and candidates.</p>
        </div>
        <div className="card">
          <h3>Responsive Design</h3>
          <p>Looks great on mobile, tablet, and desktop.</p>
        </div>
        <div className="card">
          <h3>Profile Management</h3>
          <p>Easily manage and update user profiles.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
