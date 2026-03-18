"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  "/slides/refinary-plant.jpg",
  "/slides/oil-and-gas-refinary.jpg",
  "/slides/plant.jpg",
  "/slides/boilers.jpg",
  "/slides/piping.jpg",
  "/slides/water-treatment-plant.jpg",
  "/slides/pipe-analisys.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const advance = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setPrev(current);
    setCurrent((c) => (c + 1) % slides.length);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 800);
  }, [current, animating]);

  useEffect(() => {
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="w-full overflow-hidden bg-[#061829]">
      <div className="relative h-[480px] md:h-[620px] lg:h-[720px]">
        {/* Previous slide — slides out to the left while fading */}
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={slides[prev]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              animation: "slideOutLeft 0.8s ease-in-out forwards",
            }}
          />
        )}

        {/* Current slide — slides in from the right while fading in */}
        <img
          key={`curr-${current}`}
          src={slides[current]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            animation: animating
              ? "slideInRight 0.8s ease-in-out forwards"
              : "none",
          }}
        />

        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,18,31,0.45)] via-transparent to-[rgba(6,18,31,0.15)] pointer-events-none" />
      </div>

      <style>{`
        @keyframes slideOutLeft {
          0%   { transform: translateX(0);     opacity: 1; }
          100% { transform: translateX(-6%);   opacity: 0; }
        }
        @keyframes slideInRight {
          0%   { transform: translateX(6%);    opacity: 0; }
          100% { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </section>
  );
}
