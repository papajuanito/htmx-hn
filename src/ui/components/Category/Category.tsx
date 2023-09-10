import * as elements from "typed-html";
import CategoryItem from "./CategoryItem";
import { Story, CategoryType } from "../../../types/HackerNews";

type CategoryProps = {
  stories: Story[];
  pageOffset: number;
  category: CategoryType;
};

export const renderCategoryItemList = ({
  stories,
  pageOffset,
  category,
}: CategoryProps) => {
  return stories.map((story, index) => {
    const loadNextPage = index === stories.length - 1;

    return (
      <CategoryItem
        index={index}
        loadNextPage={loadNextPage}
        {...story}
        pageOffset={pageOffset + 1}
        category={category}
      />
    );
  });
};

const Category = (props: CategoryProps) => {
  return <ul class="h-full w-full">{renderCategoryItemList(props)}</ul>;
};

export default Category;
