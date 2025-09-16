import { Layout } from "~/components/layouts/layout";
import { Lines } from "~/components/sections/lines";
import { VisualCarousel } from "~/components/ui/visual-carousel";
import Head from "next/head";
import Image from "next/image";

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
                    From late-night hackathons to demo days- here&rsquo;s what
                    we&rsquo;ve been up to
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
                <div className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Selected Founders
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Founder Card 1: Ghita Houir Alami — ZeroEntropy */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/ghita alami.jpeg"
                        alt="Ghita Houir Alami — ZeroEntropy"
                        fill
                        className="object-cover object-[center_top]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      {/* Cohort Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 1
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Ghita Houir Alami
                      </h4>
                      <p className="mb-3 font-medium text-blue-400">
                        Co-founder & CEO, ZeroEntropy
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>$4.2M seed led by Initialized Capital</li>
                        <li>YC W25 graduate</li>
                        <li>100M+ documents processed, 1M+ queries served</li>
                      </ul>
                    </div>
                  </div>

                  {/* Founder Card 2: Ethan Hou — Martin */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/ethan.jpg"
                        alt="Ethan Hou — Martin"
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 15%" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      {/* Cohort Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 1
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Ethan Hou
                      </h4>
                      <p className="mb-3 font-medium text-green-400">
                        Co-founder, Martin (YC S23)
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>$2M seed funding</li>
                        <li>YC S23 graduate</li>
                        <li>10,000+ active users</li>
                      </ul>
                    </div>
                  </div>

                  {/* Founder Card 3: Dhruv Kulkarni — Brutus */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/dhruv.jpg"
                        alt="Dhruv Kulkarni — Brutus"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      {/* Cohort Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 1
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Dhruv Kulkarni
                      </h4>
                      <p className="mb-3 font-medium text-purple-400">
                        Co-founder, Brutus
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>Backed by Pear VC</li>
                        <li>Acquired by Forta Health</li>
                        <li>No-code AI software platform</li>
                      </ul>
                    </div>
                  </div>

                  {/* Founder Card 4: Pedro — Advex */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/pedro.jpg"
                        alt="Pedro — Advex"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      {/* Cohort Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 2
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Pedro Pachuca
                      </h4>
                      <p className="mb-3 font-medium text-orange-400">
                        Co-founder, Advex
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>$3.5M seed round</li>
                        <li>Backed by Pear VC</li>
                        <li>TechCrunch Disrupt 2024 Top 20 Finalist</li>
                      </ul>
                    </div>
                  </div>

                  {/* Founder Card 5: Yoonseok Yang — Pensieve */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/yoonseok_yang.jpeg"
                        alt="Yoonseok Yang — Pensieve"
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 15%" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      {/* Cohort Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-purple-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 3
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Yoonseok Yang
                      </h4>
                      <p className="mb-3 font-medium text-cyan-400">
                        Founder, Pensieve
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>Partnership with Anthropic</li>
                        <li>50% reduction in grading time</li>
                        <li>Deployed at Columbia, UC Berkeley, Harvey Mudd</li>
                      </ul>
                    </div>
                  </div>

                  {/* Founder Card 6: Sean Dorje — Relixr */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/sean_dorje.jpeg"
                        alt="Sean Dorje — Relixr"
                        fill
                        className="object-cover object-[center_top]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      {/* Cohort Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 2
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Sean Dorje
                      </h4>
                      <p className="mb-3 font-medium text-indigo-400">
                        Founder, Relixr
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>$150k ARR achieved in 2 weeks</li>
                        <li>YC X25</li>
                        <li>Exceptional customer acquisition velocity</li>
                      </ul>
                    </div>
                  </div>
                  {/* Santi — Autograph */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/santi_racca.jpeg"
                        alt="Santi Racca — Autograph"
                        fill
                        className="object-cover object-[center_top]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 2
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Santi Racca
                      </h4>
                      <p className="mb-3 font-medium text-pink-400">
                        Founder, Autograph
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>$2.6M raised</li>
                        <li>AI-powered digital legacy platform</li>
                        <li>Preserving human stories & memories</li>
                      </ul>
                    </div>
                  </div>

                  {/* Tienlan — Foresight Health */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/tienlan_sun.jpeg"
                        alt="Tienlan Sun — Foresight Health"
                        fill
                        className="object-cover object-[center_top]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 2
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Tienlan Sun
                      </h4>
                      <p className="mb-3 font-medium text-emerald-400">
                        Founder & CEO, Foresight Health
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>Backed by Neo & Susa Ventures</li>
                        <li>AI for early Alzheimer's diagnosis</li>
                        <li>Mentored by Masayoshi Son</li>
                      </ul>
                    </div>
                  </div>

                  {/* Pierre — Phospho */}
                  <div className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/pierre-louis_biojout.jpeg"
                        alt="Pierre-Louis Biojout — Phospho"
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 20%" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Cohort 2
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">
                        Pierre-Louis Biojout
                      </h4>
                      <p className="mb-3 font-medium text-indigo-400">
                        Co-founder, Phospho
                      </p>
                      <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-gray-300">
                        <li>$1.7M pre-seed raised</li>
                        <li>YC W24 graduate</li>
                        <li>2,000+ robots using phosphobot</li>
                      </ul>
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
                      founders&rsquo; technical development needs.
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
