import React, { useContext } from "react";
import "../../App.css";
import {
  Container,
  Typography,
  Box,
  Paper,
  useMediaQuery,
} from "@mui/material";
import CodingLanguages from "./CodingLanguages";
import Hobbies from "./Hobbies";
import Experiences from "./Experiences";
import StarRating from "./StarRating";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <StarRating />
      <Box sx={{ paddingTop: "120px" }}>
        <h1
          className="header about-header"
          style={{ fontSize: isMobile ? "2.0rem" : "3rem" }}
        >
          Get to know me
        </h1>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            backgroundColor:
              theme === "light" ? "#aca9a9" : "rgba(0, 0, 0, 0.5)",
            color: theme === "light" ? "#000000" : "#ffffff",
            width: "100%",
            margin: 0,
          }}
        >
          <Typography variant="h3" gutterBottom>
            My Skills
          </Typography>

          <Box className="section">
            <CodingLanguages />
          </Box>

          <Typography variant="h3" gutterBottom>
            What I enjoy doing in my free time
          </Typography>
          <Box className="section">
            <Hobbies />
          </Box>

          <Typography variant="h3" gutterBottom>
            My Professional Experiences
          </Typography>

          <Box className="section">
            <Experiences />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
