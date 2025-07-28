import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="grid">
        <div className="testimonial">
          <p>SmartHire has revolutionized our hiring. Faster and better!</p>
          <h4>Sarah Johnson</h4>
          <small>HR Director, TechCorp</small>
        </div>
        <div className="testimonial">
          <p>Very simple to apply and update my resume anytime.</p>
          <h4>Michael Chen</h4>
          <small>Software Developer</small>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
