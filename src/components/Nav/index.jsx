import React from "react";
import { useMediaQuery } from "@mui/material";
import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";

function Nav() {
  const Mobile = useMediaQuery("(max-width:914px)");
  return <>{!Mobile ? <DesktopNav /> : <MobileNav />}</>;
}

export default Nav;
