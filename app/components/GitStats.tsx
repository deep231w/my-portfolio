"use client";
import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import "../gitstats.css"; // your custom css

export default function GitHubGraph() {
  return (
    <Box >
      <GitHubCalendar
        username="deep231w"
        hideColorLegend
        hideMonthLabels
        blockSize={7.8}
        blockMargin={0}
      />
    </Box>
  );
}