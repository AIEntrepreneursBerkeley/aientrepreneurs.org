import { Layout } from "~/components/layouts/layout";
import { Lines } from "~/components/sections/lines";
import Head from "next/head";
import Link from "next/link";

const TeamPage = () => (
  <>
    <Head>
      <title>Team — AI Entrepreneurs at Berkeley</title>
    </Head>
    <Layout>
      <Lines />
      <section className="relative pt-16 pb-36 md:pb-56">
        <div className="container px-4">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Team & Advisors
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
            We moved the Executive Team and Advisors to the{" "}
            <Link href="/ecosystem" className="text-blue-600 hover:underline">
              Ecosystem
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </Layout>
  </>
);

export default TeamPage;
