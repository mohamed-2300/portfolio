// components/About.tsx
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20">
        <h1 className="text-center text-[30px] pb-5 md:text-3xl lg:text-5xl font-bold">
        About{" "}
        <span className="text-purple-300">Me</span>
      </h1>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-gray-700 dark:text-gray-300 max-w-xl">
            Hi! I&apos;m Mohamed Ait Bourice, a passionate full-stack developer specialized in building modern web applications using React, Next.js, Laravel, and Tailwind CSS. I love creating clean, user-friendly experiences and constantly learning new technologies.
          </p>
        </div>

        <div className="w-48 h-48 relative overflow-hidden shadow-lg">
          <Image
            src="/myImage.png"
            alt="Mohamed Ait Bourice"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
