'use client'
import { CldImage } from "next-cloudinary";

export default function heroSection() {
  return (
    <section className="h-screen w-full grid place-content-center relative">
        <CldImage
        src="kosi-tech/about-us-hero-section/about-us-hero-bg.jpg_lkoetj"
        height='2000'
        width='1900'
        sizes="100vw"
        priority
        alt="about us hero img bg"
        className=" object-cover absolute -z-10"
        />
      <h1 className="text-center uppercase font-bold text-6xl leading-[4.5rem]  z-0">
       We recognized a gap between <br />
       <span className="bg-yellow-500 px-2">African Innovators</span> and{" "}
        <br /> global opportunities
      </h1>
    </section>
  );
}
