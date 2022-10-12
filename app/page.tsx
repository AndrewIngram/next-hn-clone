import { useHn } from "~/app/hn";

import StoryList from "~/components/StoryList";

export default function TopStoriesPage() {
  const storyIds: Array<number> = useHn("topstories");

  return <StoryList storyIds={storyIds} />;
}
