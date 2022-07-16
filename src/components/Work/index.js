import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Slide,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import data from "../../config.json";

const workCards = (count) => (
  <Grid container spacing={2} direction="row" justifyContent="space-around" marginBottom={'16px'}>
    {data.slice(0, count).map((work) => (
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
);

const workCardsTwo = (first, second) => (
  <Grid container spacing={2} direction="row" justifyContent="space-around">
    {data.slice(first, second).map((work) => (
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
);

function Work() {
  const [expanded, setExpanded] = useState(false);
  const [filterAmt, setFilterAmt] = useState({
    rowOne: 3,
    rowTwoStart: 3,
    rowTwoEnd: 6,
  });
  const Tablet = useMediaQuery("(max-width:1863px)");
  const Mobile = useMediaQuery("(max-width:1231px)");

  useEffect(() => {
    if (Tablet) {
      setFilterAmt({ ...filterAmt, rowOne: 2, rowTwoStart: 2, rowTwoEnd: 4 });
    }
    if (Mobile) {
      setFilterAmt({ ...filterAmt, rowOne: 1, rowTwoStart: 1, rowTwoEnd: 1 });
    }
    if (!Tablet && !Mobile) {
      setFilterAmt({ ...filterAmt, rowOne: 3, rowTwoStart: 3, rowTwoEnd: 6 });
    }
  }, [Tablet, Mobile]);

  return (
    <Box id="work" sx={{ width: "50%", margin: "auto", overflow: "hidden" }}>
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
        {workCards(filterAmt.rowOne)}
        <Box sx={{overflow: 'hidden'}}>
          <Slide
            direction="down"
            in={expanded}
            timeout={{ enter: 1000, exit: 500 }}
            unmountOnExit>
            {workCardsTwo(filterAmt.rowTwoStart, filterAmt.rowTwoEnd)}
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}

export default Work;
