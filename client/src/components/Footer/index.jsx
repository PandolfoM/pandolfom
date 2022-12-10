import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();
  const [spacing, setSpacing] = useState("space-between");
  const Mobile = useMediaQuery("(max-width:502px)");

  useEffect(() => {
    if (Mobile) {
      setSpacing("center");
    } else {
      setSpacing("space-between");
    }
  }, [Mobile]);

  return (
    <footer>
      <Container maxWidth="xl" sx={{ padding: "15px 0" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "5px",
          }}>
          <Grid
            item
            sx={{
              a: {
                opacity: "40%",
                color: "gray",
                transition: "all .3s linear",
              },
              "a:hover": {
                color: theme.palette.primary.main,
                opacity: "100%",
              },
            }}>
            <IconButton href="https://github.com/PandolfoM" target="_blank">
              <GitHubIcon sx={{ fontSize: "0.8em" }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/matthew-pandolfo-22b6b1192/"
              target="_blank">
              <LinkedInIcon sx={{ fontSize: "0.8em" }} />
            </IconButton>
            <IconButton href="mailto:matt@pandolfo.com">
              <EmailIcon sx={{ fontSize: "0.8em" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Box component={"hr"} sx={{ color: "gray", opacity: "40%" }}></Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: spacing,
            padding: "5px 0 5px",
          }}>
          <Grid
            item
            sx={{
              "a:nth-of-type(1n+2)": {
                paddingLeft: "20px",
              },
              a: {
                textDecoration: "none",
                opacity: "40%",
                color: "gray",
                transition: "all .3s linear",
              },
              "a:hover": {
                color: theme.palette.primary.main,
                opacity: "100%",
              },
              fontSize: "15px",
            }}>
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#work">Work</HashLink>
            <HashLink to="/#about">About</HashLink>
            <Link to="/contact">Contact</Link>
          </Grid>
          <Grid item>
            <Typography sx={{ opacity: "40%", color: "gray" }}>
              Created by Matthew Pandolfo ©{" "}
              <Typography component={"span"}></Typography>
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
