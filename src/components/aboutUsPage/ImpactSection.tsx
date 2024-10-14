
import { ArrowUpRight, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import * as motion from "framer-motion/client"
import CloudinaryImage from "../CloudinaryImage";

export default function ImpactSection() {
  return (
    <section className="h-full w-full px-4 md:px-12 mt-28">
      <div className="max-w-7xl mx-auto ">
        <motion.h2 
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8,delay:0.5, ease:'easeInOut'}}
          viewport={{once:true}}
        className="uppercase text-xl lg:text-2xl mb-8">
          {" "}
          <span className="text-green-400 uppercase">&#8226;</span>Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-3xl lg:text-5xl leading-[2.5rem] lg:leading-[3.5rem]">
              {" "}
              Reducing Brain Drain,
              <br className="hidden md:block" />
              <span className="bg-green-400 px-1">Empowering Africa</span>
            </p>
            <ul className="list-disc space-y-8 px-8">
              <li className="">
                Retaining talent in Africa while allowing them to work on global
                projects
              </li>
              <li className="">
                Empowering the next generation of African innovators
              </li>
              <li className="">
                Contributing to local economies and reducing the need for talent
                migration
              </li>
            </ul>
            {/* blog card  */}
            <div className="">
              <p className="text-xl text-slate-500 font-bold uppercase my-8">
                read our blog
              </p>
              <div className="border-none rounded-lg bg-stone-100  space-y-4 px-4 py-8">
                <div className="flex justify-between items-center">
                  <p className="text-lg uppercase">Tech</p>
                  <p className="flex items-center">
                    <Calendar className=" w-6 h-6 px-1" />
                    SEP 9, 2024
                  </p>
                </div>
                <p className="text-2xl text-black font-bold">
                  Empowering the next generation of African innovators
                </p>
                <p className="text leading-6">
                  Future milestones: Expanding the talent pool, increasing
                  client base, launching training programs.
                </p>
                <Button
                  // asChild
                  variant="ghost"
                  className=" border border-teal-500 text-teal-500 hover:bg-teal-100 hover-text-black hover:shadow-lg hover:scale-105"
                  disabled
                >
                  <Link href="#" className="flex items-center">
                    Read Blog <ArrowUpRight className="w-5 h-6" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="c"></div>
          </motion.div>
          {/* african image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className=""
          >
            <CloudinaryImage
              height={400}
              width={700}
              sizes="100vw"
              alt="africa kenya map"
              src="kosi-tech/about-us-hero-section/Africa_map_v6h7us"
              classNames="object-cover h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
