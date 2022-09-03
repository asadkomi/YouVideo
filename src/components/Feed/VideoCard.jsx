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
        // width: { xs: "100%", sm: "358px", md: "320px" },
        width: "100%",
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{
            // width: { xs: "100%", sm: "358px", md: "320px" },
            with: "100%",
            height: 180,
          }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#e7e7e7", height: "106px" }}>
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
