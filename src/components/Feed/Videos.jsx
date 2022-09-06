import React from "react";
import { Stack, Box, Grid } from "@mui/material";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
// import { Loader } from "../components";
import Loader from "../Video/Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
   
    <Box sx={{display: 'flex', flexWrap:'wrap', justifyContent: 'center'}}>

      {videos.map((item, index) => (
      
          <Box sx={{display:'flex', flexWrap:'wrap' }} key={index} >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
      
      ))}
    </Box>


  );
};

export default Videos;
