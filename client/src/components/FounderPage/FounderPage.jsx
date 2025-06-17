import React from 'react';
import './FounderPage.css';

function FounderPage() {
  return (
    <div className="founder-wrapper">
      <div className="founder-container">
        <div className="founder-content">
          <h2>Meet Our Founder</h2>
          <h3>Rajan Makker</h3>
          <p>
            Rajan Makker, the visionary founder of our organization, has always believed in empowering
            communities through education and innovation. His commitment and leadership continue to
            drive our mission forward.
          </p>
          <blockquote>
            "Empowering minds and building futures — one step at a time."
          </blockquote>
        </div>
        <div className="founder-image">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Founder Rajan Makker"
          />
        </div>
      </div>
    </div>
  );
}

export default FounderPage;
