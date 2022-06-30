import React from "react";
import { Box, Typography } from "@mui/material";

function Hero() {
  return (
    <Box id="home"
      component={"section"}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}>
      <Box component={"div"}>
        <Typography component="h1" sx={{ fontSize: "5em", marginBottom: "0.5em" }}>
          Matthew Pandolfo
        </Typography>
        <Typography component="h2" sx={{ fontSize: "2em", opacity: "0.5" }}>
          Full Stack Developer
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
