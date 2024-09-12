"use client";
import { projects } from "@/collections/projectShowCase";
import { CldImage } from "next-cloudinary";
import React from "react";

export default function ProjectShowCaseSection() {
  return (
    <section className="h-full w-full px-4 ">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto grid place-content-center mt-28">
          <h2 className="uppercase text-xl lg:text-2xl mb-8">
            {" "}
            <span className="text-green-400 uppercase">&#8226;</span>Project
            Showcase
          </h2>
          <p className="text-3xl lg:text-5xl leading-[2.5rem] lg:leading-[3.5rem]">
            {" "}
            Unlock your brand potential and drive <br className="hidden md:block" />
            innovation with our{" "}
            <span className="bg-green-400 px-1">expert solutions</span>
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

      </div>
    </section>
  );
}
