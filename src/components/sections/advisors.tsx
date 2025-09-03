import { fetchAdvisors } from "~/server/notion/advisors";
import Image from "next/image";
import Link from "next/link";

export default async function AdvisorsSection() {
  const advisors = await fetchAdvisors();

  if (!advisors.length) {
    return (
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
        <div className="p-8 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-800"></div>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            No advisors connected yet
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Set up your Notion integration to display advisors here.
          </p>
          <div className="mt-6">
            <Link
              href="https://www.notion.so/"
              target="_blank"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Connect Notion
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            Required: NOTION_TOKEN and NOTION_ADVISORS_DATABASE_ID
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {advisors.map((advisor) => (
        <article
          key={advisor.id}
          className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex items-center space-x-4">
            <figure className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              {advisor.avatarUrl ? (
                <Image
                  src={advisor.avatarUrl}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-lg font-medium text-gray-400 dark:text-gray-600">
                    {advisor.name.charAt(0)}
                  </span>
                </div>
              )}
            </figure>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-semibold text-gray-900 dark:text-white">
                {advisor.name}
              </h3>
              {advisor.role && (
                <p className="truncate text-sm text-gray-600 dark:text-gray-400">
                  {advisor.role}
                </p>
              )}
            </div>
          </div>

          {advisor.linkedinUrl && (
            <div className="mt-4">
              <a
                href={advisor.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
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
