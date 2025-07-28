import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>SmartHire</h4>
        <p>A simplified hiring platform designed for modern businesses.</p>
      </div>
      <div>
        <h4>For HR</h4>
        <ul>
          <li>HR Dashboard</li>
          <li>Candidate Search</li>
          <li>Profile Management</li>
          <li>Pricing</li>
          <li>Enterprise Solutions</li>
        </ul>
      </div>
      <div>
        <h4>For Candidates</h4>
        <ul>
          <li>Create Profile</li>
          <li>Update Information</li>
          <li>Resume Management</li>
          <li>Job Search</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>support@smarthire.com</p>
        <p>+1 (555) 123-4567</p>
        <p>123 Business Ave, Suite 500, San Francisco, CA 94107</p>
      </div>
    </footer>
  );
};

export default Footer;
