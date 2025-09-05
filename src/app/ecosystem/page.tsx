import { Layout } from "~/components/layouts/layout";
import { Lines } from "~/components/sections/lines";
import { VisualCarousel } from "~/components/ui/visual-carousel";
import Head from "next/head";

// Placeholder data for the visual carousel
const visualCarouselItems = [
  {
    id: "1",
    image: "/images/AI Entrepreneurs at Berkeley Meet-Up.jpg",
    title: "AI Entrepreneurs at Berkeley Meet-Up",
    description:
      "Our community gathering to discuss the latest in AI entrepreneurship",
    category: "Events",
  },
  {
    id: "2",
    image: "/images/genai-event.JPG",
    title: "GenAI Workshop",
    description: "Hands-on workshop exploring generative AI applications",
    category: "Workshops",
  },
  {
    id: "3",
    image: "/images/pearvc-event.jpg",
    title: "PearVC Partnership Event",
    description: "Networking event with our venture capital partners",
    category: "Networking",
  },
  {
    id: "4",
    image: "/images/pearvc-event2.jpg",
    title: "Investor Pitch Night",
    description: "Startups presenting to leading investors in the AI space",
    category: "Pitching",
  },
  {
    id: "5",
    image: "/images/pearvc-event3.jpg",
    title: "AI Startup Showcase",
    description:
      "Showcasing the latest innovations from our incubator companies",
    category: "Showcase",
  },
  {
    id: "6",
    image: "/images/pearvc-event4.jpg",
    title: "Technical Deep Dive",
    description:
      "Deep technical discussions on AI architecture and implementation",
    category: "Technical",
  },
  {
    id: "7",
    image: "/images/IMG_6787.JPG",
    title: "Community Building",
    description: "Building connections within the AI entrepreneur community",
    category: "Community",
  },
  {
    id: "8",
    image: "/images/IMG_7060.JPG",
    title: "Innovation Lab",
    description:
      "Collaborative workspace for AI innovation and experimentation",
    category: "Innovation",
  },
];

export default function EcosystemPage() {
  return (
    <>
      <Head>
        <title>Ecosystem — AI Entrepreneurs at Berkeley</title>
        <meta
          name="description"
          content="Explore the AIEB ecosystem through our visual journey of events, community, and innovation."
        />
      </Head>
      <Layout>
        <main className="relative flex flex-col">
          <Lines />
          <div className="bg-stripe-gradient absolute top-0 -z-10 size-full scale-y-200 md:top-10" />

          {/* AIEB in Pictures Section */}
          <section className="relative pt-8 pb-12">
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      📸 Community Highlights
                    </span>
                  </div>
                  <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                    AIEB in Pictures
                  </h2>
                  <p className="mx-auto max-w-2xl text-xl font-medium text-gray-600 dark:text-gray-300">
                    Capturing the energy, innovation, and connections that drive
                    our community forward
                  </p>
                </div>

                {/* Visual Carousel */}
                <VisualCarousel
                  items={visualCarouselItems}
                  autoplay={true}
                  autoplayDelay={5000}
                />
              </div>
            </div>
          </section>

          {/* Community Stats */}
          <section className="border-foreground/10 relative border-t border-dashed py-16">
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-blue-600 dark:text-blue-400">
                      50+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Events Hosted
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-purple-600 dark:text-purple-400">
                      200+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Community Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-green-600 dark:text-green-400">
                      30+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Startups Incubated
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-orange-600 dark:text-orange-400">
                      15+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      VC Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="border-foreground/10 relative border-t border-dashed py-16">
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Upcoming Events
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Join us at our next gathering
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="relative aspect-[16/9] w-full">
                    <iframe
                      src="https://lu.ma/embed-calendar/blank"
                      className="h-full w-full"
                      title="AIEB Events"
                      loading="lazy"
                      allow="fullscreen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Directory Section */}
          <section
            id="directory"
            className="border-foreground/10 relative border-t border-dashed py-16"
          >
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Community Directory
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Connect with founders, investors, and innovators in our
                    ecosystem
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800">
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                        All
                      </button>
                      <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                        Startups
                      </button>
                      <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                        Investors
                      </button>
                      <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                        Alumni
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center transition-colors hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                          <span className="text-lg font-bold text-white">
                            🚀
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                          Directory Coming Soon
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          We&apos;re building a comprehensive directory to
                          connect our entire ecosystem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
