import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Slide,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import useIsInViewport from "../../utils/isInViewport";
import { useDispatch } from "react-redux";
import { UPDATE_VIEW } from "../../utils/actions";
import SendIcon from "@mui/icons-material/Send";

const validateEmail = (email) => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regex.test(email);
};

function Contact() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const isInView = useIsInViewport(ref);
  const Mobile = useMediaQuery("(max-width:914px)");

  const containerRef = React.useRef(null);
  const [status, setStatus] = useState("Send");
  const [sentAlert, setSentAlert] = useState(false);
  const [err, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [mobileData, setMobileData] = useState({
    container: true,
    width: "70%",
  });

  useEffect(() => {
    if (isInView) {
      dispatch({
        type: UPDATE_VIEW,
        isInView: "contact",
      });
    }
  }, [dispatch, isInView]);

  useEffect(() => {
    if (Mobile) {
      setMobileData({
        ...mobileData,
        container: false,
        width: "100%",
      });
    } else {
      setMobileData({
        ...mobileData,
        container: true,
        width: "70%",
      });
    }
  }, [Mobile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;

    if (validateEmail(email.value) === false) {
      setError({ ...err, email: true });
      return;
    } else {
      setError({ ...err, email: false });
    }

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch("/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    const sent = await response.json();
    console.log(sent);
    if (sent === "ERROR") {
      setTimeout(function () {
        setStatus("Error!");
        setSentAlert(false);
      }, 3000);
    } else {
      setTimeout(function () {
        setStatus("Sent!");
        setSentAlert(true);
        e.target.reset();
      }, 3000);
    }
  };

  return (
    <Container
      ref={ref}
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Paper
        sx={{
          color: "white",
          width: "90%",
        }}>
        <Grid
          container={mobileData.container}
          spacing={2}
          sx={{ padding: "24px" }}>
          <Grid item sm={9}>
            <Typography component={"h1"} sx={{ fontSize: "2em" }}>
              Contact Me
            </Typography>
            <Typography component={"p"}>
              <Typography component="span" sx={{ color: "red" }}>
                *{" "}
              </Typography>
              Required
            </Typography>
            <Box
              sx={{ padding: "15px 0", overflow: "hidden" }}
              ref={containerRef}>
              <Box
                component="form"
                autoComplete="off"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="name" />
                <TextField
                  error={err.name}
                  id="name"
                  required
                  label="Name"
                  sx={{ width: mobileData.width, paddingBottom: "15px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }}>
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <label htmlFor="email" />
                <TextField
                  error={err.email}
                  id="email"
                  helperText={err.email && "Invalid email address"}
                  required
                  label="Email"
                  sx={{ width: mobileData.width, paddingBottom: "15px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }}>
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <label htmlFor="message" />
                <TextField
                  error={err.message}
                  id="message"
                  required
                  multiline
                  rows={5}
                  label="Message"
                  sx={{ width: mobileData.width, paddingBottom: "15px" }}
                />
                <Slide
                  direction="right"
                  in={sentAlert}
                  container={containerRef.current}
                  mountOnEnter
                  unmountOnExit>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setSentAlert(false);
                        }}>
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ width: "70%" }}
                    severity="success">
                    Email has been sent - Thank You!
                  </Alert>
                </Slide>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ margin: "15px 0", width: "150px", float: "right" }}>
                  {status}
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ marginBottom: "22px" }}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: "1.2rem",
                  marginBottom: "5px",
                  paddingLeft: "8px",
                }}>
                Email
              </Typography>
              <Button href="mailto:matt@pandolfo.com">matt@pandolfo.com</Button>
            </Box>
            <Box sx={{ marginBottom: "22px" }}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: "1.2rem",
                  marginBottom: "5px",
                  paddingLeft: "8px",
                }}>
                Phone Number
              </Typography>
              <Button href="tel:8609446334">860-944-6334</Button>
            </Box>
            <Box sx={{ marginBottom: "22px" }}>
              <IconButton href="https://github.com/PandolfoM" target="_blank">
                <GitHubIcon sx={{ fontSize: "1.3em", color: "white" }} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/matthew-pandolfo-22b6b1192/"
                target="_blank">
                <LinkedIn sx={{ fontSize: "1.3em", color: "white" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Contact;
