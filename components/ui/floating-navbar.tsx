"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          y: visible ? 0 : -40,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          background: "linear-gradient(90deg, rgba(105, 113, 162, 0.3) 16%, rgba(39, 42, 60, 0.7) 37%)",
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 border-white/[0.2] items-center justify-center space-x-4 backdrop-blur-md",
          className
        )}
      >
        {navItems.map((navItem: { name: string; link: string; icon?: JSX.Element }, idx: number) => (
          <a
        key={`link=${idx}`}
        href={navItem.link}
        className={cn(
          "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-200"
        )}
          >
        {/* <img src={navItem.icon} alt={navItem.name} className="block h-[70px] sm:hidden" /> */}
        {/* <span className="hidden sm:block text-sm">{navItem.name}</span> */}
        <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};