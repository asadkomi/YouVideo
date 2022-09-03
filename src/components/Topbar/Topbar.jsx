import React from "react";
import { Box, Stack } from "@mui/material";

import "./Topbar.css";
import { categories } from "../../helper/Utils";

const Topbar = ({ selected, setSelected }) => {
  return (
    <Stack
      direction="row"
      p={2}
      sx={{
        overflowX: "hidden",
        flexDirection: "row",

        position: "fixed",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      {categories.map((category) => (
        <button
          className="btn"
          onClick={() => setSelected(category.name)}
          style={{
            background: category.name === selected && "#5271ff ",
            marginRight: "5px",
          }}
          key={category.name}
        >
          <span
            style={{ color: category.name === selected ? "white" : "black" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Topbar;
