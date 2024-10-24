import { projects } from "@/staticData/projectShowCase";
import * as motion from "framer-motion/client";
import CloudinaryImage from "../CloudinaryImage";

export default function ProjectShowCaseSection() {
  return (
    <section className="h-full w-full px-4 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.0, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid place-content-center mt-28"
        >
          <h2 className="uppercase text-xl lg:text-2xl mb-8">
            {" "}
            <span className="text-green-400 uppercase pr-2">&#8226;</span>
            Project Showcase
          </h2>
          <p className="text-3xl lg:text-5xl leading-[2.5rem] lg:leading-[3.5rem]">
            {" "}
            Unlock your brand potential and drive{" "}
            <br className="hidden md:block" />
            innovation with our{" "}
            <span className="bg-green-400 text-white px-1">
              expert solutions
            </span>
          </p>
        </motion.div>
        <div className="grid gap-1 mt-20">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              key={project.id}
              className=" bg-slate-100 h-full"
            >
              <CloudinaryImage
                height={200}
                width={1900}
                sizes="100vw"
                alt={project.projectName}
                src={project.ProjectImg}
                classNames=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
