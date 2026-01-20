import { Layout } from "~/components/layouts/layout";
// import AdvisorsSection from "~/components/sections/advisors";
import { Lines } from "~/components/sections/lines";
import Team from "~/components/sections/team";
import Head from "next/head";

const TeamPage = () => (
  <>
    <Head>
      <title>Team — AI Entrepreneurs at Berkeley</title>
    </Head>
    <Layout>
      <Lines />

      {/* Removed large hero for tighter top spacing */}

      {/* Executive Team */}
      <section className="relative pt-8 pb-10">
        <div className="container px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  Executive Team
                </h2>
              </div>
            </div>

            <div id="exec-team">
              <Team />
            </div>
          </div>
        </div>
      </section>

      {/* Advisors - Hidden */}
      {/* <section className="relative border-t border-gray-200 bg-gray-50 pt-12 pb-16 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="container px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  Advisors
                </h2>
              </div>
            </div>

            <div className="mt-12">
              <AdvisorsSection />
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  </>
);

export default TeamPage;
