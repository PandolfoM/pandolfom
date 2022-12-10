import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import useIsInViewport from "../../utils/isInViewport";
import { UPDATE_VIEW } from "../../utils/actions";

function Hero() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const isInView = useIsInViewport(ref);

  useEffect(() => {
    if (isInView) {
      dispatch({
        type: UPDATE_VIEW,
        isInView: "home",
      });
    }
  }, [dispatch, isInView]);

  return (
    <Box
      id="home"
      ref={ref}
      component={"section"}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        marginBottom: "10em"
      }}>
      <Box component={"div"}>
        <Typography
          component="h1"
          sx={{ fontSize: "5em", marginBottom: "0.5em" }}>
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
