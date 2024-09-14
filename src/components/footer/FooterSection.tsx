"use client";

import { links } from "@/collections/footerLinks";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Button } from "../ui/button";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className=" bg-slate-100">
      <section className="container mx-auto pt-32 pb-20 px-8">
        <section className="flex flex-wrap gap-8 justify-center md:justify-between items-center">
          <div className="flex flex-col justify-start">
            <CldImage
              src="kosi-tech/logos/kosiTech-footer-logo_mizw35"
              height="50"
              width="50"
              alt="kositech foooter logo"
              className="object-cover"
            />
            <p className="leading-8 text-xs max-w-56">
              We place great emphasis on providing brands with designs that
              elevates their visual communication.
            </p>
          </div>
          {/* links */}
          <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-20 my-8">
            {links.map((link) => (
              <p key={link.id} className="text-sm">
                <Link href={link.linkRef}>{link.name}</Link>
              </p>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="c">
            <Button asChild className="bg-black hover:bg-slate-900  text-white w-32 mx-auto my-8 z-0 transition ease-in hover:scale-105">
            <Link href="/contact-us">
              <span className="bg-white text-black px-1 mx-1 rounded-md">
                &#8594;
              </span>
              Get Started
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-16 justify-center md:justify-between items-center">
            <div className="c">
              <p className="text-xs">
                Copyright <span className="c">&#169;</span> Design & Development
                by Kosi Tech
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <Instagram className="w-4" />
              <Facebook className="w-4" />
              <X className="w-4" />
              <Linkedin className="w-4" />
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}
