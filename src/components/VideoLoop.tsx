import { useState, useRef, useEffect } from "react";

const VideoLoop = () => {
  const videos = ["1.mp4", "2.mp4", "3.mp4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null); // 

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }
    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [currentIndex]);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <>
    
    <video 
      className="video-player"
      ref={videoRef}
      width="800"
      height="450"
      autoPlay
      muted
      key={videos[currentIndex]} // Force reloading video on change
    >
      <source src={videos[currentIndex]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </>
  );
};

export default VideoLoop;
