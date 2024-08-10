import React, { useContext, useRef, useEffect, useState } from "react";
import Typewriter from "./Typewriter";
import ProfilePicture from "./ProfilePicture";
import QuoteAgreement from "./QuoteAgreement";
import { Box } from "@mui/material";
import { ThemeContext } from "./BackgroundThemes/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  const textRef = useRef(null);
  const [height, setHeight] = useState(null);

  const quoteText =
    "OUR DREAMS MAY SEEM IMPOSSIBLE, BUT OUR CREATIVITY CAN TURN THEM INTO REALITY";
  const quoteAuthor = "-MALALA YOUSAFZAI 🙏";
  const combinedQuote = `${quoteText}\n${quoteAuthor}`;

  useEffect(() => {
    if (textRef.current) {
      setHeight(textRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        pt: "20px",
        px: "20px",
      }}
    >
      <Box sx={{ marginBottom: 4 }}>
        <QuoteAgreement />
      </Box>
      <Box
        sx={{
          marginBottom: 4,
          color: theme === "light" ? "#000080" : "pink",
          fontSize: { xs: "24px", sm: "32px" },
          textAlign: "center",
          maxWidth: "80%",
          height: height || "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          ref={textRef}
          style={{
            visibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            whiteSpace: "pre-wrap",
          }}
        >
          {combinedQuote}
        </div>

        {height && (
          <Typewriter text={combinedQuote} speed={40} pauseDuration={3000} />
        )}
      </Box>
      <ProfilePicture />
    </Box>
  );
}

export default Home;
