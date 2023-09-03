import * as elements from "typed-html";

type CategoryItemImageProps = {
  src: string;
  url: string;
};

export const CategoryItemImage = ({ src, url }: CategoryItemImageProps) => {
  return (
    <a href={url} target="_blank">
      <img
        src={src}
        class="h-[70px] w-[70px] object-cover rounded-[5px] shrink-0"
      />
    </a>
  );
};

export default CategoryItemImage;
