import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import Education from "./Education";
import Certifications from "./Certifications";
//import "../../App.css";

const EducationAndCertifications = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ color: "white", padding: "50px" }}>
      <Typography
        className="header"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: `${isMobile ? "36px !important" : "50px !important"}`,
          fontWeight: "bold",
        }}
      >
        Education & Certifications
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className="education-card" sx={{ height: "100%" }}>
            <Education />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="certifications-card" sx={{ height: "100%" }}>
            <Certifications />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationAndCertifications;
