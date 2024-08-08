import React, { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AboutMe from "../../images/AboutMe.mp4";
import Thumbnail from "../../images/IntroThumbnail.jpg";
import { ThemeContext } from "./BackgroundThemes/ThemeContext";

function ProfilePicture() {
  const { theme } = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: 25 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: theme === "light" ? "white" : "#1e1e1e",
              color: theme === "light" ? "#000080" : "#adff2f",
              textAlign: "left",
              marginBottom: 4,
              padding: 1,
            }}
          >
            Introduction:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Arial",
              fontSize: "25px",
              backgroundColor: theme === "light" ? "white" : "#1e1e1e",
              color: theme === "light" ? "#000" : "pink",
              textAlign: "left",
              maxWidth: "600px",
              mx: "auto",
              padding: 1,
            }}
          >
            My name is Aaron Drury, and I am a passionate and dedicated Software
            Engineer. I graduated Cum Laude with a 3.6 GPA from Colorado
            Technical University (CTU) in Colorado Springs in May 2021. With a
            strong foundation in problem-solving and a continuous drive for
            learning new technologies, I thrive on developing innovative
            solutions. My experience includes proficiency in various programming
            languages, frameworks, and methodologies.
            <br /> <br />I am excited to bring my enthusiasm and expertise to
            your company and look forward to the opportunity to contribute to
            your team. Let’s connect and explore how my skills can be an
            excellent asset to your organization.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <video
              src={AboutMe}
              controls
              poster={Thumbnail}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePicture;
