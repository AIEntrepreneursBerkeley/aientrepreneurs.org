import { Lines } from "~/components/sections/lines";
import { Logos } from "~/components/sections/logos";
import { CountUp } from "~/components/ui/count-up";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <main className="relative flex flex-col">
    <Lines />
    <Background />
    <div className="bg-stripe-gradient absolute top-0 -z-10 size-full scale-y-200 md:top-10" />
    <div className="border-foreground/10 mt-20 border-y border-dashed py-2 md:mt-24 lg:mt-28">
      <div className="container">
        <h1>
          AI Entrepreneurs{` `}
          <br className="hidden sm:block" />
          at Berkeley — Build{` `}
          <br className="hidden sm:block" />
          Your AI Startup.
        </h1>
        <div className="mt-8 max-w-lg text-gray-700 md:max-w-xl dark:text-gray-300">
          <p className="mb-6">
            AI Entrepreneurs at Berkeley is the premier AI incubator for early
            stage startups and a community of risk-takers, researchers, and
            investor partners.
          </p>
          <p>
            Propel your startup to the next level.{" "}
            <Link href="/apply" className="z-50 text-blue-500">
              Apply
            </Link>{" "}
            to our 10-week incubator today.
          </p>
        </div>
        <div className="mt-12 flex max-w-lg justify-between md:max-w-xl">
          <div>
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              <CountUp to={80} />
            </span>
            Startups
          </div>
          <div className="">
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              <CountUp to={38} />
            </span>
            VC Partners
          </div>
          <div>
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              <CountUp to={2955} />
            </span>
            Attendees
          </div>
        </div>
      </div>
    </div>
    <Logos />
  </main>
);

const Background = () => (
  <div className="absolute inset-0 -top-16 -z-10 lg:-top-20">
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="absolute inset-x-0 top-0 max-w-7xl overflow-hidden lg:right-0 lg:bottom-auto lg:left-auto lg:w-4/5">
        <div className="scale-[calc(16/9)] md:scale-100">
          <div className="flex aspect-square items-center md:aspect-video">
            <iframe
              src="https://player.vimeo.com/video/849691275?h=7363b7ae4f&amp;dnt=1&amp;loop=1&amp;background=1&amp;app_id=58479"
              width="426"
              height="240"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="AIEB"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="bg-background/10 absolute -inset-px" />
        <div className="to-background absolute -inset-px bg-gradient-to-b from-transparent via-transparent" />
        <div className="to-background absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent lg:block" />
      </div>
      <div className="relative flex justify-center overflow-hidden saturate-50">
        <Image
          src="/images/gradient-small.webp"
          width={640}
          height={1124}
          className="sm:hidden"
          draggable={false}
          alt=""
        />
        <Image
          src="/images/gradient-medium.webp"
          width={1024}
          height={1124}
          className="hidden sm:block lg:hidden"
          draggable={false}
          alt=""
        />
        <Image
          src="/images/gradient-large.webp"
          width={2510}
          height={1168}
          className="hidden max-w-none lg:block"
          draggable={false}
          alt=""
        />
      </div>
    </div>
  </div>
);
