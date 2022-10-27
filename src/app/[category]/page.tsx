import { fetchHn } from "~/app/hn";
import { notFound } from "next/navigation";

import StoryList from "~/components/StoryList";

export const config = {
  dynamic: "force-dynamic",
};

type Props = {
  params: { category: string };
};

export const runtime = "experimental-edge";

export default async function CategoryStoriesPage({
  params: { category },
}: Props) {
  if (!["new", "best", "top", "ask", "show", "jobs"].includes(category)) {
    return notFound();
  }

  if (category === "jobs") {
    category = "job";
  }

  const storyIds: Array<number> = await fetchHn(`${category}stories`);

  return <StoryList storyIds={storyIds} />;
}
