import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { useLoading } from "../contexts/LoadingContext";

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loading;
