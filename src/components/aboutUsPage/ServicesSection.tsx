

export default function ServicesSection() {
  return (
    <section className="h-full w-full px-4 mt-28">
        <div className=" text-center grid place-content-center">
            <h2 className="uppercase text-xl lg:text-2xl mb-8">
            {" "}
            <span className="text-yellow-400 uppercase">&#8226;</span>Services
            </h2>
            <div className="space-y-4">
                <p className="text-2xl lg:text-4xl font-light">BRANDING</p>
                <p className="text-2xl lg:text-4xl font-light">WEBSITE DEVELOPMENT</p>
                <p className="text-2xl lg:text-4xl font-light">UI UX DESIGN</p>
                <p className="text-2xl lg:text-4xl font-light">SEO</p>
                <p className="text-2xl lg:text-4xl font-light">WEBSITE MAINTENANCE</p>
            </div>
        </div>
    </section>
  )
}
