import React from "react";
import "../../App.css";
import { Box } from "@mui/material";
import TechnicalExpertise from "./TechnicalExpertise";
import ProfessionalExperience from "./ProfessionalExperience";
import EducationAndCertifications from "./EducationAndCertifications";

const Resume = () => {
  return (
    <div className="home-text">
      <Box sx={{ width: "100%", marginTop: "20px", marginBottom: "100px" }}>
        <TechnicalExpertise />
        <ProfessionalExperience />
        <EducationAndCertifications />
      </Box>
    </div>
  );
};

export default Resume;
