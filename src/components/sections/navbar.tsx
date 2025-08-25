import { NavigationMenuComponent } from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/primitives/button";
import Image from "next/image";
import Link from "next/link";
import aieb from "public/logos/aieb.svg";

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-gray-400 bg-gray-100/50 py-0.5 backdrop-blur-lg backdrop-hue-rotate-[45deg] backdrop-saturate-200 dark:border-gray-100/60 dark:bg-gray-900/50">
    <nav className="container flex h-16 items-center justify-between lg:h-20">
      <figure className="relative h-full">
        <Link href="/">
          <Image
            src={aieb}
            alt="AIEB Logo"
            className="h-full w-20 py-2 lg:w-32"
            draggable={false}
          />
        </Link>
      </figure>
      <NavigationMenuComponent />
      <div className="xs:gap-2 flex scale-90 items-center gap-1 sm:scale-100 sm:gap-3 md:h-full">
        <Link href="/apply">
          <Button variant="default">Apply</Button>
        </Link>
      </div>
    </nav>
  </header>
);
