import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import data from "../../config.json";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";

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
    <Box sx={{ position: "relative", textAlign: "center" }}>
      <Typography
        component={"p"}
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          bgcolor: "#00000052",
          color: "white",
          zIndex: "1",
          textAlign: "center",
          padding: "20px",
          fontSize: "20px",
        }}>
        {data[activeStep].title}
      </Typography>
      <Button
        activeStep={activeStep}
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{
          position: "absolute",
          top: "125px",
          left: "-30px",
          zIndex: "1",
          opacity: "0.5",
          "&:hover": { opacity: "1" },
        }}>
        <KeyboardArrowLeft sx={{ fontSize: "100px" }}></KeyboardArrowLeft>
      </Button>
      <Button
        activeStep={activeStep}
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        sx={{
          position: "absolute",
          top: "125px",
          right: "-30px",
          zIndex: "1",
          opacity: "0.5",
          "&:hover": { opacity: "1" },
        }}>
        <KeyboardArrowRight sx={{ fontSize: "100px" }}></KeyboardArrowRight>
      </Button>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {data.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
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
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        sx={{bgcolor: "#232a33",}}
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default Carousel;
