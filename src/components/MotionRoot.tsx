// src/components/MotionRoot.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

export default function MotionRoot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [reduced, setReduced] = useState<"never" | "always">("never");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches ? "always" : "never");
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return (
    <MotionConfig
      reducedMotion={reduced}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    >

      <AnimatePresence mode="wait">
        <PageFade key={pathname}>{children}</PageFade>
      </AnimatePresence>
    </MotionConfig>
  );
}

function PageFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      style={{ minHeight: "100dvh" }}
    >
      {children}
    </motion.main>
  );
}
