import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useParams } from "react-router-dom";

import { Videos, Topbar } from "../components";
import { fetch } from "../api/api.js";

const Search = () => {
  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowX: "auto",
        flex: 2,
        justifyContent: "center",
        padding: { md: "25px" },
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={5} sx={{}}>
        Result for <span style={{ color: "#5271ff " }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Search;
