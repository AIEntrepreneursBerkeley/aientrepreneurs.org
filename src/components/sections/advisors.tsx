import AdvisorsGrid from "~/components/sections/advisors-grid";
import { fetchAdvisors } from "~/server/notion/advisors";

export default async function AdvisorsSection() {
  const advisors = await fetchAdvisors();
  return <AdvisorsGrid advisors={advisors} />;
}
