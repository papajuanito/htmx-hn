import * as elements from "typed-html";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div class="pt-[14px] mb-[18px]">
      <localized-date class="font-semibold tracking-[0.8px] px-[14px] mb-[14px] m-0 text-[12px] uppercase" />
      <h1 class="font-semibold text-[24px] px-[14px] py-0 m-0">Hacker News</h1>
      <Navigation />
    </div>
  );
};

export default Header;
