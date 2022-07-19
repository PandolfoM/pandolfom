import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import data from "../../config.json";
import { Box, Button, IconButton, Typography } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            bgcolor: "#00000052",
            zIndex: "1",
            color: "white",
            paddingTop: "5px",
          }}>
          <Typography
            sx={{ width: "max-content", margin: "auto", fontSize: "23px" }}>
            {data[activeStep].title}
          </Typography>
          <Box sx={{ width: "50%", margin: "auto" }}>
            <IconButton
              aria-label="open on github"
              target="_blank"
              href={data[activeStep].github}>
              <GitHubIcon sx={{ color: "white", fontSize: "2.5rem" }} />
            </IconButton>
            <IconButton
              aria-label="open site"
              target="_blank"
              href={data[activeStep].site}>
              <LanguageIcon sx={{ color: "white", fontSize: "2.5rem" }} />
            </IconButton>
          </Box>
        </Box>
        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0}
          color={"primary"}
          sx={{
            position: "absolute",
            top: "125px",
            left: "-30px",
            zIndex: "1",
            opacity: "0.5",
            "&:hover": { opacity: "1" },
          }}>
          <KeyboardArrowLeft sx={{ fontSize: "100px" }}></KeyboardArrowLeft>
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          color={"primary"}
          sx={{
            position: "absolute",
            top: "125px",
            right: "-30px",
            zIndex: "1",
            opacity: "0.5",
            "&:hover": { opacity: "1" },
          }}>
          <KeyboardArrowRight sx={{ fontSize: "100px" }}></KeyboardArrowRight>
        </IconButton>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>
          {data.map((step, index) => (
            <div key={step.title}>
              {Math.abs(activeStep - index) <= 5 ? (
                <Box
                  component="img"
                  sx={{
                    height: 350,
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={step.image}
                  alt={step.title}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <Button
        variant="outlined"
        href="https://github.com/PandolfoM"
        target="_blank"
        sx={{
          width: "100%",
          margin: "auto",
          marginTop: "10px",
          fontSize: "15px",
        }}>
        Show All
      </Button>
    </>
  );
}

export default Carousel;
