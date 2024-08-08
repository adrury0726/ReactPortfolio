import React, { useEffect } from "react";
import GalaxyBackground from "../../../images/GalaxyBackground.mp4";

/*Owner of video: AA-VFX
https://www.youtube.com/watch?v=aA6h2S_ydqI&list=PLj6XzcqwRpN5Hx6uTLDoTg2WEpDvu5hKu&index=3*/

const BackgroundVideo = () => {
  useEffect(() => {
    const videoElement = document.getElementById("background-video");

    videoElement.play();

    // Prevent video from opening in a new window on mobile
    videoElement.setAttribute("playsinline", "true");

    // Listen for mode changes and restart the video
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        videoElement.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="background-video">
      <video
        id="background-video"
        src={GalaxyBackground}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BackgroundVideo;
