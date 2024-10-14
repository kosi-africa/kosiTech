"use client";

import { logos } from "@/collections/partnerLogos";
// import { Button } from "../ui/button";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="h-full w-full  mt-40 mb-40"
    >
      <div className="max-w-7xl px-4 mx-auto">
        <h2 className="uppercase text-2xl text-center mb-8">
          {" "}
          <span className="text-green-400 uppercase">&#8226;</span>Partners
        </h2>
      </div>
      <div className="flex space-x-16 overflow-hidden">
        <div className="flex space-x-24 items-center   motion-safe:animate-hortional-scroll-loop">
          {logos.map((item) => (
            <div key={item.id} className="grid place-content-center">
              <CldImage
                height="200"
                width="200"
                src={item.logoRef}
                alt={item.companyName}
                className="object-cover max-w-none"
              />
            </div>
          ))}
        </div>
        <div
          className="flex space-x-24 items-center   motion-safe:animate-hortional-scroll-loop"
          aria-hidden="true"
        >
          {logos.map((item) => (
            <div key={item.id} className="grid place-content-center">
              <CldImage
                height="200"
                width="200"
                src={item.logoRef}
                alt={item.companyName}
                className="object-cover max-w-none"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-yellow-500 py-4 px-4 mt-12 flex flex-wrap gap-4 justify-center items-center">
        <p className="text-white text-center italic">
          We are always happy to collaborate with others for greater impact!{" "}
        </p>
        <Button className="bg-white hover:bg-yellow-700 hover:text-white text-yellow-500 transition ease-in hover:scale-105 ">
          Become a Partner
        </Button>
      </div> */}
    </motion.section>
  );
}
