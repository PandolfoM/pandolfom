import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircle2 } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography } from "@mui/material";

function Nav() {
  return (
    <Box sx={{ right: 100, position: "fixed"}}>
      <ul style={{listStyleType: 'none'}}>
        <li className="navbtn">
          <a href="#home">
            <Typography>Home</Typography>
            <FontAwesomeIcon icon={faCircle}/>
          </a>
        </li>
        <li className="navbtn">
          <a href="#work">
            <Typography>Work</Typography>
            <FontAwesomeIcon icon={faCircle}/>
          </a>
        </li>
        <li className="navbtn">
          <a href="#about">
            <Typography>About</Typography>
            <FontAwesomeIcon icon={faCircle} />
          </a>
        </li>
      </ul>
    </Box>
  );
}


export default Nav;
