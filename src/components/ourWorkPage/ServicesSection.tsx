"use client";

import { projects } from "@/collections/projectShowCase";
import { CldImage } from "next-cloudinary";

export default function ServicesSection() {
  return (
    <section className="h-full w-full px-4 bg-black text-white ">
      <div className="max-w-7xl mx-auto grid place-content-center mt-28">
        <h2 className="uppercase text-2xl mb-8">
          {" "}
          <span className="text-yellow-400 uppercase">&#8226;</span>Services
        </h2>
        <p className="text-5xl leading-[3.5rem]">
          {" "}
          Unlock your brand potential and drive innovation with our expert solutions.
          {" "}
        </p>
      </div>
      <div className="grid gap-1 mt-20">
        {projects.map((project) => (
          <div key={project.id} className=" bg-slate-100 h-full">
            <CldImage
              src={project.ProjectImg}
              height="200"
              width="1900"
              sizes="100vw"
              alt={project.projectName}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
