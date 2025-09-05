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
    title: "Demo Day",
    description:
      "Our semester demo day where incubator companies pitch their latest innovations",
    category: "Demo Day",
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
        <main className="relative flex flex-col overflow-hidden">
          <Lines />
          <div className="bg-stripe-gradient pointer-events-none absolute inset-0 -z-10" />

          {/* AIEB in Pictures Section */}
          <section className="relative pt-8 pb-12">
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                    AIEB in Pictures 📸
                  </h2>
                  <p className="mx-auto max-w-2xl text-xl font-medium text-gray-600 dark:text-gray-300">
                    From late-night hackathons to demo days- here's what we've
                    been up to
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
          <section className="border-foreground/10 relative border-t border-dashed py-20">
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-12 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 text-6xl font-bold text-blue-600 dark:text-blue-400">
                        50+
                      </div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Events Hosted
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-600/20 p-12 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 text-6xl font-bold text-purple-600 dark:text-purple-400">
                        500+
                      </div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Community Members
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-green-600/20 p-12 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-green-500/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 text-6xl font-bold text-green-600 dark:text-green-400">
                        50+
                      </div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Startups Incubated
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-600/20 p-12 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-500/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 text-6xl font-bold text-orange-600 dark:text-orange-400">
                        30+
                      </div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                        VC Partners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Selected Founders */}
          <section className="border-foreground/10 relative border-t border-dashed py-16">
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Founder Card 1 */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Placeholder for founder image */}
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                        <div className="text-6xl">👨‍💼</div>
                      </div>

                      {/* Company Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          AI Startup
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Alex Chen
                      </h4>
                      <p className="mb-3 font-medium text-blue-400">
                        Founder & CEO, NeuralFlow
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-gray-300">
                        Building the next generation of AI-powered workflow
                        automation. Previously at Google AI, Stanford CS '22.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="rounded-full bg-gray-800 px-2 py-1">
                          AIEB Cohort 2023
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Founder Card 2 */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Placeholder for founder image */}
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-500/10 to-teal-500/10">
                        <div className="text-6xl">👩‍💼</div>
                      </div>

                      {/* Company Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          HealthTech
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Sarah Kim
                      </h4>
                      <p className="mb-3 font-medium text-green-400">
                        Co-founder, MedAI Labs
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-gray-300">
                        Revolutionizing medical diagnosis with computer vision.
                        Former researcher at UCSF, Berkeley EECS '21.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="rounded-full bg-gray-800 px-2 py-1">
                          AIEB Cohort 2022
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Founder Card 3 */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Placeholder for founder image */}
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <div className="text-6xl">👨‍💼</div>
                      </div>

                      {/* Company Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-purple-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          FinTech
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Marcus Rodriguez
                      </h4>
                      <p className="mb-3 font-medium text-purple-400">
                        Founder, CryptoSense AI
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-gray-300">
                        AI-driven cryptocurrency trading platform. Ex-Goldman
                        Sachs quant, Berkeley Haas MBA '23.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="rounded-full bg-gray-800 px-2 py-1">
                          AIEB Cohort 2023
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Founder Card 4 */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Placeholder for founder image */}
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-500/10 to-red-500/10">
                        <div className="text-6xl">👩‍💼</div>
                      </div>

                      {/* Company Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-orange-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          EdTech
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Priya Patel
                      </h4>
                      <p className="mb-3 font-medium text-orange-400">
                        CEO, LearnLab AI
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-gray-300">
                        Personalized AI tutoring for K-12 students. Former
                        product manager at Khan Academy, Stanford MS '22.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="rounded-full bg-gray-800 px-2 py-1">
                          AIEB Cohort 2024
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Founder Card 5 */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Placeholder for founder image */}
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                        <div className="text-6xl">👨‍💼</div>
                      </div>

                      {/* Company Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-cyan-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Climate Tech
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        David Liu
                      </h4>
                      <p className="mb-3 font-medium text-cyan-400">
                        Co-founder, GreenGrid AI
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-gray-300">
                        AI-optimized smart grid technology for renewable energy.
                        PhD candidate in Energy Systems, Berkeley '24.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="rounded-full bg-gray-800 px-2 py-1">
                          AIEB Cohort 2024
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Founder Card 6 */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Placeholder for founder image */}
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                        <div className="text-6xl">👩‍💼</div>
                      </div>

                      {/* Company Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Robotics
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Emma Zhang
                      </h4>
                      <p className="mb-3 font-medium text-indigo-400">
                        Founder, RoboVision
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-gray-300">
                        Computer vision for autonomous warehouse robots. Former
                        Tesla Autopilot engineer, Berkeley EECS '20.
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="rounded-full bg-gray-800 px-2 py-1">
                          AIEB Cohort 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Selected Partners */}
          <section className="border-foreground/10 relative border-t border-dashed pt-16 pb-8">
            <div className="container px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                      Selected Partners
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Partner 1 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                        <span className="text-3xl font-bold text-blue-400">
                          A16Z
                        </span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      Andreessen Horowitz
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Leading venture capital firm providing funding and
                      mentorship to our portfolio companies.
                    </p>
                  </div>

                  {/* Partner 2 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/20 to-teal-500/20">
                        <span className="text-2xl font-bold text-green-400">
                          OpenAI
                        </span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      OpenAI
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Strategic AI partnership providing cutting-edge models and
                      technical expertise to our startups.
                    </p>
                  </div>

                  {/* Partner 3 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                        <span className="text-2xl font-bold text-purple-400">
                          Microsoft
                        </span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      Microsoft
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Cloud infrastructure and Azure credits supporting our
                      founders' technical development needs.
                    </p>
                  </div>

                  {/* Partner 4 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-red-500/20">
                        <span className="text-2xl font-bold text-orange-400">
                          Y Comb
                        </span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      Y Combinator
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Accelerator partnership offering demo day opportunities
                      and investor network access.
                    </p>
                  </div>

                  {/* Partner 5 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                        <span className="text-2xl font-bold text-cyan-400">
                          Berkeley
                        </span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      UC Berkeley
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Academic partnership providing research collaboration and
                      student talent pipeline.
                    </p>
                  </div>

                  {/* Partner 6 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-indigo-500/30 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
                        <span className="text-2xl font-bold text-indigo-400">
                          Sequoia
                        </span>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      Sequoia Capital
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Investment partner supporting Series A and growth-stage
                      funding for our alumni companies.
                    </p>
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
