"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const { scrollY } = useScroll();
  const stopAt = 600;
  const resumeAt = 320;
  const bgOpacity = useTransform(scrollY, [0, 300, stopAt, stopAt + 200], [0.35, 0.9, 1, 1]);
  const bgGradient = useMotionTemplate`linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,${bgOpacity}) 100%)`;
  const blurValue = useTransform(scrollY, [0, 800], [0, 100]);
  const blurFilter = useMotionTemplate`blur(${blurValue}px)`;
  const videoOpacity = useTransform(scrollY, [0, stopAt], [1, 0]);
  const gradientColorOpacity = useTransform(videoOpacity, [0, 1], [0, 0.65]);

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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const video = videoRef.current;
    if (!video) return;

    if (latest > stopAt) {
      if (!video.paused) {
        video.pause();
      }
    } else if (latest < resumeAt) {
      if (video.paused) {
        video.play().catch(() => setVideoFailed(true));
      }
    }
  });

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[var(--ds-neutral-6)]" />

      <motion.div className="absolute inset-0" style={{ filter: blurFilter, opacity: videoOpacity }}>
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

      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--ds-primary-1)] to-[var(--ds-secondary-1)]"
        style={{ opacity: gradientColorOpacity }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: bgGradient, opacity: videoOpacity }}
      />
    </div>
  );
}
