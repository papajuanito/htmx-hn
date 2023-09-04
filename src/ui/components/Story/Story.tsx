import * as elements from "typed-html";
import { Story as StoryType } from "../../../types/HackerNews";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import {
  HeartOutlined,
  LeftOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons-svg";
import { getUrlHostname } from "../../../helpers/url";
import { StoryCommentSkeleton } from "./StoryComment";

const Story = ({ title, url, kids }: StoryType) => {
  return (
    <div id="top-content" hx-swap-oob="true" class="flex-1">
      <div class="border-b-[2px] border-b-[#3d3d3d]">
        <div class="flex justify-between pt-[16px] pr-[16px] pb-0 pl-[10px]">
          <button class="flex items-center">
            {renderIconDefinitionToSVGElement(LeftOutlined, {
              extraSVGAttrs: {
                fill: "currentColor",
                width: "1.2em",
                height: "1.2em",
              },
            })}
            <a hx-get="/" hx-push-url="true" class="ml-[4px]">
              Stories
            </a>
          </button>
          <div class="flex gap-[10px]">
            <button>
              {renderIconDefinitionToSVGElement(HeartOutlined, {
                extraSVGAttrs: {
                  fill: "currentColor",
                  width: "1.2em",
                  height: "1.2em",
                },
              })}
            </button>
            <button>
              {renderIconDefinitionToSVGElement(ShareAltOutlined, {
                extraSVGAttrs: {
                  fill: "currentColor",
                  width: "1.2em",
                  height: "1.2em",
                },
              })}
            </button>
            <button>
              {renderIconDefinitionToSVGElement(MoreOutlined, {
                extraSVGAttrs: {
                  fill: "currentColor",
                  width: "1.2em",
                  height: "1.2em",
                },
              })}
            </button>
          </div>
        </div>
        <div class="p-[14px]">
          <h1 class="text-[20px] font-semibold tracking-[0.4px] leading-[1.1]">
            {title}
          </h1>
          <span class="text-[14px] text-[#3f97e5] font-semibold ml-[4px] tracking-[0.4px]">
            {getUrlHostname(url)}
          </span>
          <span
            class="block h-[180px] mt-[12px] overflow-hidden"
            hx-get={`/metadata?url=${encodeURIComponent(url!)}`}
            hx-trigger="load"
            hx-swap="innerHTML"
            hx-push-url="false"
          />
          <div class="mt-[12px]">Upvotes</div>
        </div>
      </div>
      <div>
        {kids.map((kid) => (
          <StoryCommentSkeleton itemId={kid} />
        ))}
      </div>
    </div>
  );
};

export default Story;
