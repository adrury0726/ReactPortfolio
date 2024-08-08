import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import ListItem from "./ListItem";

const ExperienceSection = ({ title, description, duties, image }) => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <Typography
        variant="h5"
        sx={{ fontSize: "1.75rem", marginBottom: "1rem" }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
        {description}
      </Typography>
      {duties && (
        <>
          <Typography
            variant="h6"
            sx={{
              fontSize: "2.0rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              color: "#adff2f",
              marginLeft: "3.5rem",
            }}
          >
            Duties:
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{ fontSize: "1.25rem" }}
          >
            <ul className="experience-list">
              {duties.map((duty, index) => (
                <ListItem key={index}>{duty}</ListItem>
              ))}
            </ul>
          </Typography>
        </>
      )}
    </Grid>
    {image && (
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            marginTop: "4rem",
            maxWidth: "600px",
          }}
        />
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
        </Grid>
      </Grid>
    )}
  </Grid>
);

export default ExperienceSection;
