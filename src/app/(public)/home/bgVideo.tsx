"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 300], [0.2, 0.6]);
  const bgColor = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`;
  const blurValue = useTransform(scrollY, [0, 400], [0, 50]);
  const blurFilter = useMotionTemplate`blur(${blurValue}px)`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoFailed(true);
        });
      }
    };

    tryPlay();

    const onUserInteract = () => {
      tryPlay();
    };

    window.addEventListener("click", onUserInteract);
    window.addEventListener("touchstart", onUserInteract);
    window.addEventListener("scroll", onUserInteract);

    return () => {
      window.removeEventListener("click", onUserInteract);
      window.removeEventListener("touchstart", onUserInteract);
      window.removeEventListener("scroll", onUserInteract);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <motion.div className="absolute inset-0" style={{ filter: blurFilter }}>
        {!videoFailed ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/background.jpeg"
            alt="Background Video"
            fill
            className="object-cover"
          />
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--ds-primary-1)] to-[var(--ds-secondary-1)] opacity-60 pointer-events-none" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: bgColor }}
      />
    </div>
  );
}
