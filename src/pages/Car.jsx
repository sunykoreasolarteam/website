import React, { useEffect, useState, useRef } from 'react';
import './Car.css';

const TOTAL_FRAMES = 36;

// Import all 36 frames using Vite's glob import (outside component to avoid re-creation)
const framePaths = import.meta.glob('../assets/36frame-turntable/frame.*.png', { eager: true, as: 'url' });

// Create an ordered array of the URLs
const imagePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const key = `../assets/36frame-turntable/frame.${i}.png`;
  return framePaths[key];
});

const Car = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const scrollTrackRef = useRef(null);

  // Opacity states for the two texts and the car overlay
  const [introOpacity, setIntroOpacity] = useState(1);
  const [carOverlayOpacity, setCarOverlayOpacity] = useState(0.85); // Starts dark
  const [samjokoOpacity, setSamjokoOpacity] = useState(0);

  // Preload images into memory
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
        onImageReady(); // skip missing frames instead of blocking forever
        return;
      }
      const img = new Image();
      img.src = src;
      img.onload = onImageReady;
      img.onerror = onImageReady; // don't let a failed load block the animation
    });
  }, []);

  // Handle Scroll-driven animation sequence
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && scrollTrackRef.current) {
        window.requestAnimationFrame(() => {
          const track = scrollTrackRef.current;
          if (!track) { ticking = false; return; } // guard against unmount

          const rect = track.getBoundingClientRect();

          // distInView is how far the top of our sticky container has scrolled past the top of the viewport
          const distInView = -rect.top;
          const maxScroll = rect.height - window.innerHeight;

          if (maxScroll <= 0) { ticking = false; return; } // guard against zero-height

          if (distInView >= 0 && distInView <= maxScroll) {
            const scrollFraction = distInView / maxScroll;

            // Phase 1: 0% to 15% scroll distance
            // - Fade out the original "The Car" text
            // - Car starts lightening up slightly
            const phase1Progress = Math.min(scrollFraction / 0.15, 1);
            setIntroOpacity(Math.max(1 - phase1Progress * 1.5, 0)); // Fades out completely early in phase 1
            setCarOverlayOpacity(Math.max(0.85 - phase1Progress * 0.85, 0));

            // Phase 2: 15% to 65% scroll distance
            // - Rotate the car from frame 0 to 35, and then complete the 360 back to 0
            const phase2Progress = Math.min(Math.max((scrollFraction - 0.15) / 0.50, 0), 1);
            // We use TOTAL_FRAMES (36) as the final logical state, which we map back to actual frame 0
            const logicalFrameIndex = Math.min(
              TOTAL_FRAMES,
              Math.max(0, Math.floor(phase2Progress * (TOTAL_FRAMES + 1)))
            );
            const frameIndex = logicalFrameIndex === TOTAL_FRAMES ? 0 : logicalFrameIndex;
            setCurrentFrame(frameIndex);

            // Phase 3: 65% to 80% scroll distance
            // - The "SAMJOKO - I" text fades in above the fully rotated car (which is now back to frame 0)
            const phase3Progress = Math.min(Math.max((scrollFraction - 0.65) / 0.15, 0), 1);
            setSamjokoOpacity(phase3Progress);

            // Phase 4: 80% to 100% is a visual holding period.
            // The car stays at frame 0 and text is fully visible while user continues scrolling the spacer.

          } else if (distInView < 0) {
            // Above the section
            setCurrentFrame(0);
            setIntroOpacity(1);
            setCarOverlayOpacity(0.85);
            setSamjokoOpacity(0);
          } else {
            // Below the section
            setCurrentFrame(0); // Hold frame 0 at the end
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
    // Initial call just in case loaded mid-scroll
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="car-page">

      {/* Scroll-Driven Turntable Section */}
      <section className="turntable-section" ref={scrollTrackRef}>
        <div className="sticky-viewer">

          {/* Main Car Image */}
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

          {/* Intro Text (The Car) sitting securely in the center */}
          <div
            className="turntable-intro-text"
            style={{ opacity: introOpacity, pointerEvents: introOpacity > 0 ? 'auto' : 'none' }}
          >
            <h1 className="car-page-title">The Car</h1>
            <p className="car-page-intro">
              We are developing a high-efficiency solar race vehicle concept, built as part of a long-term effort toward the World Solar Challenge.
            </p>
          </div>

          {/* SAMJOKO - I Name appearing above the car after it rotates */}
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

      {/* Content Section below the turntable */}
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

export default Car;
