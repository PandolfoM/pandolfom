import React, { useEffect, useState } from "react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircle2 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

function DesktopNav() {
  const theme = useTheme();
  const state = useSelector((state) => state);

  const [currentEl, setCurrentEl] = useState({
    home: faCircle,
    work: faCircle,
    about: faCircle,
    contact: faCircle,
  });

  useEffect(() => {
    const view = state.isInView;
    if (view) {
      if (view === "home") {
        setCurrentEl({
          ...currentEl,
          home: faCircle2,
          work: faCircle,
          about: faCircle,
          contact: faCircle,
        });
      } else if (view === "work") {
        setCurrentEl({
          ...currentEl,
          home: faCircle,
          work: faCircle2,
          about: faCircle,
          contact: faCircle,
        });
      } else if (view === "about") {
        setCurrentEl({
          ...currentEl,
          home: faCircle,
          work: faCircle,
          about: faCircle2,
          contact: faCircle,
        });
      } else {
        setCurrentEl({
          ...currentEl,
          home: faCircle,
          work: faCircle,
          about: faCircle,
          contact: faCircle2,
        });
      }
    }
  }, [state]);
  
  return (
    <Box
      sx={{
        right: 100,
        position: "fixed",
        svg: { color: theme.palette.primary.main },
        p: { opacity: "70%" },
      }}>
      <ul style={{ listStyleType: "none" }}>
        <li className="navbtn">
          <HashLink to="/#home">
            <Typography>Home</Typography>
            <FontAwesomeIcon icon={currentEl.home} />
          </HashLink>
        </li>
        <li className="navbtn">
          <HashLink to="/#work">
            <Typography>Work</Typography>
            <FontAwesomeIcon icon={currentEl.work} />
          </HashLink>
        </li>
        <li className="navbtn">
          <HashLink to="/#about">
            <Typography>About</Typography>
            <FontAwesomeIcon icon={currentEl.about} />
          </HashLink>
        </li>
        <li className="navbtn">
          <Link to="/contact">
            <Typography>Contact Me</Typography>
            <FontAwesomeIcon icon={currentEl.contact} />
          </Link>
        </li>
      </ul>
    </Box>
  );
}

export default DesktopNav;
