import { servicesCard } from "@/collections/ourWorkServices";
import CloudinaryImage from "../CloudinaryImage";

export default function ServicesSection() {
  return (
    <section className="h-full w-full container mx-auto text-white px-4  pt-20">
      <div className="max-w-7xl mx-auto grid place-content-center">
        <h2 className="uppercase text-xl lg:text-2xl mb-8">
          {" "}
          <span className="text-yellow-400 uppercase">&#8226;</span>Services
        </h2>
        <p className="text-3xl lg:text-5xl leading-[2.5rem] lg:leading-[3.5rem]">
          {" "}
          Unlock your brand potential and drive innovation with our expert
          solutions.{" "}
        </p>
      </div>
      <div className="space-y-12 py-20">
        {servicesCard.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row gap-8 py-4 px-8 justify-between items-center  bg-gray-700 text-white sticky top-0"
          >
            <div className="flex flex-col w-full md:w-5/12">
              <p className="text-lg">{service.number}.</p>
              <p className="text-2xl font-semibold">{service.title}</p>
              <p className="">{service.description}</p>
            </div>
            <div className="w-full md:w-6/12">
              <CloudinaryImage
                height={200}
                width={1900}
                sizes="100vw"
                alt={service.title}
                src={service.imageRef}
                classNames=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
