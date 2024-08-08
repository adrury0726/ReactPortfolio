import React, { useState, useEffect } from "react";

const TypewriterComponent = ({ text, speed, pauseDuration }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState("forward");

  useEffect(() => {
    let typingInterval;

    const typeForward = () => {
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setTypingDirection("backward"), pauseDuration);
        }
      }, speed);
    };

    const typeBackward = () => {
      typingInterval = setInterval(() => {
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setTypingDirection("forward"), pauseDuration);
        }
      }, speed);
    };

    if (typingDirection === "forward") {
      typeForward();
    } else {
      typeBackward();
    }

    return () => clearInterval(typingInterval);
  }, [currentIndex, typingDirection, text, speed, pauseDuration]);

  useEffect(() => {
    setDisplayedText(text.substring(0, currentIndex));
  }, [currentIndex, text]);

  const renderTextWithLineBreaks = displayedText
    .split("\n")
    .map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));

  return <div>{renderTextWithLineBreaks}</div>;
};

export default TypewriterComponent;
