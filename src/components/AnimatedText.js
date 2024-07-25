import React, { useEffect } from 'react';

const AnimatedText = ({ text, className }) => {
  const letters = Array.from(text);

  useEffect(() => {
    const spans = document.querySelectorAll('.animated-letter');
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.05}s`;
    });
  }, []);

  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}
    >
      <h1 className="inline-block w-full text-dark font-bold capitalize text-5xl">
        {letters.map((char, index) => (
          <span className="animated-letter" key={char + '-' + index}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;

// CSS perlu ditambahkan di tempat yang sesuai:
/*
.animated-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/