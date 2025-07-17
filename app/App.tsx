"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome, FaFolder, FaEnvelope } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import dynamic from "next/dynamic";

// Lazy loaded components
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
// const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });


export default function App() {
const navItems = [
  { name: "About", link: "#about", icon: <FaHome /> },
  { name: "Projects", link: "#projects", icon: <FaFolder />  },
  { name: "Testimonials", link: "#testimonials", icon: <FaPeopleGroup />  },
  { name: "Contact", link: "#contact", icon: <FaEnvelope />  },
];
  return (
    <main className="relative overflow-clip bg-[#00031a] flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
   );
}
