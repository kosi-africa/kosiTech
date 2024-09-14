import ContactForm from "@/components/forms/ContactForm";

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
            <ContactForm/>
          </div>
        </div>
      </section>
    </main>
  );
}
