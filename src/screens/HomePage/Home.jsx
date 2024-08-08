import React, { useContext } from "react";
import Typewriter from "./Typewriter";
import ProfilePicture from "./ProfilePicture";
import QuoteAgreement from "./QuoteAgreement";
import { Box } from "@mui/material";
import { ThemeContext } from "./BackgroundThemes/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  const quoteText =
    "OUR DREAMS MAY SEEM IMPOSSIBLE, BUT OUR CREATIVITY CAN TURN THEM INTO REALITY";
  const quoteAuthor = "-MALALA YOUSAFZAI 🙏";

  const combinedQuote = `${quoteText}\n${quoteAuthor}`;

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
          whiteSpace: "pre-wrap",
          height: { xs: "auto", sm: "150px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typewriter text={combinedQuote} speed={40} pauseDuration={3000} />
      </Box>
      <ProfilePicture />
    </Box>
  );
}

export default Home;
