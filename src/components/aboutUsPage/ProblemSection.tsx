export default function ProblemSection() {
  return (
    <section className="w-full h-full px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="uppercase text-2xl mb-8">
          {" "}
          <span className="text-red-800 uppercase">&#8226;</span>The Problem
        </h2>
        <div className=" grid grid-cols-2 gap-4 ">
          <div className="w-11/12 mr-auto">
            <p className="text-5xl leading-[3.5rem]">
              They estimated skilled talent <br /> emigration from Kenya at an{" "}
              <br /> astounding{" "}
              <span className="bg-red-800 text-white px-1">35.9%</span>
            </p>
          </div>
          <div className="w-8/12 ml-auto">
            <ul className="list-item list-disc space-y-8">
              <li>
                In addition, they found that among non-OECD countries, Kenya
                ranked the 13th highest in brain drain intensity.
              </li>
              <li>
                Early this year, the government announced plans to send at least
                one million skilled workers to foreign nations, paving the way
                for the mass exodus of qualified and highly skilled Kenyans from
                the country.
              </li>
            </ul>
          </div>
        </div>
        {/* tetrac part */}
        <div className="grid grid-cols-3 mt-20">
            <div className="bg-red-800 text-white text-center px-4 py-12">
                <p className="text-xl font-semibold">1. Talent Loss</p>
                <p className="w-72 mx-auto">Africa loses a significant portion of its top tech talent to Western countries</p>
            </div>
            <div className="bg-white text-black text-center px-4 py-12">
                <p className="text-3xl ">The Brian Drain</p>
                <p className="w-72 text-3xl text-red-800 mx-auto font-semibold">Dillema</p>
            </div>
            <div className="bg-red-800 text-white text-center px-4 py-12">
                <p className="text-xl font-semibold">3. Growth Limit</p>
                <p className="w-80 mx-auto">The continent faces a tech skills gap that hampers innovation and economic grow</p>
            </div>
            <div className="bg-white text-white text-center px-4 py-12">
            </div>
            <div className="bg-red-800 text-white text-center px-4 py-12">
                <p className="text-xl font-semibold">2. Limited opportunity</p>
                <p className="w-80 mx-auto">Young developers, designers, and software engineers seek opportunities abroad due to limited local opportunities</p>
            </div>
            <div className="bg-white text-white text-center px-4 py-12">
                
            </div>
        </div>
      </div>
    </section>
  );
}
