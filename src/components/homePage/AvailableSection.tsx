'use client'
import { workCards } from "@/collections/availableWorkCards";
import { CldImage } from "next-cloudinary";
import React from "react";

export default function AvailableSection() {
  return (
    <section className="h-full w-full px-4 ">
      <div className="max-w-4xl mx-auto grid place-content-center">
        <h2 className="uppercase text-2xl mb-8">
          {" "}
          <span className="text-yellow-400 uppercase">&#8226;</span>Available for work
        </h2>
        <p className="text-5xl leading-[3.5rem]">
          {" "}
          We blend <span className="bg-yellow-400 px-1">creativity with purpose,</span>creating visuals that are as
          functional as they are<br/> beautiful, ensuring that they contribute to<br/> the
          overall success of the brand.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
      {
        workCards.map(( work=>(
            <div key={work.id} className="rounded-md bg-slate-800 h-full p-8 text-white flex flex-col justify-end space-y-8 ">
                <CldImage 
                    src={work.imageRef}
                    height='200'
                    width='200'
                    sizes="100vw"
                    alt={work.title}
                    className="mx-auto"
                />
                <h3 className="text-xl font-medium">{work.title}</h3>
                <p className="">{work.description}</p>
            </div>

        )))
      }
      </div>
    </section>
  );
}