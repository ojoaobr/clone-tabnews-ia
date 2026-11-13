"use client";

import dynamic from "next/dynamic";

const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Confetti() {
  return <ReactConfetti recycle={false} numberOfPieces={400} />;
}
