'use client'
import { CldImage } from "next-cloudinary";

export default function ImpactSection() {
  return (
    <section className="h-full w-full px-4">
      <div className="max-w-7xl mx-auto mt-36">
        <h2 className="uppercase text-2xl mb-8">
          {" "}
          <span className="text-green-400 uppercase">&#8226;</span>Impact
        </h2>
        <div className="flex justify-between">
          <div className="space-y-8">
            <p className="text-5xl leading-[3.5rem]">
              {" "}
              Reducing Brain Drain,
              <br />
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
