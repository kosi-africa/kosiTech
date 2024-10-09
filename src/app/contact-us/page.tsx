import ContactForm from "@/components/forms/ContactForm";
import * as motion from "framer-motion/client";
export default function page() {
  return (
    <main className="min-h-screen w-screen  bg-black text-white p-2 lg:p-20 xl:p-48 ">
      <motion.section
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className=" container mx-auto px-4 py-8 "
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-28">
          <div className="w-full lg:w-3/6">
            <h1 className="text-3xl lg:text-5xl">Conatact Us</h1>
            {/* emaail & phone divs */}
            <div className="flex flex-row md:flex-row justify-between items-center gap-8 mt-8">
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
            <div className="space-y-4 pt-12 ">
              <p className="font-light text-gray-300 text-md">Address</p>
              <p className="text-gray-300 text-lg lg:text-xl">Nairobi Kenya</p>
            </div>
          </div>
          {/* form div */}
          <div className="w-full lg:w-3/6">
            <ContactForm />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
