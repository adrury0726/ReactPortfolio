import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TypingText from "./TypingText";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const ProjectCard = ({ title, description, githubLink, otherLink }) => {
  const { theme } = useContext(ThemeContext);

  const titleColor =
    theme === "light" ? "#007bff" : theme === "dark" ? "#bb86fc" : "#ff69b4";
  const buttonColor =
    theme === "light" ? "#007bff" : theme === "dark" ? "#bb86fc" : "#ff69b4";
  const cardBackgroundColor =
    theme === "light" ? "#ffffff" : theme === "dark" ? "#2d2d37" : "#1e1e1e";
  const textColor =
    theme === "light" ? "#000000" : theme === "dark" ? "#ffffff" : "#ffffff";

  return (
    <Card
      className="project-card"
      sx={{
        width: 345,
        height: 400,
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: cardBackgroundColor,
        color: textColor,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: titleColor }}>
          <TypingText text={title} speed={50} />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "15px",
            marginTop: "1.0rem",
            color: textColor,
          }}
        >
          <TypingText text={description} speed={5} />
        </Typography>
      </CardContent>
      <CardActions>
        {githubLink && (
          <Button
            size="small"
            sx={{ color: buttonColor }}
            href={githubLink}
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            View Project on GitHub
          </Button>
        )}
        {otherLink && (
          <Button
            size="small"
            sx={{ color: buttonColor }}
            href={otherLink}
            target="_blank"
          >
            View Project
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
