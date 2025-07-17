import React from "react";
import Image from "next/image";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full relative pb-10 mb-[100px] md:mb-6" id="contact">
      <Image
        src="/footer-grid.svg"
        alt="grid"
        fill
        className="w-full h-full opacity-50 object-cover"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-center text-[30px] md:text-3xl lg:text-5xl font-bold">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:mohamedaitbourcie@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-2 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {" "}
          Copyright © 2025 Mohamed
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              style={{
                background:
                  "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
              }}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-slate-600"
            >
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                <Image alt={profile.img} src={profile.img} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;