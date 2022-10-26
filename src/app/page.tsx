import { useHn } from "~/app/hn";

import StoryList from "~/components/StoryList";

export const config = {
  dynamic: "force-dynamic",
};

export default function TopStoriesPage() {
  const storyIds: Array<number> = useHn("topstories");

  return <StoryList storyIds={storyIds} />;
}
