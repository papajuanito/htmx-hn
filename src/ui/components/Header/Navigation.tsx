import * as elements from "typed-html";
import { CategoryType } from "../../../types/HackerNews";
import {
  StarFilled,
  EyeFilled,
  SendOutlined,
  QuestionCircleFilled,
  ExclamationCircleFilled,
  CodeFilled,
} from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { IconDefinition } from "@ant-design/icons-svg/lib/types";

type NAVBAR_ITEM = {
  icon: IconDefinition;
  title: string;
  to: string;
};

const NAVBAR_ITEMS: NAVBAR_ITEM[] = [
  {
    icon: StarFilled,
    title: "Top Stories",
    to: `/`,
  },
  {
    icon: QuestionCircleFilled,
    title: "Ask HN",
    to: `/${CategoryType.ASK_STORIES}`,
  },
  {
    icon: EyeFilled,
    title: "Show HN",
    to: `/${CategoryType.SHOW_STORIES}`,
  },
  {
    icon: ExclamationCircleFilled,
    title: "Best Stories",
    to: `/${CategoryType.BEST_STORIES}`,
  },
  {
    icon: SendOutlined,
    title: "New Stories",
    to: `/${CategoryType.NEW_STORIES}`,
  },
  {
    icon: CodeFilled,
    title: "Jobs",
    to: `/${CategoryType.JOB_STORIES}`,
  },
];

const NavigationPill = ({ title, to, icon }: NAVBAR_ITEM) => {
  return (
    <li class="block shrink-0">
      <a
        href={to as string}
        class="flex gap-[6px] justify-center items-center py-[6px] px-[20px] bg-[#4984f7] rounded-[18px] font-semibold shrink-0 no-underline tracking-[0.5px] text-white"
      >
        {renderIconDefinitionToSVGElement(icon as unknown as IconDefinition, {
          extraSVGAttrs: {
            width: "1em",
            height: "1em",
            fill: "currentColor",
          },
        })}
        {title}
      </a>
    </li>
  );
};

const Navigation = () => {
  return (
    <ul class="container-snap mt-[14px] px-[14px] flex gap-[8px] w-full overflow-x-scroll overflow-y-hidden">
      {NAVBAR_ITEMS.map((item) => (
        <NavigationPill {...item} />
      ))}
    </ul>
  );
};

export default Navigation;
