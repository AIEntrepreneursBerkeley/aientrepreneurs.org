import { Logos } from "~/components/sections/logos";
import FaultyTerminal from "~/components/ui/faulty-terminal";
import Image from "next/image";

export const About = () => (
  <section id="program" className="relative py-24 sm:py-28 md:py-32">
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <FaultyTerminal />
    </div>
  </section>
);
