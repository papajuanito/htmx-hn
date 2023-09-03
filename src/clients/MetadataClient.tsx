import NodeCache from "node-cache";
import parse from "node-html-parser";

const cache = new NodeCache({
  stdTTL: 60 * 60 * 2, // 2 hours
});

type Metadata = { [k: string]: string };

const getImageFromMetadata = (metadata: Metadata) => {
  if (metadata["og:image"]) {
    return metadata["og:image"];
  }

  if (metadata["twitter:image"]) {
    return metadata["twitter:image"];
  }
};

export const getUrlMetadata = async (url: string): Promise<Metadata> => {
  if (cache.has(url as string)) {
    return cache.get(url as string) as Metadata;
  }

  try {
    const response = await fetch(url);
    const body = await response.text();
    const root = parse(body);

    const metatags = root.querySelectorAll("meta");

    const metadata = metatags.reduce<Metadata>((acc, curr) => {
      const name = curr.getAttribute("name") ?? curr.getAttribute("property");
      const content = curr.getAttribute("content");

      if (!name || !content) return acc;

      return {
        ...acc,
        [name]: content,
      };
    }, {});

    const image = getImageFromMetadata(metadata);

    const payload = {
      ...metadata,
      image,
    };

    cache.set(url as string, payload);

    return payload as Metadata;
  } catch (e) {
    return {};
  }
};
