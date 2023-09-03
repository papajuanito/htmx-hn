import { Context, Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

import { Category as CategoryType } from "./types/HackerNews";
import { getStoriesDecorated } from "./clients/HackerNewsClient";
import Category from "./ui/components/Category/Category";
import App from "./ui/pages/App";
import { getUrlMetadata } from "./clients/MetadataClient";
import CategoryItemImage from "./ui/components/Category/CategoryItemImage";

const app = new Elysia().use(staticPlugin());

const categoryHandler = async ({ params }: Context) => {
  const category =
    (params?.category as CategoryType) || CategoryType.TOP_STORIES;

  const categories = Object.values(CategoryType);

  if (!categories.includes(category)) {
    return "not found";
  }

  const stories = await getStoriesDecorated(category);

  const page = Category({ stories });

  const response = new Response(App({ page }), {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });

  return response;
};

app.get("/", categoryHandler);

app.get("/:category", categoryHandler);

app.get("/metadata", async ({ query, set }) => {
  const { url } = query;

  const { image } = await getUrlMetadata(url as string);

  if (!image) {
    return (set.status = 404);
  }

  const response = new Response(CategoryItemImage({ src: image }), {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
  return response;
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
