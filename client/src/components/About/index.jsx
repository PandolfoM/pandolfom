import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import pic from "../../assets/me.png";
import useIsInViewport from "../../utils/isInViewport";
import { useDispatch } from "react-redux";
import { UPDATE_VIEW } from "../../utils/actions";
import { useTheme } from "@emotion/react";

function About() {
  const theme = useTheme();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const Mobile = useMediaQuery("(max-width:914px)");
  const [widthData, setWidthData] = useState({
    width: "55%",
    flexDirection: "row-reverse",
  });

  const isInView = useIsInViewport(ref);

  useEffect(() => {
    if (isInView) {
      dispatch({
        type: UPDATE_VIEW,
        isInView: "about",
      });
    }
  }, [dispatch, isInView]);

  useEffect(() => {
    if (Mobile) {
      setWidthData({
        ...widthData,
        width: "100%",
        flexDirection: "column-reverse",
      });
    } else {
      setWidthData({
        ...widthData,
        width: "55%",
        flexDirection: "row-reverse",
      });
    }
  }, [Mobile]);

  return (
    <>
      <Box
        ref={ref}
        id="about"
        sx={{ width: widthData.width, margin: "auto", marginBottom: "10em" }}>
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
          About Me
        </Typography>
        <Card
          sx={{
            margin: "auto",
            color: "white",
            maxWidth: "1000px",
          }}>
          <CardContent sx={{ margin: "10px", padding: "0px !important" }}>
            <CardMedia
              component={"img"}
              image={pic}
              alt="Matthew Pandolfo"
              sx={{
                width: "200px",
                height: "auto",
                float: "right",
                margin: "5px 5px 5px 10px",
                borderRadius: "3px",
              }}
            />
            <Typography component={"div"} variant="p" sx={{}}>
              I'm Matthew Pandolfo, a recent graduate from the UConn Coding
              Bootcamp with a passion for Full Stack Web Development. With a
              focus on expanding my skillset and knowledge base, I have honed my
              abilities in a wide range of technologies including JavaScript,
              HTML, CSS, React, MongoDB, Express, MySQL, GraphQL, and more. I am
              eager to put my newly acquired skills to work and am actively
              seeking opportunities to start my career as a Full Stack Web
              Developer. I am a continuous learner and always strive to expand
              my knowledge and expertise in the field.
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            a: {
              margin: "0 10px",
              opacity: "40%",
              color: "gray",
              transition: "all .3s linear",
              textDecoration: "none",
              fontSize: "50px",
              cursor: "pointer",
            },
            "a:hover": {
              color: theme.palette.primary.main,
              opacity: "100%",
            },
          }}>
          <Typography
            component={"a"}
            variant="a"
            href="https://www.linkedin.com/in/matthew-pandolfo-22b6b1192/"
            target="_blank"
            sx={{ fontWeight: "700" }}>
            Linkedin
          </Typography>
          <Typography
            component={"a"}
            variant="a"
            href="https://github.com/PandolfoM"
            target="_blank"
            sx={{ fontWeight: "700" }}>
            GitHub
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
