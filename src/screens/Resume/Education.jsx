import React, { useContext } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Colorado Technical University",
  location: "Colorado Springs, CO",
  date: "September 2018 - May 2021",
  gpa: "GPA: 3.6",
};

const Education = () => {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor =
    theme === "light"
      ? "rgba(255, 255, 255, 0.5)"
      : theme === "dark"
      ? "#2d2d37"
      : "#1e1e1e";
  const textColor = theme === "light" ? "black" : "white";
  const iconColor =
    theme === "light" ? "#007bff" : theme === "dark" ? "#FFD700" : "#ff4081";
  const titleColor = theme === "light" ? "black" : "#ff4081";

  return (
    <Card
      className="education-card"
      sx={{
        backgroundColor: cardBackgroundColor,
        color: textColor,
        fontWeight: "bold",
        borderRadius: 2,
        boxShadow: 3,
        height: "350px",
        width: "100%",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <SchoolIcon sx={{ marginRight: 2, color: iconColor }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: titleColor }}
          >
            {education.degree}
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          {education.date}
        </Typography>
        <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
          {education.school}
        </Typography>
        <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
          {education.location}
        </Typography>
        <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
          {education.gpa}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Education;
