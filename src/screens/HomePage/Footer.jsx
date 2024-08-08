import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
        gap: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body1">
          Galaxy Background Credit:
          <br />
          {"AA-VFX "}
          <IconButton
            aria-label="AA-VFX Youtube"
            href="https://www.youtube.com/watch?v=aA6h2S_ydqI&list=PLj6XzcqwRpN5Hx6uTLDoTg2WEpDvu5hKu&index=3"
            target="_blank"
          >
            <YouTubeIcon
              style={{
                color: "red",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
              }}
            />
          </IconButton>
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        PHONE
        <br />
        720-532-3109
      </Typography>

      <Typography
        variant="body1"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        EMAIL
        <br />
        aarondrury105@yahoo.com
      </Typography>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="body1" mb={1}>
          SOCIALS
        </Typography>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/aaron-drury-aaba39192/"
          target="_blank"
        >
          <LinkedInIcon
            style={{
              color: "blue",
              textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
            }}
          />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          href="https://github.com/adrury0726"
          target="_blank"
        >
          <GitHubIcon
            style={{
              color: "blue",
              textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
