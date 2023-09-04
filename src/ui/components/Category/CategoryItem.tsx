import * as elements from "typed-html";
import { Story } from "../../../types/HackerNews";
import { getUrlHostname } from "../../../helpers/url";

const CategoryItem = ({
  id,
  index,
  title,
  url,
  by,
  time,
}: { index: number } & Partial<Story>) => {
  return (
    <li>
      <button
        hx-get={`/item/${id}`}
        hx-trigger="click"
        hx-push-url="true"
        class="flex gap-[32px] w-full p-[14px] text-left border-b-[1px] border-b-[#3d3d3d] items-center"
      >
        <div class="flex flex-1 flex-col justify-center">
          <div class="text-[12px] mb-[8px]">
            {`${(index as number) + 1}.`}
            <span class="text-[13px] text-[#3f97e5] font-medium ml-[4px] tracking-[0.4px]">
              {getUrlHostname(url)}
            </span>
          </div>
          <p class="m-0 font-semibold tracking-[0.4px] leading-[1.2] mb-[4px]">
            {title}
          </p>
          <div class="mb-[8px] text-[14px] font-semibold">
            {by} ·{" "}
            <span class="font-normal">
              <relative-time data-timestamp={time!.toString()} />
            </span>
          </div>
          <p class="mb-[8px]">Comments</p>
        </div>
        <span
          class="block w-[70px]"
          hx-get={`/metadata?url=${encodeURIComponent(url!)}`}
          hx-trigger="load"
          hx-swap="outerHTML"
          hx-push-url="false"
        />
      </button>
    </li>
  );
};

export default CategoryItem;
