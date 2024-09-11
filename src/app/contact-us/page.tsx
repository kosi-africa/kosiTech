export default function page() {
  return (
    <main className=" bg-black text-white">
      <section className="h-screen w-screen  container mx-auto grid place-content-center ">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 px-4 space-y-8">
            <h1 className="text-3xl lg:text-5xl">Conatact Us</h1>
            {/* emaail & phone divs */}
            <div className="flex justify-between gap-28 items-center">
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
          <div className="col-span-7">

            <div className="flex gap-8 justify-between items-center">
                
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
