// HeroSection.jsx
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [animateH1, setAnimateH1] = useState(false);
  const [animateP, setAnimateP] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    // Start animations one by one with delays
    setTimeout(() => setAnimateH1(true), 500); // Delay for h1
    setTimeout(() => setAnimateP(true), 1000); // Delay for p
    setTimeout(() => setAnimateButton(true), 1500); // Delay for button
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1
          className={`text-5xl font-bold transition-all duration-700 ease-in-out ${
            animateH1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Welcome to Our Website
        </h1>
        <p
          className={`mt-4 text-lg transition-all duration-700 ease-in-out ${
            animateP ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Your journey starts here!
        </p>
        <button
          className={`mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition duration-700 ease-in-out rounded-md ${
            animateButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
