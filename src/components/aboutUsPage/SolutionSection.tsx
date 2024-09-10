export default function SolutionSection() {
  return (
    <section className="h-full w-full px-4">
      <div className="max-w-4xl mx-auto grid place-content-center mt-36">
        <h2 className="uppercase text-2xl mb-8">
          {" "}
          <span className="text-green-400 uppercase">&#8226;</span>Solution
        </h2>
        <p className="text-5xl leading-[3.5rem]">
          {" "}
          We recognized the Global demand for tech <br />
          talent and created <span className="bg-green-400 px-1">KosiTech</span>
          , a tech hub <br /> to act as a bridge between African talent <br />{" "}
          and global clients
        </p>
        </div>
        <div className=" max-w-6xl mx-auto mt-20">
            <div className="flex flex-wrap gap-8 justify-center">
                <div className="border text-center px-4 py-20 space-y-4 ">
                    <p className="text-xl font-semibold">For Clients</p>
                    <p className="">Access to readily available, highly skilled, cost-effective tech talent</p>
                </div>
                <div className="border text-center px-4 py-20 space-y-4 ">
                    <p className="text-xl font-semibold">For Developers</p>
                    <p className="">Opportunities to work on cutting-edge projects without leaving home</p>
                </div>
                <div className="border text-center px-4 py-20 space-y-4 ">
                    <p className="text-xl font-semibold">For Africa</p>
                    <p className="">Retention of talent, fostering local innovation and economic growth</p>
                </div>
            </div>
        </div>
      
    </section>
  );
}
