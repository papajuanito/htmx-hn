import { Context, Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { CategoryType, Story as StoryType } from "./types/HackerNews";
import { getItem, getStoriesDecorated } from "./clients/HackerNewsClient";
import Category, {
  renderCategoryItemList,
} from "./ui/components/Category/Category";
import App from "./ui/pages/App";
import Document from "./ui/pages/Document";
import { getUrlMetadata } from "./clients/MetadataClient";
import CategoryItemImage from "./ui/components/Category/CategoryItemImage";
import Story from "./ui/components/Story/Story";
import StoryComment, {
  StoryCommentProps,
} from "./ui/components/Story/StoryComment";

const app = new Elysia().use(staticPlugin());

const categoryHandler = async ({ params, query, headers }: Context) => {
  const isHTMXRequest = headers["hx-request"] || false;
  const { offset } = query;

  const pageOffset = offset ? parseInt(offset as string, 10) : 0;

  const category =
    (params?.category as CategoryType) || CategoryType.TOP_STORIES;
  const categories = Object.values(CategoryType);

  if (!categories.includes(category)) {
    return "not found";
  }

  const stories = await getStoriesDecorated(category, pageOffset);

  const html = isHTMXRequest
    ? renderCategoryItemList({ category, stories, pageOffset })
    : App({ page: Category({ category, stories, pageOffset }) });

  const response = new Response(html as BodyInit, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });

  return response;
};

app.get("/", categoryHandler);

app.get("/:category", categoryHandler);
app.get("/item/:itemId", async ({ params, headers, query }) => {
  const { itemId } = params;
  const { isKid } = query;
  const isHTMXRequest = headers["hx-request"] || false;

  const id = parseInt(itemId, 10);
  const item = await getItem(id);

  const getPage = () => {
    switch (item.type) {
      case "story": {
        return Story(item as StoryType);
      }
      case "comment": {
        return StoryComment({ ...item, isKid } as StoryCommentProps);
      }
      default:
        return "";
    }
  };

  const html = isHTMXRequest ? getPage() : Document({ children: getPage() });

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
});

app.get("/metadata", async ({ query }) => {
  const { url } = query;

  const { image } = await getUrlMetadata(url as string);

  if (!image) {
    return null;
  }

  const response = new Response(
    CategoryItemImage({
      src: image,
      url: url as string,
      width: "70px",
      height: "70px",
    }),
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
  );
  return response;
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
