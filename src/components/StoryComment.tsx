import { useHn } from "~/app/hn";

import sanitizeHtml from "sanitize-html";
import { type Comment, type Deleted } from "./types";
import { timeAgo } from "~/app/utils";

type Props = {
  id: number;
};

export default function StoryComment({ id }: Props) {
  const comment: Comment | Deleted = useHn(`item/${id}`);

  if (comment.type !== "comment") {
    // error
  }

  if (typeof comment.deleted !== "undefined" && comment.deleted) {
    return null;
  }

  return (
    <article className="flex flex-col gap-2">
      <header className="text-xs text-neutral-600">
        {comment.by} {timeAgo(comment.time)} ago
      </header>
      <div className="flex flex-col gap-4">
        <div
          className="prose prose-neutral prose-sm max-w-none prose-p:text-neutral-900"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(comment.text) }}
        />
        {comment.kids && comment.kids.length > 0 ? (
          <ol className="flex flex-col gap-4">
            {comment.kids.map((id) => (
              <li key={id} className="pl-12">
                <StoryComment id={id} />
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </article>
  );
}
