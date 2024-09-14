import ContactForm from "@/components/forms/ContactForm";

export default function page() {
  return (
    <main className="min-h-screen w-screen  bg-black text-white  lg:p-20 xl:p-48 ">
      <section className=" container mx-auto px-4 py-8 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-28">
          <div className="w-3/6">
            <h1 className="text-3xl lg:text-5xl">Conatact Us</h1>
            {/* emaail & phone divs */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
              <div className="space-y-4">
                <p className="font-light text-gray-300 text-md">Email</p>
                <p className="text-gray-300 text-lg lg:text-xl">
                  team@kositech.co
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-light text-gray-300 text-md">Phone</p>
                <p className="text-gray-300 text-lg lg:text-xl">
                  +254 712 817 268
                </p>
              </div>
            </div>
            {/* address div  */}
            <div className="space-y-4 pt-12 ml-8 md:ml-0 ">
              <p className="font-light text-gray-300 text-md">Address</p>
              <p className="text-gray-300 text-lg lg:text-xl">Nairobi Kenya</p>
            </div>
          </div>
          {/* form div */}
          <div className="w-3/6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
