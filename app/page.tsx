import { Approach } from "@/components/Approach";
import { Clients } from "@/components/Clients";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
import  {RecentProjects}  from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome, FaFolder, FaEnvelope } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";


export default function Home() {
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
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
   );
}
