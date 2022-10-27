import { fetchHn } from "~/app/hn";

import StoryList from "~/components/StoryList";

export const config = {
  dynamic: "force-dynamic",
};

export const runtime = "experimental-edge";

export default async function TopStoriesPage() {
  const storyIds: Array<number> = await fetchHn("topstories");

  return <StoryList storyIds={storyIds} />;
}
