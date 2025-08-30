import { Card } from "~/components/ui/card";

const Team = () => (
  <section className="relative pb-36 md:pb-56">
    <div className="xs:grid-cols-2 container mt-24 grid grid-cols-1 gap-x-3.5 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4">
      <Card
        name={"Jyoti Rani"}
        image={"/images/jyoti.jpg"}
        position={"President"}
        linkedin={"https://www.linkedin.com"}
      />
      <Card
        name={"Vardaan Tekriwal"}
        image={"/images/vardaan.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com"}
      />
      <Card
        name={"Stephen Xie"}
        image={"/images/stephen.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com"}
      />
      <Card
        name={"Alex Mehregan"}
        image={"/images/alex.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com"}
      />
      <Card
        name={"Dylan Westland"}
        image={"/images/dylan.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com"}
      />
      <Card
        name={"Ari Ramsan"}
        image={"/images/ari.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com"}
      />
      <Card
        name={"Rohan Sontakke"}
        image={"/images/rohan.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com"}
      />
      <Card
        name={"Rohan Sontakke"}
        image={"/images/rohan.jpg"}
        position={"Exec"}
        linkedin={"https://www.linkedin.com"}
      />
    </div>
    <div className="xs:grid-cols-2 container mt-32 grid grid-cols-1 gap-x-3.5 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4"></div>
  </section>
);

export default Team;
