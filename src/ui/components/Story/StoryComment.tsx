import * as elements from "typed-html";
import { Comment } from "../../../types/HackerNews";

type StoryCommentSkeletonProps = {
  itemId: number;
  isKid?: string;
};

export const StoryCommentSkeleton = ({
  itemId,
  isKid,
}: StoryCommentSkeletonProps) => {
  console.log(isKid);
  return (
    <div
      hx-get={`/item/${itemId}?isKid=${isKid}`}
      hx-swap="outerHTML"
      hx-trigger="load"
      class="flex justify-center flex-col gap-[8px] p-[14px] no-underline text-white"
    >
      <div class="bg-[#373737] h-[12px] rounded-[3px] overflow-hidden w-[20%]" />
      <div class="bg-[#373737] h-[12px] rounded-[3px] overflow-hidden w-full" />
      <div class="bg-[#373737] h-[12px] rounded-[3px] overflow-hidden w-[90%]" />
      <div class="bg-[#373737] h-[12px] rounded-[3px] overflow-hidden w-full" />
      <div class="bg-[#373737] h-[12px] rounded-[3px] overflow-hidden w-[80%]" />
      <div class="bg-[#373737] h-[12px] rounded-[3px] overflow-hidden w-[85%]" />
    </div>
  );
};

export type StoryCommentProps = Comment & {
  isKid?: string;
};

const StoryComment = ({ by, time, text, kids, isKid }: StoryCommentProps) => {
  const renderKids = () => {
    if (!kids || kids.length <= 0) {
      return null;
    }

    return (
      <div class="p-0 h-full border-l-[#3d3d3d] border-l-[2px]">
        {kids.map((kid) => (
          <StoryCommentSkeleton itemId={kid} isKid="true" />
        ))}
      </div>
    );
  };

  return (
    <div
      class={`p-0 pt-[10px] px-[10px] text-[14px] tracking-[0.4px] ${isKid !== "true" && "border-b-[2px] border-b-[#3d3d3d]"
        }`}
    >
      <div class="text-[14px] mb-[8px] font-normal">
        <span class="font-semibold text-[#f67943]">{by}</span> ·{" "}
        <relative-time data-timestamp={time!.toString()} />
        {isKid}
      </div>
      <div class="overflow-hidden pb-[10px] tracking-[0.4px] [&_a]:text-[#3f97e5] [&_pre]:overflow-x-auto [&_pre]:whitespace-pre-wrap [&_pre]:break-words">
        {text}
      </div>
      {renderKids()}
    </div>
  );
};

export default StoryComment;
