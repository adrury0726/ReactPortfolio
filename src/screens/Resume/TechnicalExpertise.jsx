import React, { useContext } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import Icon from "@mui/icons-material/StarBorder";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const technicalExpertise = [
  {
    title: "Programming Languages",
    description: "Python, JavaScript, C#, Java",
    Icon: Icon,
  },
  {
    title: "Web Technologies",
    description: "React, HTML/CSS, Node.js",
    Icon: Icon,
  },
  {
    title: "Database Management",
    description: "NoSQL, MySQL, SQL Server Management Studio",
    Icon: Icon,
  },
  {
    title: "Development Tools",
    description:
      "Git, SourceTree, Visual Studio, Visual Studio Code, IntelliJ IDEA",
    Icon: Icon,
  },
  {
    title: "Software Development Methodologies",
    description: "Agile (SCRUM), SDLC",
    Icon: Icon,
  },
  {
    title: "Web Server Management",
    description: "IIS",
    Icon: Icon,
  },
  {
    title: "Frameworks",
    description: ".NET, Spring Boot, Redux",
    Icon: Icon,
  },
  {
    title: "API Development",
    description: "REST, Model-View-Controller (MVC)",
    Icon: Icon,
  },
];

const TechnicalExpertise = () => {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor =
    theme === "light" ? "#ffffff" : theme === "dark" ? "#2d2d37" : "#1e1e1e";
  const titleColor =
    theme === "light" ? "#007bff" : theme === "dark" ? "#bb86fc" : "#ff4081";
  const descriptionColor = theme === "light" ? "#000000" : "#ffffff";

  return (
    <Box sx={{ color: descriptionColor, padding: "100px" }}>
      <Typography className="header" gutterBottom sx={{ textAlign: "center" }}>
        <span style={{ fontSize: "50px" }}>Technical Expertise</span>
      </Typography>
      <Grid container spacing={2}>
        {technicalExpertise.map((tech, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: cardBackgroundColor,
                color: descriptionColor,
                fontWeight: "bold",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <tech.Icon sx={{ marginRight: "10px", color: titleColor }} />
                  <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{ color: titleColor }}
                  >
                    {tech.title}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ color: descriptionColor }}
                >
                  {tech.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnicalExpertise;
