import { workCards } from "@/collections/availableWorkCards";
import * as motion from "framer-motion/client";
import CloudinaryImage from "../CloudinaryImage";

export default function AvailableSection() {
  return (
    <section className="h-full w-full px-4 pt-28 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.0, ease: "easeInOut" }}
          viewport={{ once: true }}
          className=" max-w-4xl mx-auto grid place-content-center"
        >
          <h2 className="uppercase text-xl lg:text-2xl mb-8">
            {" "}
            <span className="text-amber-400 uppercase pr-2">&#8226;</span>
            Available for work
          </h2>
          <p className=" text-3xl lg:text-5xl leading-[2.5rem] lg:leading-[3.5rem]">
            {" "}
            We blend{" "}
            <span className="bg-amber-400 text-white px-1 mr-1">
              creativity with purpose,
            </span>
            creating visuals that are as functional as they are
            <br className="hidden lg:block" /> beautiful, ensuring that they
            contribute to
            <br className="hidden lg:block" /> the overall success of the brand.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
          {workCards.map((work) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.0, ease: "easeInOut" }}
              viewport={{ once: true }}
              key={work.id}
              className="rounded-xl bg-gradient-to-b from-slate-600 to-slate-900 h-full px-8 py-16 text-white flex flex-col justify-end space-y-8 "
            >
              <CloudinaryImage
                height={200}
                width={200}
                sizes="100vw"
                alt={work.title}
                src={work.imageRef}
                classNames="object-cover mx-auto h-40 w-40"
              />

              <h3 className="text-xl font-medium">{work.title}</h3>
              <p className="">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
