import { useHn } from "~/app/hn";

import { notFound } from "next/dist/client/components/not-found";

import StoryHeader from "~/components/StoryHeader";
import StoryCommentList from "~/components/StoryCommentList";

export const config = {
  dynamic: "force-dynamic",
};

type Props = {
  params: { id: number };
};

// export const runtime = "experimental-edge";

export default function StoryDetailPage({ params: { id } }: Props) {
  if (!useHn(`item/${id}`)) {
    return notFound();
  }

  return (
    <article className="flex flex-col px-3 gap-6 pb-6">
      <StoryHeader id={id} />
      <StoryCommentList id={id} />
    </article>
  );
}
