"use client";
import { workCards } from "@/collections/availableWorkCards";
import { CldImage } from "next-cloudinary";
import React from "react";

export default function AvailableSection() {
  return (
    <section className="h-full w-full px-4 mt-28 ">
      <div className="max-w-4xl mx-auto grid place-content-center">
        <h2 className="uppercase text-xl lg:text-2xl mb-8">
          {" "}
          <span className="text-amber-400 uppercase">&#8226;</span>Available for
          work
        </h2>
        <p className=" text-3xl lg:text-5xl leading-[2.5rem] lg:leading-[3.5rem]">
          {" "}
          We blend{" "}
          <span className="bg-amber-400 px-1">creativity with purpose,</span>
          creating visuals that are as functional as they are
          <br className="hidden lg:block" /> beautiful, ensuring that they contribute to
          <br className="hidden lg:block" /> the overall success of the brand.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        {workCards.map((work) => (
          <div
            key={work.id}
            className="rounded-md bg-gradient-to-b from-slate-600 to-slate-900 h-full px-8 py-16 text-white flex flex-col justify-end space-y-8 "
          >
            <CldImage
              src={work.imageRef}
              height="200"
              width="200"
              sizes="100vw"
              alt={work.title}
              className="mx-auto"
            />
            <h3 className="text-xl font-medium">{work.title}</h3>
            <p className="">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
