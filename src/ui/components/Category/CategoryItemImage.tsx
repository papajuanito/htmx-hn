import * as elements from "typed-html";

type CategoryItemImageProps = {
  src: string;
  url: string;
};

export const CategoryItemImage = ({ src, url }: CategoryItemImageProps) => {
  return (
    <a
      href={url}
      target="_blank"
      onclick="event.stopPropagation();"
      hx-push-url="false"
    >
      <img
        src={src}
        class="h-full w-full object-cover rounded-[5px] shrink-0"
      />
    </a>
  );
};

export default CategoryItemImage;
