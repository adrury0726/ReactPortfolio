import React, { useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PostGreCert from "../../images/PostGreSQLCert.jpg";
import MongoDBCert from "../../images/MongoDB_Proof_Of_Completion.jpg";
import PythonCert from "../../images/Python_Certification.jpg";
import HTMLCSSCert from "../../images/HTMLCSSCert.jpg";
import ReactCert from "../../images/ReactCert.jpg";
import FingerImage from "../../images/MouseClick.jpg";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const certifications = [
  { name: "PostGreSQL Bootcamp", url: PostGreCert },
  { name: "MongoDB Bootcamp", url: MongoDBCert },
  { name: "Python", url: PythonCert },
  { name: "HTML/CSS", url: HTMLCSSCert },
  { name: "React", url: ReactCert },
];

const Certifications = () => {
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
  const subtitleColor = theme === "light" ? "#007bff" : "#ff4081";
  const linkColor =
    theme === "light" ? "#007bff" : theme === "dark" ? "#FFD700" : "aqua";
  const bodyTextColor = theme === "light" ? "black" : "lightgray";

  return (
    <Card
      className="certifications-card"
      sx={{
        backgroundColor: cardBackgroundColor,
        color: textColor,
        fontWeight: "bold",
        borderRadius: 2,
        boxShadow: 3,
        width: "100%",
        position: "relative",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <VerifiedIcon sx={{ marginRight: 2, color: iconColor }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: titleColor }}
          >
            Certifications
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography variant="h6" sx={{ marginBottom: 2, color: subtitleColor }}>
          Udemy
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: 2, color: bodyTextColor }}
        >
          Click on one of the certifications below in order to view it!
        </Typography>
        <Grid container spacing={1}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="body1" sx={{ color: linkColor }}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: linkColor, textDecoration: "none" }}
                >
                  {cert.name}
                </a>
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box
          component="img"
          src={FingerImage}
          alt="Click Here"
          className="finger-image"
          sx={{
            width: "100px",
            height: "100px",
            animation: "hoverAnimation 1.5s infinite",
          }}
        />
      </CardContent>
      <style>
        {`
          @keyframes hoverAnimation {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Card>
  );
};

export default Certifications;
