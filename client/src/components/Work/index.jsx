import {
  Box,
  Button,
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
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useRef, useState } from "react";
import data from "../../config.json";
import Carousel from "../Carousel";
import useIsInViewport from "../../utils/isInViewport";
import { useDispatch } from "react-redux";
import { UPDATE_VIEW } from "../../utils/actions";

const workCards = (first, second) => (
  <Grid
    container
    spacing={5}
    direction="row"
    justifyContent="center"
    marginBottom={"6px"}>
    {data.slice(first, second).map((work) => (
      <Grid item key={work.title}>
        <Card
          sx={{
            width: 300,
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
  const theme = useTheme();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [filterAmt, setFilterAmt] = useState({
    rowOne: 3,
    rowTwoStart: 3,
    rowTwoEnd: 6,
  });
  const Tablet = useMediaQuery("(max-width:1863px)");
  const Mobile = useMediaQuery("(max-width:914px)");
  const ref = useRef(null);

  const isInView = useIsInViewport(ref);

  useEffect(() => {
    if (isInView) {
      dispatch({
        type: UPDATE_VIEW,
        isInView: "work",
      });
    }
  }, [dispatch, isInView]);

  useEffect(() => {
    if (Tablet) {
      setFilterAmt({ ...filterAmt, rowOne: 2, rowTwoStart: 2, rowTwoEnd: 4 });
    }
    if (!Tablet) {
      setFilterAmt({ ...filterAmt, rowOne: 3, rowTwoStart: 3, rowTwoEnd: 6 });
    }
  }, [Tablet]);

  return (
    <div ref={ref} id="work">
      {!Mobile ? (
        <Box
          sx={{ width: "70%", margin: "auto", marginBottom: "10em" }}>
          <Typography
            gutterBottom
            component="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              fontWeight: "bold",
            }}>
            Work Showcase
            <>
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
                      backgroundColor: `${theme.palette.primary.main}`,
                      marginLeft: "20px",
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
                      backgroundColor: `${theme.palette.primary.main}`,
                      marginLeft: "20px",
                    }}
                  />
                </Tooltip>
              )}
            </>
          </Typography>
          <Box>
            {workCards(0, filterAmt.rowOne)}
            <Box sx={{ overflow: "hidden" }}>
              <Slide
                direction="down"
                in={expanded}
                timeout={{ enter: 1000, exit: 500 }}
                unmountOnExit>
                {workCards(filterAmt.rowTwoStart, filterAmt.rowTwoEnd)}
              </Slide>
            </Box>
            <Button
              variant="outlined"
              href="https://github.com/PandolfoM"
              target="_blank"
              sx={{ display: "flex", width: "10rem", margin: "auto" }}>
              Show All
            </Button>
          </Box>
        </Box>
      ) : (
        <Box id="work" sx={{ width: "100%", marginBottom: "3em" }}>
          <Typography
            gutterBottom
            component="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              fontWeight: "bold",
            }}>
            Work Showcase
          </Typography>
          <Box>
            <Carousel />
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Work;
