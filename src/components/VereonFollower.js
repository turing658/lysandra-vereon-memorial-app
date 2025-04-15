import React, { useEffect, useRef } from "react";
import vereonImg from "../assets/vereon-pixel.png"; // 确保你已经有这张图

const VereonFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const follower = followerRef.current;
      if (follower) {
        follower.style.left = `${e.clientX + 10}px`;
        follower.style.top = `${e.clientY + 10}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <img
      ref={followerRef}
      src={vereonImg}
      alt="Vereon"
      style={{
        position: "fixed",
        width: "40px",
        zIndex: 9999,
        pointerEvents: "none",
        transition: "top 0.1s ease, left 0.1s ease"
      }}
    />
  );
};

export default VereonFollower;
