import React, { useState, useContext } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import AnnoyedImg from "../../images/MichaelScottAnnoyed.webp";
import HappyImg from "../../images/DwightHappy.webp";
import { ThemeContext } from "./BackgroundThemes/ThemeContext";

function QuoteAgreement() {
  const { theme } = useContext(ThemeContext);
  const [like, setLike] = useState(null);

  const handleThumbsUp = () => {
    setLike(like === "up" ? null : "up");
  };

  const handleThumbsDown = () => {
    setLike(like === "down" ? null : "down");
  };

  return (
    <Box sx={{ textAlign: "center", marginBottom: 2 }}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 1,
          color: theme === "light" ? "#000" : "#00FF00",
        }}
      >
        Do you agree with Malala Yousafzai?
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton onClick={handleThumbsUp}>
          <ThumbUpIcon
            sx={{
              color:
                like === "up"
                  ? "#00FFFF"
                  : theme === "light"
                  ? "#000"
                  : "white",
            }}
          />
        </IconButton>
        <IconButton onClick={handleThumbsDown}>
          <ThumbDownIcon
            sx={{
              color:
                like === "down" ? "red" : theme === "light" ? "#000" : "white",
            }}
          />
        </IconButton>
        {like === "up" && (
          <Typography
            variant="h6"
            sx={{ marginLeft: 1, fontSize: "26px", color: "#00FFFF" }}
          >
            Of Course I Do!
          </Typography>
        )}
        {like === "down" && (
          <Typography
            variant="h6"
            sx={{ marginLeft: 1, fontSize: "26px", color: "red" }}
          >
            Boooo No Way!
          </Typography>
        )}
      </Box>
      {like === "up" && (
        <Box sx={{ marginTop: 2 }}>
          <img
            src={HappyImg}
            alt="Happy"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </Box>
      )}
      {like === "down" && (
        <Box sx={{ marginTop: 2 }}>
          <img
            src={AnnoyedImg}
            alt="Annoyed"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </Box>
      )}
    </Box>
  );
}

export default QuoteAgreement;
