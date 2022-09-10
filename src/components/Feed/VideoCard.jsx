import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../helper/Utils";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{

        width: {xs:"355px",sm:'350px',md:'250px',lg:'300px',},
        marginRight: {sm:'10px'},
        marginBottom: '10px',
        boxShadow: "none",
        borderRadius: "none",
        
      
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{

            with: "100%",
            height: 180,
          }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#f8f8f8", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="h8" fontWeight="bold" color="#000">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#5271ff">
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
