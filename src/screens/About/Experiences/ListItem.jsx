import React from "react";
import { Typography } from "@mui/material";

const ListItem = ({ children }) => (
  <li>
    <Typography
      variant="body1"
      sx={{
        fontWeight: "normal",
        color: "inherit",
        fontSize: "20px",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </Typography>
  </li>
);

export default ListItem;
