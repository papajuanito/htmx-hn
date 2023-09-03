import * as elements from "typed-html";
import { Story } from "../../../types/HackerNews";
import { getUrlHostname } from "../../../helpers/url";

const CategoryItem = ({
  index,
  title,
  url,
  by,
  time,
}: { index: number } & Partial<Story>) => {
  return (
    <li>
      <a
        href=""
        class="flex p-[14px] border-b-[1px] border-b-[#3d3d3d] items-center"
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
            {by} · <span>{time}</span>
          </div>
          <p class="mb-[8px]">Comments</p>
        </div>
        <img
          src="https://placehold.co/600x400/EEE/31343C"
          class="h-[70px] w-[70px] object-cover rounded-[5px] shrink-0 ml-[32px]"
        />
      </a>
    </li>
  );
};

export default CategoryItem;