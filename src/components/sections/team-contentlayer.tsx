import { Card } from "~/components/ui/card";
import { fetchAllMembers } from "~/server/notion/members";

export default async function TeamContentlayerSection() {
  // Fetch all members and filter by roles
  const allMembers = await fetchAllMembers();

  const executiveTeam = allMembers.filter((member) =>
    member.role?.some(
      (role) => role.includes("Executive Team") || role.includes("Exec"),
    ),
  );

  const cofounders = executiveTeam.filter((member) =>
    member.role?.some(
      (role) => role.includes("Co-Founder") || role.includes("President"),
    ),
  );

  const executives = executiveTeam.filter(
    (member) =>
      !member.role?.some(
        (role) => role.includes("Co-Founder") || role.includes("President"),
      ),
  );

  return (
    <section className="relative pb-36 md:pb-56">
      {/* Co-founders and Executives */}
      <div className="xs:grid-cols-2 container mt-24 grid grid-cols-1 gap-x-3.5 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4">
        {cofounders.map((member) => (
          <Card
            key={member._id}
            name={member.name}
            image={member.image[0] || "/images/placeholder.jpg"}
            position={member.role[0] || "Team Member"}
            linkedin={member.linkedin}
          />
        ))}
        {executives.map((member) => (
          <Card
            key={member._id}
            name={member.name}
            image={member.image[0] || "/images/placeholder.jpg"}
            position={member.role[0] || "Team Member"}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  );
}
