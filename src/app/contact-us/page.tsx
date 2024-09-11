import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main className="min-h-screen w-screen  bg-black text-white p-28">
      <section className=" container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-12 gap-28">
          <div className="col-span-12 lg:col-span-6 px-4 space-y-8">
            <h1 className="text-3xl lg:text-5xl">Conatact Us</h1>
            {/* emaail & phone divs */}
            <div className="flex flex-col md:flex-row justify-between gap-28 items-center">
              <div className="space-y-4">
                <p className="font-light text-gray-300 text-lg">Email</p>
                <p className="text-gray-300 text-xl">team@kositech.co</p>
              </div>
              <div className="space-y-4">
                <p className="font-light text-gray-300 text-lg">Phone</p>
                <p className="text-gray-300 text-xl">+254 712 817 268</p>
              </div>
            </div>
            {/* address div  */}
            <div className="space-y-4 pt-12 ">
              <p className="font-light text-gray-300 text-lg">Address</p>
              <p className="text-gray-300 text-xl">Nairobi Kenya</p>
            </div>
          </div>
          {/* form div */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="flex flex-col lg:flex-row gap-20 justify-between items-center">
              <div className="w-full">
                <p className=" font-light text-gray-300 text-sm">Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-b border-slate-200 bg-transparent px-4 py-4 w-full"
                  placeholder=" Enter your Name"
                />
              </div>
              <div className="w-full">
                <p className=" font-light text-gray-300 text-sm">Email</p>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border-b border-slate-200 bg-transparent px-4 py-4 w-full"
                  placeholder=" Enter your Email"
                />
              </div>
            </div>
            <div className="w-full">
              <p className=" font-light text-gray-300 text-sm">Project</p>
              <input
                type="text"
                name=""
                id=""
                className="border-b border-slate-200 bg-transparent px-4 py-4 w-full"
                placeholder=" Select a project type*"
              />
            </div>
            <div className="w-full">
              <p className=" font-light text-gray-300 text-sm">Message</p>
              <input
                type="text"
                name=""
                id=""
                className="border-b border-slate-200 bg-transparent px-4 py-4 w-full"
                placeholder=" Your message..."
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
              <Button className="bg-white text-black hover:bg-slate-200">
                Submit Request
              </Button>
              <div className=" ">
                <span className="px-4 text-slate-400">Or</span>
                <Button
                  variant="ghost"
                  className=" border text-white hover:bg-slate-200"
                >
                  Book a Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
