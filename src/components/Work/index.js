import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Slide,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import data from "../../config.json";

function Work() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box id="work" sx={{ width: "50%", margin: "auto" }}>
      <Typography
        gutterBottom
        component="h3"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "var(--secondary-color)",
          fontSize: "2rem",
          fontWeight: "bold",
        }}>
        Work Showcase
        {!expanded ? (
          <Tooltip title="Show More">
            <KeyboardArrowDownIcon
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              fontSize="large"
              sx={{
                transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
                color: "white",
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: "var(--secondary-color)",
              }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Show Less">
            <KeyboardArrowDownIcon
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              fontSize="large"
              sx={{
                transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
                color: "white",
                display: "inline-block",
                borderRadius: "100%",
                backgroundColor: "var(--secondary-color)",
              }}
            />
          </Tooltip>
        )}
      </Typography>
      <Box>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around">
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
                  <Tooltip title="GitHub">
                    <IconButton
                      aria-label="open on github"
                      href={work.github}
                      target="_blank">
                      <GitHubIcon sx={{ color: "white" }} fontSize="large" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Deployed Site">
                    <IconButton
                      aria-label="open site"
                      href={work.site}
                      target="_blank">
                      <LanguageIcon sx={{ color: "white" }} fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div>
          <Slide
            direction="down"
            in={expanded}
            timeout={{ enter: 1000, exit: 500 }}
            unmountOnExit>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-around"
              sx={{ marginTop: "16px" }}>
              {data.slice(3, 6).map((work) => (
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
                      <Tooltip title="GitHub">
                        <IconButton
                          aria-label="open on github"
                          href={work.github}
                          target="_blank">
                          <GitHubIcon
                            sx={{ color: "white" }}
                            fontSize="large"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Deployed Site">
                        <IconButton
                          aria-label="open site"
                          href={work.site}
                          target="_blank">
                          <LanguageIcon
                            sx={{ color: "white" }}
                            fontSize="large"
                          />
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Slide>
        </div>
      </Box>
    </Box>
  );
}

export default Work;
