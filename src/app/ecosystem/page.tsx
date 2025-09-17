"use client";

import { Layout } from "~/components/layouts/layout";
import { Lines } from "~/components/sections/lines";
import { Button } from "~/components/ui/primitives/button";
import { VisualCarousel } from "~/components/ui/visual-carousel";
import Head from "next/head";
import Image from "next/image";

// Helper function to handle image error fallback
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  target.style.display = "none";
  const nextElement = target.nextElementSibling as HTMLElement;
  if (nextElement) {
    nextElement.style.display = "block";
  }
};

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
                    From late-night hackathons to demo days- here&apos;s what
                    we&apos;ve been up to
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
                        <li>AI for early Alzheimer&apos;s diagnosis</li>
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

          {/* Collaborators */}
          <section className="border-foreground/10 relative border-t border-dashed pt-16 pb-8">
            <div className="container px-4">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Our Collaborators
                  </h2>
                </div>

                {/* Partner Logos Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {/* Sequoia */}
                  <a
                    href="https://www.sequoiacap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/sequoia.png"
                      alt="Sequoia Capital"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                    <div className="hidden text-center">
                      <div className="text-xs font-semibold text-white">
                        SEQUOIA
                      </div>
                      <div className="text-xs text-gray-400">Capital</div>
                    </div>
                  </a>

                  {/* Lightspeed */}
                  <a
                    href="https://www.lsvp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/lightspeed.png"
                      alt="Lightspeed Venture Partners"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                    <div className="hidden text-center">
                      <div className="text-sm font-semibold text-white">
                        Lightspeed
                      </div>
                    </div>
                  </a>

                  {/* Greylock */}
                  <a
                    href="https://www.greylock.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/greylock.png"
                      alt="Greylock Partners"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                    <div className="hidden text-center">
                      <div className="text-sm font-semibold text-white">
                        greylock
                      </div>
                    </div>
                  </a>

                  {/* Kleiner Perkins */}
                  <a
                    href="https://www.kleinerperkins.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/kleiner.png"
                      alt="Kleiner Perkins"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                    <div className="hidden text-center">
                      <div className="text-xs font-semibold text-white">
                        KLEINER
                      </div>
                      <div className="text-xs text-gray-400">PERKINS</div>
                    </div>
                  </a>

                  {/* Emerson Collective */}
                  <a
                    href="https://www.emersoncollective.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/emerson.png"
                      alt="Emerson Collective"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Clear Ventures */}
                  <a
                    href="https://www.clearventures.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/clear.png"
                      alt="Clear Ventures"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* FutureX Capital */}
                  <a
                    href="https://www.futurexcapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/futurexcapital.png"
                      alt="FutureX Capital"
                      width={160}
                      height={60}
                      className="h-12 w-auto object-contain brightness-0 invert filter"
                    />
                  </a>

                  {/* Entrepreneurship @ Berkeley Haas */}
                  <a
                    href="https://entrepreneurship.berkeley.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/haas_entr.png"
                      alt="Entrepreneurship @ Berkeley Haas"
                      width={160}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </a>

                  {/* Orrick */}
                  <a
                    href="https://www.orrick.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/orrick.png"
                      alt="Orrick"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                    <div className="hidden text-center">
                      <div className="text-sm font-semibold text-white">
                        orrick
                      </div>
                    </div>
                  </a>

                  {/* ByteDance */}
                  <a
                    href="https://www.bytedance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/bytedance.png"
                      alt="ByteDance"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                    <div className="hidden text-center">
                      <div className="text-sm font-semibold text-white">
                        ByteDance
                      </div>
                    </div>
                  </a>

                  {/* Anthropic */}
                  <a
                    href="https://www.anthropic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/anthropic.png"
                      alt="Anthropic"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Z Fellows */}
                  <a
                    href="https://www.zfellows.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/zfellows.png"
                      alt="Z Fellows"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* The House Fund */}
                  <a
                    href="https://www.thehouse.fund"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/the-house-fund.svg"
                      alt="The House Fund"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Antler */}
                  <a
                    href="https://www.antler.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/antler.svg"
                      alt="Antler"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Unusual Ventures */}
                  <a
                    href="https://www.unusualventures.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/unusual-ventures.svg"
                      alt="Unusual Ventures"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Remus Capital */}
                  <a
                    href="https://www.remuscapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/remus.png"
                      alt="Remus Capital"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Pear */}
                  <a
                    href="https://www.pear.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/pearvc.svg"
                      alt="Pear VC"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Human Capital */}
                  <a
                    href="https://www.humancapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/images/human.png"
                      alt="Human Capital"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Andreessen Horowitz */}
                  <a
                    href="https://a16z.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/a16z.svg"
                      alt="Andreessen Horowitz"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* Y Combinator */}
                  <a
                    href="https://www.ycombinator.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/y-combinator.svg"
                      alt="Y Combinator"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain brightness-0 invert filter"
                    />
                  </a>

                  {/* OpenAI */}
                  <a
                    href="https://openai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/openai.svg"
                      alt="OpenAI"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain brightness-0 invert filter"
                    />
                  </a>

                  {/* Microsoft */}
                  <a
                    href="https://microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/microsoft.png"
                      alt="Microsoft"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>

                  {/* NFX */}
                  <a
                    href="https://www.nfx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <Image
                      src="/logos/nfx.svg"
                      alt="NFX"
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-foreground/10 relative border-t border-dashed py-32">
            <div className="container px-4">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-12 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                  Ready to Build the Future?
                </h2>
                <div className="flex justify-center">
                  <Button
                    asChild
                    className="rounded-xl bg-blue-600 px-12 py-6 text-xl font-semibold text-white hover:bg-blue-700"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeczWIYO9PKcUJVRSHdIt4z6mt2XkQ2lgcBySjiA5IdLnxoWA/viewform"
                      target="_blank"
                    >
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
