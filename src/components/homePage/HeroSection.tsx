"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen w-full grid place-content-center relative">
      <CldImage
        src="kosi-tech/about-us-hero-section/home-hero-bg.jpg_t8la6e"
        height="900"
        width="1400"
        sizes="100vw"
        priority
        alt="kosi tech home hero bg"
        className="object-cover h-screen w-screen absolute top-0 left-0  -z-20 "
      />
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen bg-gradient-to-b  from-slate-100 via-transparent to-slate-100"></div>
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-center text-pretty uppercase font-bold text-4xl lg:text-6xl leading-[3rem] lg:leading-[4.5rem] -mt-40 px-4 z-0">
          We are a
          <motion.span
            initial={{ opacity:0, x: -200, left: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              left: "100",
              backgroundColor: "#22c55e",
              color: "#fff",
            }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="px-2"
          >
            talent solution
          </motion.span>
          to <br className="hidden md:block" /> the global tech demand
        </h1>
      </motion.div>
    </section>
  );
}
