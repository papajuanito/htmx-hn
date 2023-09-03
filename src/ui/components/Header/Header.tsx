import * as elements from "typed-html";
import LocalizedDate from "./LocalizedDate";

const Header = () => {
  return (
    <div class="p-[16px]">
      <LocalizedDate />
      <h1 class="font-semibold text-[24px] p-0 m-0">Hacker News</h1>
    </div>
  );
};

export default Header;
