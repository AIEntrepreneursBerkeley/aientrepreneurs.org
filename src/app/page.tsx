import { Layout } from "~/components/layouts/layout";
import { About } from "~/components/sections/about";
import { Announcement } from "~/components/sections/announcement";
import { Hero } from "~/components/sections/hero";
import { IncubatorIntro } from "~/components/sections/incubator-intro";
import { Showcase } from "~/components/sections/showcase";
import { Prism } from "~/components/ui/prism";
import { SplashCursor } from "~/components/ui/splash-cursor";
import { auth } from "~/server/auth";

const Home = async () => {
  return (
    <>
      <SplashCursor />
      <Announcement />
      <Layout>
        <Hero />
        <div style={{ width: "90%", height: "1000px", position: "relative" }}>
          <Prism
            animationType="hover"
            timeScale={0.5}
            height={3.5}
            baseWidth={5}
            scale={1.8}
            suspendWhenOffscreen={true}
            hoverStrength={1}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1.5}
          />
        </div>
        <div className="h-96" />
        <IncubatorIntro />
        <Showcase />
      </Layout>
    </>
  );
};

export default Home;
