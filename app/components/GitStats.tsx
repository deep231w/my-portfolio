"use client";
import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

export default function () {
  return (
    <Box py={3}>
      <GitHubCalendar
        username="deep231w"
        blockSize={13}  // Increases the size of contribution squares
        blockMargin={5} // Adds spacing between squares
        fontSize={16}   // Adjusts font size for better readability
      />
    </Box>
  );
}
