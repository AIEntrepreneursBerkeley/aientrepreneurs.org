import Image from "next/image";

export type AdvisorsGridItem = {
  id: string;
  name: string;
  roles: string[];
  images: string[];
  linkedin?: string;
};

export function AdvisorsGrid({ advisors }: { advisors: AdvisorsGridItem[] }) {
  if (!advisors.length) {
    return (
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
        <div className="p-8 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-800"></div>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            No advisors found
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Add advisors in Notion with an "Advisor" role to display them here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {advisors.map((advisor) => (
        <article
          key={advisor.id}
          className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:scale-[1.04] hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex items-center space-x-4">
            <figure className="relative h-20 w-20 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              {advisor.images[0] ? (
                <Image
                  src={advisor.images[0]}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-xl font-medium text-gray-400 dark:text-gray-600">
                    {advisor.name.charAt(0)}
                  </span>
                </div>
              )}
            </figure>
            <div className="min-w-0 flex-1">
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {advisor.name}
              </h3>
              {advisor.roles[0] && (
                <p
                  className="text-base text-gray-600 dark:text-gray-400"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {advisor.roles[0]}
                </p>
              )}
            </div>
          </div>

          {advisor.linkedin && (
            <div className="mt-4">
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View LinkedIn →
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export default AdvisorsGrid;
