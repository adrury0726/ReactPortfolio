import React, { useState, useContext } from "react";
import { Box, Typography, Rating, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const StarRating = () => {
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState(0);

  const getRatingText = (rating) => {
    switch (rating) {
      case 1:
        return "I don't like it very much";
      case 2:
        return "It's cool, but I would prefer another color theme";
      case 3:
        return "It's not the best, but also not the worst.";
      case 4:
        return "I like it a lot, but I'd change some things";
      case 5:
        return "I've never seen anything like it!";
      default:
        return "";
    }
  };

  const ratingTextColor =
    theme === "light" && value > 0
      ? "#007bff"
      : theme === "dark"
      ? "#ff69b4"
      : "#ff4081";
  const ratingTextSize = theme === "light" ? "1.8rem" : "1rem";

  return (
    <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: "relative",
            backgroundColor: theme === "light" ? "grey" : "#1e1e1e",
            color: "#ff4081",
            padding: 2,
            borderRadius: 1,
            zIndex: 1000,
            marginTop: { xs: "80px", sm: "100px" }, // Ensure it is below the Navbar
            marginLeft: { xs: "auto", md: 0 },
            marginRight: { xs: "auto", md: 0 },
          }}
        >
          <Typography variant="h5" gutterBottom>
            I love galaxy colors. Out of 5 stars, how much do you like the color
            theme?
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="galaxy-colors-rating"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              size="medium"
              emptyIcon={
                <StarIcon style={{ color: "white" }} fontSize="inherit" />
              }
            />
            <Typography
              variant="body1"
              sx={{
                marginLeft: 2,
                color: ratingTextColor,
                fontSize: ratingTextSize,
              }}
            >
              {getRatingText(value)}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StarRating;
