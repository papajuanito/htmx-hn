import * as elements from "typed-html";
import CategoryItem from "./CategoryItem";
import { Story } from "../../../types/HackerNews";

type CategoryProps = {
  stories: Story[];
};

const Category = ({ stories }: CategoryProps) => {
  return (
    <ul class="h-full w-full">
      {stories.map((story, index) => (
        <CategoryItem index={index} {...story} />
      ))}
    </ul>
  );
};

export default Category;
