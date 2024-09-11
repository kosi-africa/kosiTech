import { Button } from "../ui/button";

export default function PartnersSection() {
  return (
    <section className="h-full w-full  mt-28">
      <div className="max-w-7xl px-4 mx-auto">
        <h2 className="uppercase text-2xl text-center mb-8">
          {" "}
          <span className="text-green-400 uppercase">&#8226;</span>Partners
        </h2>
      </div>
      <div className="flex flex-wrap gap-12 justify-center items-center  my-8">
        {[1,2,3,4,5,6,7,8,9].map((item)=>(
            <div key={item} className="">
                <p className="text-xl font-bold">Logoipsum</p>
            </div>
        ))}
      </div>
      <div className="bg-yellow-500 py-4 px-4 flex flex-wrap gap-4 justify-center items-center">
        <p className="text-white text-center italic">We are always happy to collaborate with others for greater impact! </p>
        <Button className="bg-white hover:bg-yellow-700 hover:text-white text-yellow-500 ">Become a Partner</Button>
      </div>
    </section>
  );
}
