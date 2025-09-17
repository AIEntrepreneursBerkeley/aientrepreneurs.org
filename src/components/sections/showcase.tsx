import { Story, type StoryProps } from "~/components/ui/story";

const stories: StoryProps[] = [
  {
    type: "news",
    title: "Congratulations, AI Entrepreneurs!",
    subtitle: "Our latest cohort graduates with $2M+ in funding",
    action: "READ",
    href: "#",
    logo: "/logos/aieb.svg",
  },
  {
    type: "spotlight",
    title: "AI Entrepreneurs' Sarah Chen wants you to think impact",
    subtitle: "Building the future of AI with purpose",
    action: "READ",
    href: "#",
    image: "/images/sarah-chen.jpg",
  },
  {
    type: "perspective",
    title: "The Future of AI Entrepreneurship",
    subtitle: "Insights from industry leaders",
    description: "Exploring the next wave of AI innovation",
    action: "WATCH",
    href: "#",
  },
  {
    type: "podcast",
    title: "Building AI-First Startups",
    subtitle: "Lessons from successful founders",
    description: "Deep dive into AI startup strategies",
    action: "LISTEN",
    href: "#",
  },
];

export const Showcase = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Latest News & Insights
          </h2>
          <p className="text-lg text-gray-300 lg:text-xl">
            Stay updated with the latest from AI Entrepreneurs at Berkeley
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {stories.map((story, index) => (
            <Story key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};
