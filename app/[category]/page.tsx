import { useHn } from "~/app/hn";

import StoryList from "~/components/StoryList";

type Props = {
  params: { category: string };
};

export default function CategoryStoriesPage({ params: { category } }: Props) {
  if (!["new", "best", "top", "ask", "show", "jobs"].includes(category)) {
    // not found
  }

  if (category === "jobs") {
    category = "job";
  }

  const storyIds: Array<number> = useHn(`${category}stories`);

  return <StoryList storyIds={storyIds} />;
}
