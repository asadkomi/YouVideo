import React from "react";
import { Stack, Box, Grid } from "@mui/material";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
// import { Loader } from "../components";
import Loader from "../Video/Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Grid container spacing={2} direction={direction}>
      {videos.map((item, index) => (
        <Grid item xs={12} sm={6} md={3}>
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
