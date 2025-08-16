import { Card } from "~/components/ui/card";

const Team = () => (
  <section className="relative pb-36 md:pb-56">
    <div className="xs:grid-cols-2 container grid grid-cols-1 gap-x-3.5 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4">
      <Card
        name={"John Doe"}
        image={"/images/blaze.jpeg"}
        position={"Member"}
        linkedin={"https://linkedin.com"}
      />
    </div>
    <div className="xs:grid-cols-2 container mt-32 grid grid-cols-1 gap-x-3.5 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4"></div>
  </section>
);

export default Team;
