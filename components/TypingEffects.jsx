import { useEffect, useState } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const phrases = ["Hello, World!", "Welcome to my website.", "This is a typing effect."];
  let phraseIndex = 0;
  let letterIndex = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (letterIndex < phrases[phraseIndex].length) {
        setText((prevText) => prevText + phrases[phraseIndex][letterIndex]);
        letterIndex++;
      } else {
        // Wait for a moment before erasing
        setTimeout(() => eraseText(), 1000);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here
  }, []);

  const eraseText = () => {
    const eraseInterval = setInterval(() => {
      if (text.length > 0) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        // Move to the next phrase
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        clearInterval(eraseInterval);
        setTimeout(() => startTyping(), 500); // Wait before typing the next phrase
      }
    }, 50); // Adjust erasing speed here
  };

  const startTyping = () => {
    const typingInterval = setInterval(() => {
      if (letterIndex < phrases[phraseIndex].length) {
        setText((prevText) => prevText + phrases[phraseIndex][letterIndex]);
        letterIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here
  };

  return (
    <div className="typing-effect">
      {text}
      <style jsx>{`
        .typing-effect {
          font-size: 24px;
          font-weight: bold;
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: black; }
        }
      `}</style>
    </div>
  );
};

export default TypingEffect;
