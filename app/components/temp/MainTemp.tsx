"use client"
import { useEffect, useRef } from "react";

export default function MainTemp() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true; // allow autoplay
      audio.play().then(() => {
        // once it starts, unmute immediately
        audio.muted = false;
      }).catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    }
  }, []);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-black">
      <audio ref={audioRef} src="/shock.mp3" loop />
      <img className="cat-img" src="/cat.jpg" alt="cat" />
      <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
        “Just because I code doesn’t mean I can fix your WI/FI.”
      </h1>
    </div>
  );
}
