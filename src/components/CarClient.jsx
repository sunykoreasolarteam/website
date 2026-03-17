"use client"
import React, { useEffect, useState, useRef } from 'react';
import '../app/car/Car.css';

const TOTAL_FRAMES = 36;

const CarClient = ({ imagePaths }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const scrollTrackRef = useRef(null);

  const [introOpacity, setIntroOpacity] = useState(1);
  const [carOverlayOpacity, setCarOverlayOpacity] = useState(0.85);
  const [samjokoOpacity, setSamjokoOpacity] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const onImageReady = () => {
      loadedCount += 1;
      if (loadedCount === TOTAL_FRAMES) {
        setImagesPreloaded(true);
      }
    };
    imagePaths.forEach((src) => {
      if (!src) {
        onImageReady();
        return;
      }
      const img = new Image();
      img.src = src;
      img.onload = onImageReady;
      img.onerror = onImageReady;
    });
  }, [imagePaths]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && scrollTrackRef.current) {
        window.requestAnimationFrame(() => {
          const track = scrollTrackRef.current;
          if (!track) { ticking = false; return; }

          const rect = track.getBoundingClientRect();
          const distInView = -rect.top;
          const maxScroll = rect.height - window.innerHeight;

          if (maxScroll <= 0) { ticking = false; return; }

          if (distInView >= 0 && distInView <= maxScroll) {
            const scrollFraction = distInView / maxScroll;

            const phase1Progress = Math.min(scrollFraction / 0.15, 1);
            setIntroOpacity(Math.max(1 - phase1Progress * 1.5, 0));
            setCarOverlayOpacity(Math.max(0.85 - phase1Progress * 0.85, 0));

            const phase2Progress = Math.min(Math.max((scrollFraction - 0.15) / 0.50, 0), 1);
            const logicalFrameIndex = Math.min(
              TOTAL_FRAMES,
              Math.max(0, Math.floor(phase2Progress * (TOTAL_FRAMES + 1)))
            );
            const frameIndex = logicalFrameIndex === TOTAL_FRAMES ? 0 : logicalFrameIndex;
            setCurrentFrame(frameIndex);

            const phase3Progress = Math.min(Math.max((scrollFraction - 0.65) / 0.15, 0), 1);
            setSamjokoOpacity(phase3Progress);

          } else if (distInView < 0) {
            setCurrentFrame(0);
            setIntroOpacity(1);
            setCarOverlayOpacity(0.85);
            setSamjokoOpacity(0);
          } else {
            setCurrentFrame(0);
            setIntroOpacity(0);
            setCarOverlayOpacity(0);
            setSamjokoOpacity(1);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="car-page">
      <section className="turntable-section" ref={scrollTrackRef}>
        <div className="sticky-viewer">
          {imagesPreloaded ? (
            <div className="car-image-wrapper">
              <img
                src={imagePaths[currentFrame]}
                alt={`Car Render Frame ${currentFrame}`}
                className="turntable-image"
              />
              <div
                className="car-image-overlay"
                style={{ backgroundColor: `rgba(10, 10, 10, ${carOverlayOpacity})` }}
              ></div>
            </div>
          ) : (
            <div className="loading-placeholder">
              <span className="loading-text">Loading 3D Render...</span>
            </div>
          )}

          <div
            className="turntable-intro-text"
            style={{ opacity: introOpacity, pointerEvents: introOpacity > 0 ? 'auto' : 'none' }}
          >
            <h1 className="car-page-title">The Car</h1>
            <p className="car-page-intro">
              We are developing a high-efficiency solar race vehicle concept, built as part of a long-term effort toward the World Solar Challenge.
            </p>
          </div>

          <div
            className="turntable-name-text"
            style={{ opacity: samjokoOpacity }}
          >
            <h2 className="car-model-name">SAMJOKO - I</h2>
            <p className="car-model-desc">
              Samjoko-I is the first solar racing vehicle currently under development by the SUNY Korea Solar Team. Named after the Samjok-o, the mythical three-legged crow said to reside in the sun, it represents the team’s pursuit of solar-powered innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="car-details-section container">
        <h2 className="section-title text-center mb-space">Goals for the Car</h2>
        <div className="goals-grid mb-large">
          <div className="goal-card">
            <h3 className="goal-title">Aerodynamic Efficiency</h3>
            <p className="goal-desc">The vehicle is being developed with a strong emphasis on reducing drag and improving overall energy efficiency at race speeds.</p>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Lightweight Construction</h3>
            <p className="goal-desc">A key goal is to create a lightweight structure that balances performance, strength, and durability.</p>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Energy Management</h3>
            <p className="goal-desc">The car is intended to maximize the effective use of solar input, battery storage, and drivetrain efficiency.</p>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Reliability and Safety</h3>
            <p className="goal-desc">The vehicle must be designed not only for performance, but also for stability, safety, and long-distance endurance.</p>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">System Integration</h3>
            <p className="goal-desc">The project brings together mechanical, electrical, aerodynamic, and software systems into one cohesive race vehicle platform.</p>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Competition Readiness</h3>
            <p className="goal-desc">The long-term objective is to develop a car capable of competing in international solar racing events, including the Bridgestone World Solar Challenge.</p>
          </div>
        </div>
        <div className="development-approach-section text-center">
          <h2 className="section-title">Development Approach</h2>
          <p className="approach-text">
            Our vehicle will evolve continuously through rigorous stages of concept development, advanced computational simulation, physical prototyping, and track testing. This deliberate approach ensures technical integrity before the final race-ready vehicle is assembled.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CarClient;
