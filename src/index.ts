import { Context, Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { Category as CategoryType } from "./types/HackerNews";
import { getStoriesDecorated } from "./clients/HackerNewsClient";
import Category from "./ui/components/Category/Category";
import App from "./ui/pages/App";
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

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
