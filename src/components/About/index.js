import React from "react";
import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import pic from "../../assets/me.png";

function About() {
  return (
    <Box id="about" sx={{ width: "70%", margin: "auto", marginBottom: "2em" }}>
      <Typography
        gutterBottom
        component="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--secondary-color)",
          fontSize: "2rem",
          fontWeight: "bold",
        }}>
        About Me
      </Typography>
      {/* <Grid
        container
        spacing={5}
        direction={"row"}
        justifyContent="center"
        marginBottom="16px">
        <Grid item> */}
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              flexDirection: "row-reverse",
              background: "var(--card-color)",
              color: "white",
              width: 980
            }}>
            <Box sx={{ display: "flex" }}>
              <CardContent>
                <Typography component={"div"} variant="p">
                  Hello, my name is Matthew Pandolfo! I am a 19-year-old Full
                  Stack Web Developer. I graduated from the UConn Coding
                  Bootcamp in December of 2021, where I am now looking for
                  positions to start my career. During the 24-week coding boot
                  camp I learned various languages, libraries, and frameworks,
                  such as JavaScript, HTML, CSS, React, MongoDB, Express, MySQL,
                  GraphQL, and many more.
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component={"img"}
              image={pic}
              alt="Matthew Pandolfo"
              sx={{ width: 151 }}
            />
          </Card>
        {/* </Grid>
      </Grid> */}
    </Box>
  );
}

export default About;
