import React, { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={show}>
      <Fab
        color="primary"
        size="medium"
        onClick={handleBackToTop}
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "auto", // Override the left position on small screens
            sm: "50%",
          },
          right: {
            xs: 20, // Position it to the bottom-right on small screens
            sm: "auto",
          },
          transform: {
            xs: "none", // Remove the transform property on small screens
            sm: "translateX(-50%)",
          },
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BackToTopButton;
