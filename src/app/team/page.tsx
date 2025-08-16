import { Layout } from "~/components/layouts/layout";
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
      <Team />
    </Layout>
  </>
);

export default TeamPage;
