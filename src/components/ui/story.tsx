"use client";

import { cn } from "~/lib/utils";
import Image from "next/image";

export type StoryType = "news" | "spotlight" | "perspective" | "podcast";

export interface StoryProps {
  type: StoryType;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  logo?: string;
  action: "READ" | "WATCH" | "LISTEN";
  href: string;
  className?: string;
}

const storyTypeConfig = {
  news: {
    bgColor: "bg-green-600",
    dotColor: "bg-green-400",
    label: "NEWS",
  },
  spotlight: {
    bgColor: "bg-transparent",
    dotColor: "bg-white",
    label: "SPOTLIGHT",
  },
  perspective: {
    bgColor: "bg-black",
    dotColor: "bg-black",
    label: "PERSPECTIVE",
  },
  podcast: {
    bgColor: "bg-black",
    dotColor: "bg-black",
    label: "PODCAST",
  },
};

export const Story = ({
  type,
  title,
  subtitle,
  description,
  image,
  logo,
  action,
  href,
  className,
}: StoryProps) => {
  const config = storyTypeConfig[type];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block h-80 w-full overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl",
        config.bgColor,
        className,
      )}
    >
      {/* Background Image for spotlight */}
      {type === "spotlight" && image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay with doodles effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white">
              {config.label}
            </span>
            <div className={cn("h-2 w-2 rounded-full", config.dotColor)} />
          </div>
          <span className="text-sm font-medium text-white/80">{action}</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col justify-center">
          {type === "news" && logo && (
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="relative h-8 w-20">
                <Image
                  src={logo}
                  alt="Company logo"
                  fill
                  className="object-contain brightness-0 invert filter"
                />
              </div>
            </div>
          )}

          <h3 className="text-xl font-bold text-white lg:text-2xl">{title}</h3>

          {subtitle && (
            <p className="mt-2 text-sm text-white/80 lg:text-base">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="mt-3 text-sm text-white/70 lg:text-base">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
};
