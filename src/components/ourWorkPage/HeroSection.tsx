"use client";
import { CldImage } from "next-cloudinary";

export default function HeroSection() {
  return (
    <section className="h-screen w-full grid place-content-center relative">
      <CldImage
        src="kosi-tech/about-us-hero-section/our-work-hero-bg.jpg_aximx0"
        height="1000"
        width="1900"
        sizes="100vw"
        priority
        alt="our work hero img bg"
        className=" object-cover absolute -z-10"
      />
      <h1 className="text-center uppercase font-bold text-6xl leading-[4.5rem]  z-0">
        WE PLACE EMPHASIS ON CREATING <br />
        <span className="bg-teal-500 text-white px-2">
          INNOVATIVE & SUSTAINABLE
        </span>
        <br /> TECH SOLUTIONS
      </h1>
    </section>
  );
}
