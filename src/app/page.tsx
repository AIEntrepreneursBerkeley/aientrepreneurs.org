import { Layout } from "~/components/layouts/layout";
import { About } from "~/components/sections/about";
import { Announcement } from "~/components/sections/announcement";
import { Hero } from "~/components/sections/hero";
import { Showcase } from "~/components/sections/showcase";
import { auth } from "~/server/auth";

const Home = async () => {
  return (
    <>
      <Announcement />
      <Layout>
        <Hero />
        <Showcase />
        <About />
      </Layout>
    </>
  );
};

export default Home;
