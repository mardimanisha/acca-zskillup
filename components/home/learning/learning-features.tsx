import {
  Briefcase,
  ClipboardCheck,
  PlayCircle,
  Route,
  Target,
  Video,
  type LucideIcon,
} from "lucide-react";

import { LearningFeature } from "@/components/home/learning/learning-feature";
import {
  homeLearningContent,
  type LearningFeatureIcon,
} from "@/content/home-learning";
import { cn } from "@/lib/utils";

const icons: Record<LearningFeatureIcon, LucideIcon> = {
  route: Route,
  video: Video,
  playCircle: PlayCircle,
  target: Target,
  clipboardCheck: ClipboardCheck,
  briefcase: Briefcase,
};

export function LearningFeatures() {
  const { features } = homeLearningContent;

  return (
    // Dividers are borders on the cells, so the grid has no outer border:
    // mobile — a top border between stacked items;
    // md+ — a top border between rows and a left border on the right column.
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:flex-1">
      {features.map((feature, index) => {
        const rightColumn = index % 2 === 1;
        return (
          <li
            key={feature.title}
            className={cn(
              "border-[#E6F0EE] py-6 xl:flex xl:items-center xl:py-2.5 min-[106.25rem]:py-4",
              index > 0 && "border-t",
              index === 1 && "md:border-t-0",
              rightColumn ? "md:border-l md:px-6" : "md:pl-0 md:pr-6",
            )}
          >
            <LearningFeature
              icon={icons[feature.icon]}
              accent={feature.accent}
              title={feature.title}
              description={feature.description}
            />
          </li>
        );
      })}
    </ul>
  );
}
