import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import Searchbar from "../components/Searchbar/Searchbar.jsx";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        backgroundColor: "white",
        zIndex: 999,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" height={45} />
      </Link>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
