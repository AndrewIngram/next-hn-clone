import { fetchHn } from "~/app/hn";

import { extractHost, timeAgo } from "~/app/utils";

import Link from "next/link";

import { type Story } from "./types";

type Props = {
  id: number;
};

function enPlural(count: number, singular: string, plural: string) {
  return count === 1 ? singular : plural;
}

export default async function StoryItem({ id }: Props) {
  const story: Story = await fetchHn(`item/${id}`);

  return (
    <article className="flex flex-col gap-0">
      <hgroup className="flex flex-wrap gap-1 items-baseline">
        <h2 className="font-medium text-sm">
          <Link
            href={story.url ? story.url : `/items/${id}`}
            prefetch={false}
            className="hover:underline"
          >
            {story.title}
          </Link>
        </h2>
        {story.url ? (
          <p className="text-gray-700 text-xs">({extractHost(story.url)})</p>
        ) : null}
      </hgroup>
      <div className="text-xs">
        {story.score} {enPlural(story.score, "point", "points")} by {story.by}{" "}
        <Link
          href={`/items/${id}`}
          prefetch={false}
          className="hover:underline"
        >
          <span>{timeAgo(story.time)} ago</span>
        </Link>{" "}
        | {story.descendants}{" "}
        <Link
          href={`/items/${id}`}
          prefetch={false}
          className="hover:underline"
        >
          {enPlural(story.descendants, "comment", "comments")}
        </Link>
      </div>
    </article>
  );
}
