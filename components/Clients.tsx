import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <div className="py-5" id="testimonials">
      <h1 className="text-center text-[30px] md:text-3xl lg:text-5xl font-bold">
        Kind words from
        <span className="text-purple-300"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10 max-lg:mt-10">
        <InfiniteMovingCards 
            items={testimonials}
            speed="slow"
            direction="right"
        />

        <div className="flex flex-wrap items-center mt-10 justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map(
                ({id, img, name, nameImg}) => (
                    <div key={id}
                    className="flex md:max-w-60 max-w-32 gap-2">
                        <img src={img} alt={name} className="md:w-10 w-5" />
                        <img src={nameImg} alt={name} className="md:w-24 w-20" />
                    </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};