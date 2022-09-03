import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";

import { Videos, Topbar } from "../components";
import { fetch } from "../api/api.js";

const Feed = () => {
  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`search?part=snippet&q=${selected}`).then((data) =>
      setVideos(data.items)
    );
  }, [selected]);

  return (
    <Stack sx={{ flexDirection: "column" }}>
      <Box>
        <Topbar selected={selected} setSelected={setSelected} />
      </Box>

      <Box p={2} mt={15} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          sx={{ color: "black" }}
        >
          {selected} <span style={{ color: "#5271ff" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
