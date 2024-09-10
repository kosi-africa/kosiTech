import React from "react";

export default function ProgressSection() {
  return (
    <section className="h-full w-full px-4">
      <div className=" text-center grid place-content-center mt-36">
        <h2 className="uppercase text-2xl mb-8">
          {" "}
          <span className="text-red-800 uppercase">&#8226;</span>Progress
        </h2>
      </div>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-4">
        <div className=" text-center">
          <p className="text-5xl font-semibold text-red-800">35+</p>
          <p className="w-64">
            Number of early partnerships with overseas clients
          </p>
        </div>
        <div className=" text-center">
          <p className="text-5xl font-semibold text-red-800">10+</p>
          <p className="w-64">
            Number of developers and designers already on board
          </p>
        </div>
        <div className=" text-center">
          <p className="text-5xl font-semibold text-red-800">30+</p>
          <p className="w-64">
            Success stories and testimonials from early adopters
          </p>
        </div>
      </div>
      <div className="text-center grid place-content-center mt-20">
        <p className="text-5xl leading-[3.5rem]">
          {" "}
          <span className="bg-red-800 text-white px-1">Future milestones: </span>
          Expand talent, <br />
          increase client base, launch <br />
          training programs
        </p>
      </div>
    </section>
  );
}
