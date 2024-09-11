"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import { Button } from "../ui/button";

export default function ReadyCTASection() {
  return (
    <section className="h-[80vh] w-full grid place-content-center relative">
      <CldImage
        src="kosi-tech/ReadyCTASection/readyCtaBg_ryilh6"
        height="900"
        width="1400"
        sizes="100vw"
        alt="ready cta bg img"
        className="object-cover h-screen w-screen absolute top-0 left-0 -z-20"
      />
      <div className="absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-slate-100 via-transparent to-slate-100 -z-10"></div>
      <h1 className="text-center text-pretty uppercase font-bold text-4xl lg:text-6xl leading-[3rem] lg:leading-[4.5rem]  mt-28 z-0">
        Ready to elevate <br /> your brand with <br /> KOSI TECH?
      </h1>
      <Button className="bg-red-600 hover:bg-red-700 hover:shadow-xl text-white w-32 mx-auto my-8 z-0">
        <span className="bg-white text-red-600 px-1 mx-1 rounded-md">
          &#8594;
        </span>
        Get Started
      </Button>
    </section>
  );
}
