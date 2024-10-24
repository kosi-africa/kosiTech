"use client";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import CloudinaryImage from "../CloudinaryImage";

export default function ReadyCTASection() {
  const pathname = usePathname();
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.0, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="h-[100vh] w-full grid place-content-center relative"
    >
      <CloudinaryImage
        height={900}
        width={1400}
        sizes="100vw"
        alt="ready cta bg img"
        // src="kosi-tech/ReadyCTASection/readyCtaBg_ryilh6"
        src={
          pathname == "/services"
            ? "kosi-tech/ReadyCTASection/readyCTADarkBg_ykejm6"
            : "kosi-tech/ReadyCTASection/readyCtaBg_ryilh6"
        }
        classNames="object-cover h-screen w-screen absolute top-0 left-0 -z-20"
      />
      <div
        className={clsx(
          "absolute top-0 left-0 h-screen w-screen -z-10",
          pathname == "/services"
            ? "bg-gradient-to-b from-black/5  via-black/80 via-60% to-black/5 text-white"
            : "bg-gradient-to-b from-slate-100 via-transparent to-slate-100"
        )}
      ></div>
      <h1
        className={clsx(
          "text-center text-pretty uppercase font-bold text-4xl lg:text-6xl leading-[3rem] lg:leading-[4.5rem]  mt-28 z-0",
          pathname == "/services" ? "text-white" : "text-black"
        )}
      >
        Ready to elevate <br /> your brand with <br /> KOSI TECH?
      </h1>
      <Button
        asChild
        className="bg-red-600 hover:bg-red-700 text-white w-32 mx-auto my-8 z-0 transition ease-in hover:scale-105"
      >
        <Link href="/contact-us">
          <span className="bg-white text-red-600 px-1 mx-1 rounded-md">
            &#8594;
          </span>
          Get Started
        </Link>
      </Button>
    </motion.section>
  );
}
