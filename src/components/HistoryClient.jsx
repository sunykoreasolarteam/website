"use client"
import React, { useState } from 'react';
import '../app/history/History.css';

const TimelineNode = ({ year, title, desc, details, isFuture }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`timeline-node ${isFuture ? 'future-node' : ''}`}>
      <div 
        className="timeline-header" 
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="timeline-year-wrapper">
          <h3 className="timeline-year">{year}</h3>
          {!isFuture && (
            <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
          )}
        </div>
        <h4 className="timeline-event">{title}</h4>
      </div>
      
      <p className="timeline-desc">{desc}</p>
      
      {!isFuture && details && (
        <div className={`timeline-details ${isExpanded ? 'expanded' : ''}`}>
          <ul>
            {details.map((item, idx) => (
               <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const HistoryClient = () => {
  return (
    <div className="history-page">
      <div className="container history-container">
        <h1 className="history-title">Our History</h1>
        <p className="history-intro">
          The SUNY Korea Solar Team was founded with the mission of pushing the boundaries of sustainable energy technology through student-led engineering.
        </p>

        <div className="history-timeline-placeholder">
          <TimelineNode 
            year="2025"
            title="Project Inception"
            desc="The initial conceptualization and formation of the team. Gathering of the core engineering leads and establishment of long-term goals."
            details={[
              "Team Formation",
              "Core Leadership Development",
              "Initial Design Concept Definition"
            ]}
          />

          <TimelineNode 
            year="2026"
            title="Project Kickoff"
            desc="The official commencement of the SUNY Korea Solar Team. Beginning of the internal Fusion 360 CAD education program and early conceptual designs."
            details={[
              "Official Club Recognition",
              "Fusion 360 Education Program",
              "Initial Conceptual Modeling",
              "ASME Partnership",
              "ANSYS Sponsorship Procurement"
            ]}
          />
          
          <TimelineNode 
            year="2027 - 2028"
            title="Manufacturing & Testing"
            desc="Finalization of the vehicle design and physical assembly of SAMJOKO-I. Implementation of real-world track testing to validate simulations and perfect race strategy."
            isFuture={true}
          />

          <TimelineNode 
            year="2029"
            title="World Solar Challenge Participation"
            desc="Logistics, shipping, and active competition in the 2029 Bridgestone World Solar Challenge bridging Darwin and Adelaide in Australia."
            isFuture={true}
          />

          <TimelineNode 
            year="Beyond"
            title="Continuous Innovation"
            desc="Participation in future international solar races as future cohorts iterate and improve upon previous generations' designs, building a legacy of sustainable engineering."
            isFuture={true}
          />
        </div>

        <div className="history-cta">
          <p>More detailed milestones, technical breakthroughs, and operational updates will be documented here as the team progresses.</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryClient;
