import * as elements from "typed-html";

type CategoryItemImageProps = {
  src: string;
};

export const CategoryItemImage = ({ src }: CategoryItemImageProps) => {
  return (
    <img
      src={src}
      class="h-[70px] w-[70px] object-cover rounded-[5px] shrink-0 ml-[32px]"
    />
  );
};

export default CategoryItemImage;
