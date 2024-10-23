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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import CloudinaryImage from "../CloudinaryImage";

export default function NavBar() {
  const pathName = usePathname();
  return (
    <>
      <nav
        className={clsx(
          "hidden md:block sticky top-0 z-20",
          pathName == "/contact-us"
            ? "bg-black text-white"
            : "bg-white text-black"
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
                      <CloudinaryImage
                        height={150}
                        width={150}
                        sizes="100vw"
                        alt="KosiTech Logo"
                        src={
                          pathName == "/contact-us"
                            ? "kosi-tech/logos/Kosi_tech_nav_logo_2_u8zwsu"
                            : "kosi-tech/logos/kosiTech_nav_logo_ytqvv6"
                        }
                        classNames="object-cover"
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
                    "bg-white border border-red-600 px-2  hover:bg-slate-200 text-black w-full md:w-32 mx-auto my-8 z-0 transition ease-in hover:scale-105",
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

      {/* mobile navigation section */}
      <nav
        className={clsx(
          "flex justify-between items-center pt-4 pb-4 px-4 sticky top-0 z-20 md:hidden",
          pathName == "/contact-us"
            ? "bg-black text-white"
            : "bg-slate-100 text-black"
        )}
      >
        <div>
          <Link href="/">
            <CldImage
              src={
                pathName == "/contact-us"
                  ? "kosi-tech/logos/Kosi_tech_nav_logo_2_u8zwsu"
                  : "kosi-tech/logos/kosiTech_nav_logo_ytqvv6"
              }
              alt="KosiTech Logo "
              height="120"
              width="120"
              className="object-cover "
            />
          </Link>
        </div>
        <div>
          <Sheet>
            <SheetTrigger>
              <MenuIcon className="w-8 h-8" />
            </SheetTrigger>
            <SheetContent side="top" className="flex flex-col space-y-2">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              {navLinks.map((nav) => (
                <SheetClose asChild key={nav.id}>
                  <Link href={nav.linkRef}>{nav.linkName}</Link>
                </SheetClose>
              ))}
              <Link href="/contact-us">
                <SheetClose asChild className="w-full">
                  <Button
                    variant="outline"
                    className={clsx(
                      "bg-white border border-red-600 px-2  hover:bg-slate-200 text-black w-full md:w-32 mx-auto my-8 z-0 transition ease-in hover:scale-105"
                    )}
                  >
                    <span className="bg-red-600 text-white px-1 mx-1 rounded-md">
                      &#8594;
                    </span>
                    Get Started
                  </Button>
                </SheetClose>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
