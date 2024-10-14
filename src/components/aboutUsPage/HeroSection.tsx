import * as motion from "framer-motion/client";
import CloudinaryImage from "../CloudinaryImage";

export default function heroSection() {
  return (
    <section className="h-screen w-full grid place-content-center relative">
      <CloudinaryImage
        height={900}
        width={1400}
        sizes="100vw"
        priority
        alt="about us hero img bg"
        src="kosi-tech/about-us-hero-section/about-us-hero-bg.jpg_lkoetj"
        classNames="object-cover absolute h-screen w-screen top-0 left-0 -z-20"
      />
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen bg-gradient-to-b  from-slate-100 via-transparent to-slate-100"></div>
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          initial={{ width: 0 }}
          animate={{
            width: "100%",
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-center uppercase font-bold text-4xl lg:text-6xl leading-[3rem] lg:leading-[4.5rem] overflow-hidden whitespace-pre-line md:whitespace-nowrap -mt-40 px-4 z-0"
        >
          We recognized a gap between <br className="hidden md:block" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: "#eab308",
              color: "#fff",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" px-2 "
          >
            African Innovators
          </motion.span>{" "}
          and <br className="hidden md:block" /> global opportunities
        </motion.h1>
      </motion.div>
    </section>
  );
}
