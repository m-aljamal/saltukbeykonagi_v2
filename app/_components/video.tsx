"use client";

import React, { useRef } from "react";

interface HoverVideoProps {
  src: string;
  type: string;
  
  
  muted?: boolean;
}

export default function Video({
  src,
  type,
  muted,
  
}: HoverVideoProps) {
  return (
    <video className="h-[400px]"  muted={muted} controls>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}
