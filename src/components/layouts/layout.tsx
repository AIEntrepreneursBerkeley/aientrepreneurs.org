import { Navbar } from "~/components/sections/navbar";
import { type ReactNode } from "react";
import { Footer } from "~/components/sections/footer";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
