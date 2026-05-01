"use client";
import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import "../gitstats.css"; // your custom css

export default function GitHubGraph() {
  return (
    <Box py={3}>
      <GitHubCalendar
        username="deep231w"
        hideColorLegend
        hideMonthLabels
      />
    </Box>
  );
}