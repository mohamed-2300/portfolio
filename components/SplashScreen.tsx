"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish(); // 🔥 Notify parent when done
    }, 2000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-3xl font-bold"
        >
          Mohamed Portfolio
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
