import React, { useState, useEffect } from "react";

const TypingTextComponent = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearInterval(typingInterval);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    setDisplayedText(text.substring(0, currentIndex));
  }, [currentIndex, text]);

  return <span dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypingTextComponent;
