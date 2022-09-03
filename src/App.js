import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";

import logo from "./logo.svg";
import "./App.css";

import { Navbar, Feed, Video, Channel, Search } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<Video />} />
          <Route path="/channel/:id" exact element={<Channel />} />
          <Route path="/search/:searchTerm" exact element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
