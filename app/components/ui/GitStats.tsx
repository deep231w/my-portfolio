"use client";
import GitHubCalendar from "react-github-calendar";

export default function () {
  return (
    <div className="flex items-center justify-center w-full max-w-6xl mx-auto p-5 border-4 border-white rounded-lg text-white">
      <GitHubCalendar
        username="deep231w"
        blockSize={13}  // Increases the size of contribution squares
        blockMargin={5} // Adds spacing between squares
        fontSize={16}   // Adjusts font size for better readability
      />
    </div>
  );
}
