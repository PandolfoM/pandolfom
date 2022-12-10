import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PeopleIcon from "@mui/icons-material/People";
import { HashLink } from "react-router-hash-link";

function MobileNav() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List sx={{a:{textDecoration: "none", color: "white"}}}>
        <HashLink to="/#home">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </HashLink>
        <HashLink to="/#work">
          <ListItemButton>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Work"} />
          </ListItemButton>
        </HashLink>
        <HashLink to="/#about">
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </HashLink>
        <HashLink to="/contact">
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </HashLink>
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: "fixed", right: 0, zIndex: 100 }}>
      <IconButton size="large" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {/* <p>Hello World</p> */}
        {list()}
      </SwipeableDrawer>
    </Box>
  );
}

export default MobileNav;
