import { Layout } from "~/components/layouts/layout";
import { About } from "~/components/sections/about";
import { CTA } from "~/components/sections/cta";
import { Hero } from "~/components/sections/hero";
import Team from "~/components/sections/team";
import { Prism } from "~/components/ui/prism";
import { auth } from "~/server/auth";
import Image from "next/image";

const Home = async () => {
  return (
    <>
      <Layout>
        <Hero />
        <CTA />
        {/* <IncubatorIntro />
        <Showcase /> */}
      </Layout>
    </>
  );
};

export default Home;
