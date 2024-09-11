'use client'
import { CldImage } from "next-cloudinary";

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
              <br  className="hidden md:block"/>
              <span className="bg-green-400 px-1">Empowering Africa</span>
            </p>
            <ul className="list-disc space-y-8 px-8">
                <li className="">Retaining talent in Africa while allowing them to work on global projects</li>
                <li className="">Empowering the next generation of African innovators</li>
                <li className="">Contributing to local economies and reducing the need for talent migration</li>
            </ul>
          </div>
          <div className="c">
            <CldImage
                src="kosi-tech/about-us-hero-section/Africa_map_v6h7us"
                height='400'
                width='700'
                alt="africa kenya map"
                className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
