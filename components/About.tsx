// components/About.tsx
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-15 px-4 w-full">
      <h1 className="text-center text-[30px] pb-15 md:text-3xl lg:text-5xl font-bold">
        About <span className="text-purple-300">Me</span>
      </h1>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-gray-300 max-w-xl text-justify">
            Hi, I&apos;m Mohamed Ait Bourice, a full-stack web developer from Morocco. I create modern, responsive websites using React.js, Next.js, Tailwind CSS, Laravel, and MongoDB.
            During my internship, I built real-world projects including a full travel agency app and WordPress sites, while also learning the fundamentals of SEO and DevOps.
            I love crafting smooth, interactive UIs with tools like GSAP, shadcn/ui, and Aceternity UI. I&apos;m always learning, building, and looking for new challenges.
            Let&apos;s build something great together!
          </p>
        </div>

        <div className="w-90 h-[400px] relative overflow-hidden rounded-2xl shadow-xl border border-white/10 dark:border-white/5 bg-gradient-to-b from-white/30 to-transparent dark:from-white/5">
          <Image
            src="/myImage.png"
            alt="Mohamed Ait Bourice"
            fill
            className="object-cover rounded-2xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
