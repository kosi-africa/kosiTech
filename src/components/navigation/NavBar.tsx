"use client";
import { navLinks } from "@/collections/navBarLinks";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Button } from "../ui/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

export default function NavBar() {
  const pathName = usePathname();
  return (
    // <nav className="bg-slate-100 text-black ">
    <nav
      className={clsx(
        pathName == "/contact-us"
          ? "bg-black text-white"
          : "bg-slate-100 text-black"
      )}
    >
      <section
        className={clsx(
          "container mx-auto px-4",
          pathName == "/contact-us" && "py-8"
        )}
      >
        <div className="flex gap-4 justify-between items-center">
          {/* left nav bar  */}
          <div className="flex gap-4 justify-between items-center">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-4 justify-between items-center text-sm">
                  <NavigationMenuItem>
                    <Link href="/">
                      <CldImage
                        src={
                          pathName == "/contact-us"
                            ? "kosi-tech/logos/Kosi_tech_nav_logo_2_u8zwsu"
                            : "kosi-tech/logos/kosiTech_nav_logo_ytqvv6"
                        }
                        height="150"
                        width="150"
                        sizes="100vw"
                        priority
                        alt="KosiTech logo"
                        className="object-cover"
                      />
                    </Link>
                  </NavigationMenuItem>
                  {navLinks.map((navLink) => (
                    <NavigationMenuItem key={navLink.id}>
                      <Link href={navLink.linkRef}>{navLink.linkName}</Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
          </div>

          {/* right side bar */}
          <div className="">
            <Link href="/contact-us">
              <Button
                variant="outline"
                className={clsx(
                  "bg-white border border-red-600  hover:bg-slate-200 hover:shadow-xl text-black w-32 mx-auto my-8 z-0",
                  pathName == "/contact-us" ? "hidden" : "block"
                )}
              >
                <span className="bg-red-600 text-white px-1 mx-1 rounded-md">
                  &#8594;
                </span>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
}
