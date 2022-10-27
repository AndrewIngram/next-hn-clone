import { fetchHn } from "~/app/hn";

import { type Story } from "./types";

import StoryComment from "./StoryComment";
import { startOfYear } from "date-fns";

type Props = {
  id: number;
};

export default async function StoryCommentList({ id }: Props) {
  const story: Story = await fetchHn(`item/${id}`);

  return story.kids && story.kids.length > 0 ? (
    <ol className="flex flex-col gap-4">
      {story.kids.slice(0, 30).map((id) => (
        <li key={id} className="text-sm">
          <StoryComment id={id} />
        </li>
      ))}
    </ol>
  ) : (
    <p>No comments yet</p>
  );
}
