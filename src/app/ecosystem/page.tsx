import { Layout } from "~/components/layouts/layout";
import AdvisorsContentlayerSection from "~/components/sections/advisors-contentlayer";
import { Lines } from "~/components/sections/lines";
import Team from "~/components/sections/team";
import Head from "next/head";
import Link from "next/link";

export default function EcosystemPage() {
  return (
    <>
      <Head>
        <title>Ecosystem — AI Entrepreneurs at Berkeley</title>
        <meta
          name="description"
          content="AIEB ecosystem: exec team, advisors, events, and member directory."
        />
      </Head>
      <Layout>
        <Lines />

        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                Ecosystem
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                The people, events, and companies that make up the AIEB
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Luma Events */}
        <section className="relative py-16">
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

        {/* Executive Team */}
        <section className="relative py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Executive Team
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    The leaders driving AIEB forward
                  </p>
                </div>
                <Link
                  href="#directory"
                  className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 sm:block dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View full directory →
                </Link>
              </div>

              <div id="exec-team">
                <Team />
              </div>
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="relative bg-gray-50 py-16 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  Advisors
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Industry experts guiding our community
                </p>
              </div>

              <div className="mt-12">
                {/* @ts-expect-error Server Component */}
                <AdvisorsContentlayerSection />
              </div>
            </div>
          </div>
        </section>

        {/* Directory */}
        <section id="directory" className="relative py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  Directory
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Companies, individuals, and the current batch
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800">
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                      All
                    </button>
                    <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                      Companies
                    </button>
                    <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                      Individuals
                    </button>
                    <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                      Current Batch
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center dark:border-gray-600">
                      <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800"></div>
                      <h3 className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
                        Directory Coming Soon
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        We're building out the full member directory
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
