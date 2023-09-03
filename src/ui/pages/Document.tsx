import * as elements from "typed-html";

const Document = ({ children }: elements.Attributes) => {
  return (
    "<!DOCTYPE html>" +
    (
      <html class="h-full w-full bg-[#2e2f31] text-white">
        <head>
          <title>HTMX News</title>
          <link href="/public/output.css" rel="stylesheet" />
        </head>
        <body class="h-full w-full">{children}</body>
      </html>
    )
  );
};

export default Document;
