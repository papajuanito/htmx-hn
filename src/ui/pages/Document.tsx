import * as elements from "typed-html";

const Document = ({ children }: elements.Attributes) => {
  return (
    "<!DOCTYPE html>" +
    (
      <html class="h-full w-full bg-[#2e2f31] text-white">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>HTMX News</title>
          <link href="/public/output.css" rel="stylesheet" />
          <link rel="manifest" href="/public/manifest.json" />
          <script src="/public/bundle.js" />
          <script src="https://unpkg.com/htmx.org@1.9.5" />
        </head>
        <body class="h-full w-full">{children}</body>
      </html>
    )
  );
};

export default Document;
