import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import data from "../../config.json";

function Work() {
  return (
    <div id="work">
      <Typography
        component="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "var(--secondary-color)",
          fontSize: "2rem",
          fontWeight: "bold",
        }}>
        Work Showcase
      </Typography>
      <Box>
        <Grid container spacing={2} direction="row" justifyContent="center">
          {data.slice(0, 3).map((work) => (
            <Grid item key={work.title}>
              <Card
                sx={{
                  width: 300,
                  backgroundColor: "var(--card-color)",
                  color: "white",
                  height: "100%",
                }}>
                <CardMedia
                  component={"img"}
                  height={"180"}
                  image={work.image}
                  alt={work.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component={"div"}>
                    {work.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      opacity: "0.5",
                      maxHeight: 100,
                      overflowY: "scroll",
                    }}>
                    {work.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="open on github"
                    href={work.github}
                    target="_blank">
                    <GitHubIcon sx={{ color: "white" }} fontSize="large" />
                  </IconButton>
                  <IconButton
                    aria-label="open site"
                    href={work.site}
                    target="_blank">
                    <LanguageIcon sx={{ color: "white" }} fontSize="large" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Work;
