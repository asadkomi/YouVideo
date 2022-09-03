import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { fetch } from "../api/api";
import { Loader, Videos } from "../components";

const Video = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetch(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Grid container spacing={2}>
          <Grid item md={9}>
            <Box sx={{ width: "100%", position: "sticky", top: "60px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="#000" variant="h6" fontWeight="bold" p={2}>
                {title}
              </Typography>

              {/* <Grid container spacing={2} direction="column" py={1} px={2}>
                <Grid item xs={12} md={6}>
                  <Link to={`/channel/${channelId}`}>
                    <Typography
                      variant={{ sm: "subtitle1", md: "h6" }}
                      color="#000"
                    >
                      {channelTitle}
                      <CheckCircleIcon
                        sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                      />
                    </Typography>
                  </Link>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Grid>
              </Grid> */}

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#000" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#000"
                  >
                    {channelTitle}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  gap="20px"
                  alignItems="center"
                >
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item md={3} mt={2}>
            <Box
              px={2}
              py={{ md: 1, xs: 5 }}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Videos videos={videos} direction="column" />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Video;
