"use client";
import { ArrowUpRight, Calendar } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ImpactSection() {
  return (
    <section className="h-full w-full px-4 md:px-12 mt-28">
      <div className="max-w-7xl mx-auto ">
        <h2 className="uppercase text-xl lg:text-2xl mb-8">
          {" "}
          <span className="text-green-400 uppercase">&#8226;</span>Impact
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="space-y-8">
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
          </div>
          {/* african image */}
          <div className="c">
            <CldImage
              src="kosi-tech/about-us-hero-section/Africa_map_v6h7us"
              height="400"
              width="700"
              alt="africa kenya map"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
