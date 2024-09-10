'use client'
import React, { useRef, useEffect, useState } from "react";

const page = () =>
{

    const videoRef = useRef<any>(null);
  const [captureStream, setCaptureStream] = useState<any>(null);

  const displayMediaOptions = {
    video: {
      displaySurface: "browser",
    },
    audio: {
      suppressLocalAudioPlayback: false,
    },
    preferCurrentTab: false,
    selfBrowserSurface: "exclude",
    systemAudio: "include",
    surfaceSwitching: "include",
    monitorTypeSurfaces: "include",
  };

  useEffect(() => {
    const startCapture = async () => {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        setCaptureStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    };

    startCapture();
  }, []);
    
    return (
        <>
        <h1>Welcome to the dashboard!</h1>
        <video ref={videoRef} autoPlay style={{ width: "100%", height: "auto" }} />
        </>
        
    );
}

export default page;