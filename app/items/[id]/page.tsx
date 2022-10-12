import StoryHeader from "~/components/StoryHeader";
import StoryCommentList from "~/components/StoryCommentList";

type Props = {
  params: { id: number };
};

export default function StoryDetailPage({ params: { id } }: Props) {
  return (
    <article className="flex flex-col px-3 gap-6 pb-6">
      <StoryHeader id={id} />
      <StoryCommentList id={id} />
    </article>
  );
}
