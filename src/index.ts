import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import App from "./ui/pages/App";

const app = new Elysia().use(staticPlugin());

app.get("/", () => {
  return new Response(App(), {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
