import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { Videos, ChannelCard } from "../components";

import { fetch } from "../api/api";

const Channel = () => {
  const [channel, setChannel] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(videos);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetch(`channels?part=snippet&id=${id}`);

      setChannel(data?.items[0]);

      const videosData = await fetch(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box sx={{}}>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          flexDirection: { md: "row" },
        }}
      >
        <Box sx={{}}>
          <ChannelCard channel={channel} />
        </Box>
        <Box sx={{ marginRight: { md: "60px" }, marginBottom: "40px" }}>
          <Typography>Subscribe</Typography>
        </Box>
      </Stack>

      <Box p={2} display="flex">
        <Box />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default Channel;
