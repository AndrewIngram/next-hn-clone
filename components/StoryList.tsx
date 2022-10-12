import StoryHeader from "./StoryHeader";

type Props = {
  storyIds: Array<number>;
};

export default function StoryList({ storyIds }: Props) {
  return (
    <ol className="flex flex-col pl-6 gap-1.5">
      {storyIds.slice(0, 30).map((id) => (
        <li key={id} className="list-decimal text-sm">
          <StoryHeader id={id} />
        </li>
      ))}
    </ol>
  );
}
