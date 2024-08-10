import React, { useEffect, useState, useRef } from "react";
import "./index.css";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const delay = 0.04;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const animateCursor = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      const currentX = parseFloat(cursorRef.current.style.left || 0);
      const currentY = parseFloat(cursorRef.current.style.top || 0);
      const dx = (mousePosition.x - currentX) * delay;
      const dy = (mousePosition.y - currentY) * delay;

      cursorRef.current.style.left = `${currentX + dx}px`;
      cursorRef.current.style.top = `${currentY + dy}px`;
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition]);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
