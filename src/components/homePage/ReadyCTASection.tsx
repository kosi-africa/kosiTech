"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import { Button } from "../ui/button";

export default function ReadyCTASection() {
  return (
    <section className="h-[80vh] w-full grid place-content-center relative">
         <CldImage
         src="kosi-tech/ReadyCTASection/readyCtaBg_ryilh6"
         height={900}
         width={900}
         sizes="100vw"
         alt="ready cta bg img"
         className="object-cover h-full w-full absolute -z-10"
        />
      <h1 className="text-center uppercase font-bold text-6xl leading-[4.5rem]  mt-28 z-0">
        Ready to elevate <br /> your brand with <br /> KOSI TECH?
      </h1>
      <Button className="bg-red-600 hover:bg-red-800 text-white w-32 mx-auto my-8">
        <span className="bg-white text-red-600 px-1 mx-1 rounded-md">
        &#8594;
        </span>
        Get Started
      </Button>
    </section>
  );
}
