"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageCurtain() {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  // when route changes, briefly mount the curtain
  useEffect(() => setKey(pathname), [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        key={key + "-curtain"}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.65, duration: 0.25 }}
        className="pointer-events-none fixed inset-0 z-[9998]"
      >
        {/* left & right curtains */}
        <motion.div
          initial={{ x: "0%" }} animate={{ x: "-100%" }} exit={{ x: "-100%" }}
          transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
          className="absolute inset-y-0 left-0 w-1/2 bg-[#cbff00]"
        />
        <motion.div
          initial={{ x: "0%" }} animate={{ x: "100%" }} exit={{ x: "100%" }}
          transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
          className="absolute inset-y-0 right-0 w-1/2 bg-[#9fff00]"
        />
        {/* center logo punch */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="absolute inset-0 grid place-items-center"
        >
          <img src="/logo.png" alt="DNA" className="h-16 w-auto drop-shadow-xl" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
