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
          <p className="text-gray-700 dark:text-gray-300 max-w-xl text-justify">
            Hi, I&apos;m Mohamed Ait Bourice, a full-stack web developer from
            Morocco. I love building modern and responsive websites using
            technologies like React.js, Next.js, Tailwind CSS, Express.js,
            Laravel, MySQL, and MongoDB. I recently finished an internship where
            I worked on several real-world projects, including developing a
            full-featured travel agency app from scratch and creating
            WordPress-based sites. During this experience, I also learned about
            SEO and DevOps fundamentals, which helped me gain a broader
            understanding of how websites perform and scale. I&apos;m passionate
            about crafting interfaces that are not only functional but also
            visually engaging. I often use libraries like Aceternity UI and
            shadcn/ui to speed up development while keeping a high-end design
            aesthetic. I also enjoy adding fluid motion and interactivity using
            GSAP, making the user experience dynamic and alive. I like to say
            that I don&apos;t just code — I vibe while coding. Whether I&apos;m
            working solo or with a team, I bring energy, creativity, and a
            problem-solving mindset to every project. Right now, I&apos;m
            focused on improving my skills, building exciting new projects, and
            looking for new opportunities to grow as a developer. If you&apos;d
            like to work together or just connect, feel free to reach out!
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
